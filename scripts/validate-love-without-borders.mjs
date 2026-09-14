/** Dependency-free static checks for the public Love Without Borders source kit. */
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const directory = join(root, 'campaigns', 'love-without-borders');
const website = 'https://www.seanaustinmusic.com/';
const channel = 'https://www.youtube.com/@SeanAustinReggae';
const expected = [
  'README.md',
  'articles/fi-yu-forever.md',
  'articles/love-without-borders.md',
  'articles/one-more-chance.md',
  'campaign-identity.md',
  'creator-and-story-briefs.md',
  'localized-metadata.json',
  'multilingual-copy.md',
  'owned-channel-conversion.md',
  'preview/index.html',
  'radio-host-scripts.md',
].sort();

function walk(path) {
  return readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
    const full = join(path, entry.name);
    assert(!entry.isSymbolicLink(), `Unexpected symlink: ${full}`);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(directory);
assert.deepEqual(files.map((path) => relative(directory, path).replaceAll('\\', '/')).sort(), expected);
for (const path of files) {
  const text = readFileSync(path, 'utf8');
  assert(text.includes(website), `Missing official website: ${path}`);
  assert(text.includes(channel), `Missing official YouTube channel: ${path}`);
  assert(!text.includes('https://seanaustinmusic.com/'), `Outdated website spelling: ${path}`);
  assert(!/\b1a0a[0-9a-f]{8,}\b|\bLabel_\d+\b|mail\.google\.com|drive\.google\.com|\bUCioAvub6WhUgfwT604rMugQ\b/.test(text), `Private campaign/account reference: ${path}`);
  const emails = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [];
  assert(emails.every((email) => email === 'seanaustinreggae@gmail.com'), `Unexpected email address: ${path}`);
}

const metadata = JSON.parse(readFileSync(join(directory, 'localized-metadata.json'), 'utf8'));
assert.deepEqual(Object.keys(metadata).sort(), ['en', 'es', 'fr', 'pt-BR']);
for (const [locale, item] of Object.entries(metadata)) {
  assert.equal(item.website, website, locale);
  assert.equal(item.channel, channel, locale);
  assert.equal(item.omc_video, 'https://www.youtube.com/watch?v=SdK9K9vhaMo', locale);
  assert.equal(item.fyf_video, 'https://youtu.be/bXUj-hX-YWc', locale);
  assert(item.omc_intro.includes('XO'), `OMC producer: ${locale}`);
  assert(item.fyf_intro.includes('Troyton Music'), `FYF producer: ${locale}`);
  for (const song of ['omc', 'fyf']) {
    assert(item[`${song}_title`].includes('Sean Austin'), locale);
    assert(item[`${song}_title`].length <= 100, `Title too long: ${locale}/${song}`);
    assert(item[`${song}_description`].includes(website), locale);
    assert(item[`${song}_description`].includes(channel), locale);
  }
}

const html = readFileSync(join(directory, 'preview', 'index.html'), 'utf8');
assert(html.includes('<html lang="en">'));
assert(html.includes('content="width=device-width,initial-scale=1"'));
assert(html.includes('name="robots" content="noindex,nofollow"'));
assert(html.includes('a:focus-visible,button:focus-visible'));
assert(html.includes('type="button" id="load-video"'));
assert(html.includes("addEventListener('click'"));
assert(html.includes('https://www.youtube-nocookie.com/embed/bXUj-hX-YWc'));
assert(html.includes('https://www.youtube.com/watch?v=SdK9K9vhaMo'));
assert(html.includes('<noscript>'));
assert(!/<form\b|<script\b[^>]*\bsrc\s*=|autoplay[=;]|dangerouslySetInnerHTML/i.test(html));

const radio = readFileSync(join(directory, 'radio-host-scripts.md'), 'utf8');
assert.equal((radio.match(/^## Segment \d:/gm) ?? []).length, 4);
const briefs = readFileSync(join(directory, 'creator-and-story-briefs.md'), 'utf8');
assert.equal((briefs.match(/^### Brief [A-C]:/gm) ?? []).length, 3);
for (const name of expected.filter((name) => name.startsWith('articles/'))) {
  assert(readFileSync(join(directory, name), 'utf8').startsWith('STATUS: Prepared'));
}
console.log(`PASS: ${files.length} public campaign files; four radio scripts; three creator briefs; four locales/eight metadata sets; three article drafts; preview safety and privacy checks.`);
console.log('Static checks only. No browser playback, application build, live publishing or audience-growth verification is implied.');
