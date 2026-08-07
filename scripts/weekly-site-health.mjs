#!/usr/bin/env node
// Weekly production health check: crawls known routes, checks sitemap/robots,
// runs an axe-core accessibility scan against a subset of pages, and writes a
// dated Markdown report to reports/site-health/YYYY-MM-DD/report.md.
//
// This script only reads production (GET requests + a real browser scan). It
// never submits forms, logs in, or writes anything to the live site.
//
// Exit code is 0 unless the homepage itself is unreachable/non-200, in which
// case it exits 1 so the CI job fails loudly and GitHub notifies the repo
// owner (see .github/workflows/weekly-site-health.yml).

import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const SITE_URL = process.env.SITE_URL || "https://www.seanaustinmusic.com";

const ROUTES = [
  "/",
  "/music",
  "/videos",
  "/tour",
  "/social",
  "/contact",
  "/epk",
  "/fan-club",
  "/merch",
  "/reggae-artist-houston-texas",
  "/this-route-should-not-exist-health-check", // expect the SPA 404 UI, not a server error
];

// Keep the a11y scan to a handful of representative templates to keep CI time
// (and false-positive noise from third-party embeds) manageable.
const A11Y_ROUTES = ["/", "/music", "/videos", "/tour", "/contact"];

const today = new Date().toISOString().slice(0, 10);
const reportDir = path.join("reports", "site-health", today);
fs.mkdirSync(reportDir, { recursive: true });

async function checkRoute(route) {
  const url = `${SITE_URL}${route}`;
  const start = Date.now();
  try {
    const res = await fetch(url, { redirect: "manual" });
    return {
      route,
      status: res.status,
      ok: res.status >= 200 && res.status < 400,
      ms: Date.now() - start,
    };
  } catch (err) {
    return { route, status: 0, ok: false, ms: Date.now() - start, error: String(err) };
  }
}

async function checkText(url) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    return { url, status: res.status, ok: res.status === 200, length: text.length };
  } catch (err) {
    return { url, status: 0, ok: false, error: String(err) };
  }
}

async function launchBrowser() {
  // In CI, `npx playwright install --with-deps chromium` puts the browser at
  // Playwright's normal default location and no override is needed. This env
  // var only exists so the script can be run against a browser installed at
  // a non-default path (e.g. for local testing) without touching the source.
  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined;
  // Respect an outbound HTTPS proxy if one is configured in the environment —
  // Chromium doesn't pick this up automatically the way Node's fetch() does.
  const proxyServer = process.env.HTTPS_PROXY || process.env.https_proxy;
  return chromium.launch({
    executablePath,
    proxy: proxyServer ? { server: proxyServer } : undefined,
  });
}

async function runA11yScan(browser) {
  const axePath = path.join("node_modules", "axe-core", "axe.min.js");
  const results = [];
  for (const route of A11Y_ROUTES) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    try {
      await page.goto(`${SITE_URL}${route}`, { waitUntil: "domcontentloaded", timeout: 20000 });
      await page.waitForTimeout(1000);
      await page.addScriptTag({ path: axePath });
      const result = await page.evaluate(async () => window.axe.run(document, { resultTypes: ["violations"] }));
      results.push({
        route,
        violations: result.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          help: v.help,
          nodes: v.nodes.length,
        })),
      });
    } catch (err) {
      results.push({ route, error: String(err) });
    } finally {
      await page.close();
    }
  }
  return results;
}

