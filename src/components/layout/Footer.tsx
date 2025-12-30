"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, ArrowRight, Smartphone, Apple } from "lucide-react";
import { Capacitor } from "@capacitor/core";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    // Check both isNativePlatform and explicit platform names for robustness
    const platform = Capacitor.getPlatform();
    const isNativeCheck = Capacitor.isNativePlatform() || platform === 'android' || platform === 'ios';
    console.log('Footer Platform Check:', { platform, isNative: isNativeCheck }); // Debug log
    setIsNative(isNativeCheck);
  }, []);

  if (isNative) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/blog", label: "Blog" },
      { href: "/press", label: "Press" },
    ],
    support: [
      { href: "/help", label: "Help Center" },
      { href: "/safety", label: "Safety Center" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
    partners: [
      { href: "/seller", label: "Become a Partner" },
      { href: "/delivery", label: "Delivery Partners" },
      { href: "/business", label: "For Business" },
    ],
  };

  return (
    <footer className="bg-[#0f0f0f] text-white overflow-hidden">
        {/* Newsletter Section */}
        <div className="border-b border-white/5 bg-white/[0.02]">
            <div className="container py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-xl font-bold tracking-tight">Stay updated with offers</h3>
                        <p className="text-gray-400 text-sm">Get the latest deals and updates directly to your inbox.</p>
                    </div>
                    <div className="w-full max-w-md">
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email address"
                                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                            />
                            <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--primary-dark)] transition-colors flex items-center gap-2">
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[var(--primary)] tracking-tighter">
              ZEROZAYA
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed pr-6">
              Empowering local flavors. Zerozaya connects you with the best restaurants and food spots in your city with lightning-fast delivery.
            </p>
            <div className="flex gap-4 pt-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--primary)] hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Discover</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--primary)] text-sm transition-colors duration-200 block w-fit"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--primary)] text-sm transition-colors duration-200 block w-fit"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get App */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Get the App</h4>
            <div className="space-y-4">
               <button className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-xl transition-all group">
                    <Apple className="w-8 h-8 text-gray-300 group-hover:text-white" />
                    <div className="text-left">
                        <div className="text-[10px] uppercase font-semibold text-gray-500 group-hover:text-gray-400">Download on the</div>
                        <div className="text-sm font-bold text-gray-300 group-hover:text-white">App Store</div>
                    </div>
               </button>
               <button className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-xl transition-all group">
                    <Smartphone className="w-8 h-8 text-gray-300 group-hover:text-white" />
                    <div className="text-left">
                        <div className="text-[10px] uppercase font-semibold text-gray-500 group-hover:text-gray-400">Get it on</div>
                        <div className="text-sm font-bold text-gray-300 group-hover:text-white">Google Play</div>
                    </div>
               </button>
            </div>
            
             <div className="mt-8 pt-8 border-t border-white/5 space-y-3">
                <a href="mailto:hello@zerozaya.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[var(--primary)] transition-colors">
                    <Mail className="w-4 h-4" />
                    hello@zerozaya.com
                </a>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-medium tracking-wide">
            © {currentYear} ZEROZAYA INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-600 text-xs flex items-center gap-1.5 hover:text-gray-400 transition-colors cursor-pointer">
                Privacy
            </span>
            <span className="text-gray-600 text-xs flex items-center gap-1.5 hover:text-gray-400 transition-colors cursor-pointer">
                Terms
            </span>
             <span className="text-gray-600 text-xs flex items-center gap-1.5 hover:text-gray-400 transition-colors cursor-pointer">
                Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
