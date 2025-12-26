import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
      { href: "/blog", label: "Blog" },
    ],
    support: [
      { href: "/help", label: "Help Center" },
      { href: "/faq", label: "FAQ" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
    partners: [
      { href: "/seller/register", label: "Become a Seller" },
      { href: "/seller/login", label: "Seller Login" },
      { href: "/partner", label: "Partner with Us" },
    ],
  };

  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[var(--primary-light)]">
              ZEROZAYA
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the best local food spots near you. Browse menus, explore
              dishes, and find your next favorite meal.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[var(--primary)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[var(--primary)] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[var(--primary)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Links */}
          <div>
            <h4 className="font-semibold mb-6">For Partners</h4>
            <ul className="space-y-3">
              {footerLinks.partners.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@zerozaya.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zerozaya. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
