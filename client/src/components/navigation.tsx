import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaXTwitter, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";

// The site's actual brand mark — same file used as the browser tab favicon,
// so the logo in the nav always matches what's in the tab.
const siteLogo = "/favicon.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/latest-release", label: "Latest Release" },
  { href: "/music", label: "Music" },
  { href: "/videos", label: "Videos" },
  { href: "/merch", label: "Merch" },
  { href: "/tour", label: "Tour" },
  { href: "/social", label: "Social" },
  { href: "/contact", label: "Contact" },
  { href: "/epk", label: "EPK" },
];

const socialLinks = [
  { href: "https://instagram.com/iamseanaustin", icon: FaInstagram, label: "Instagram" },
  { href: "https://x.com/iamseanaustin", icon: FaXTwitter, label: "X" },
  { href: "https://www.youtube.com/@SeanAustinReggae", icon: FaYoutube, label: "YouTube" },
  { href: "https://facebook.com/iamseanaustin", icon: FaFacebook, label: "Facebook" },
  { href: "https://tiktok.com/@iamseanaustin", icon: FaTiktok, label: "TikTok" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <Container>
        <div className="flex items-center justify-between gap-4 h-16 flex-wrap">
          <Link href="/" data-testid="link-home-logo">
            <img
              src={siteLogo}
              alt="Sean Austin"
              className="h-12 w-12 rounded-full object-cover border-2 border-white/20"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                  className={`px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded-md ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                data-testid={`link-social-${social.label.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors p-1"
              >
                <social.icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden h-11 w-11"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </Button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  onClick={() => setMobileOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  className={`block px-3 py-3 text-sm font-medium tracking-wide uppercase transition-colors rounded-md ${
                    location === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 px-3 border-t border-border/50">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