async function main() {
  const startedAt = new Date().toISOString();

  const routeResults = await Promise.all(ROUTES.map(checkRoute));
  const sitemap = await checkText(`${SITE_URL}/sitemap.xml`);
  const robots = await checkText(`${SITE_URL}/robots.txt`);

  let a11yResults = [];
  let a11yError = null;
  try {
    const browser = await launchBrowser();
    a11yResults = await runA11yScan(browser);
    await browser.close();
  } catch (err) {
    a11yError = String(err);
  }

  const homepageOk = routeResults.find((r) => r.route === "/")?.ok;
  const brokenRoutes = routeResults.filter((r) => !r.ok);
  const totalA11yViolations = a11yResults.reduce(
    (sum, r) => sum + (r.violations ? r.violations.length : 0),
    0
  );

  const lines = [];
  lines.push(`# Weekly Site Health Report — ${today}`);
  lines.push("");
  lines.push(`- **Production URL tested:** ${SITE_URL}`);
  lines.push(`- **Started:** ${startedAt}`);
  lines.push(`- **Completed:** ${new Date().toISOString()}`);
  lines.push(`- **Overall status:** ${homepageOk && brokenRoutes.length === 0 ? "✅ Healthy" : "⚠️ Issues found"}`);
  lines.push("");

  lines.push("## Route crawl");
  lines.push("");
  lines.push("| Route | Status | OK | Response time |");
  lines.push("|---|---|---|---|");
  for (const r of routeResults) {
    lines.push(`| \`${r.route}\` | ${r.status} | ${r.ok ? "✅" : "❌"} | ${r.ms}ms |`);
  }
  lines.push("");

  lines.push("## Sitemap & robots.txt");
  lines.push("");
  lines.push(`- \`/sitemap.xml\`: ${sitemap.ok ? "✅" : "❌"} (status ${sitemap.status})`);
  lines.push(`- \`/robots.txt\`: ${robots.ok ? "✅" : "❌"} (status ${robots.status})`);
  lines.push("");

  lines.push("## Accessibility (axe-core)");
  lines.push("");
  if (a11yError) {
    lines.push(`Scan could not run: ${a11yError}`);
  } else {
    lines.push(`Total violations across ${A11Y_ROUTES.length} pages: **${totalA11yViolations}**`);
    lines.push("");
    for (const r of a11yResults) {
      if (r.error) {
        lines.push(`- \`${r.route}\`: scan error — ${r.error}`);
        continue;
      }
      if (r.violations.length === 0) {
        lines.push(`- \`${r.route}\`: ✅ no violations`);
      } else {
        lines.push(`- \`${r.route}\`: ${r.violations.length} violation(s)`);
        for (const v of r.violations) {
          lines.push(`  - **${v.id}** (${v.impact}): ${v.help} — ${v.nodes} node(s)`);
        }
      }
    }
  }
  lines.push("");

  lines.push("## Recommended human actions");
  lines.push("");
  if (!homepageOk) {
    lines.push("- 🔴 **P0: homepage is not returning a healthy response.** Investigate immediately.");
  }
  if (brokenRoutes.length > 0 && homepageOk) {
    lines.push(`- 🟠 **P1: ${brokenRoutes.length} route(s) are not returning a healthy response.** See table above.`);
  }
  if (totalA11yViolations > 0) {
    lines.push(`- 🟡 **P2: ${totalA11yViolations} accessibility violation(s) found.** Review and fix where reasonable.`);
  }
  if (homepageOk && brokenRoutes.length === 0 && totalA11yViolations === 0) {
    lines.push("- None — site is healthy.");
  }
  lines.push("");
  lines.push(
    "This report is audit-only: it does not modify code or the live site. Fixes for anything flagged here should go through a normal PR."
  );
  lines.push("");

  const reportPath = path.join(reportDir, "report.md");
  fs.writeFileSync(reportPath, lines.join("\n"));
  fs.writeFileSync(
    path.join(reportDir, "raw-results.json"),
    JSON.stringify({ routeResults, sitemap, robots, a11yResults }, null, 2)
  );

  console.log(`Report written to ${reportPath}`);
  console.log(`Homepage healthy: ${homepageOk}`);
  console.log(`Broken routes: ${brokenRoutes.length}`);
  console.log(`Accessibility violations: ${totalA11yViolations}`);

  // Fail the job (and thus trigger GitHub's notification to the repo owner)
  // only for the P0 case: the homepage itself is down.
  if (!homepageOk) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Weekly site health check crashed:", err);
  process.exit(1);
});
