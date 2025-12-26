"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, User, Search } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Explore", icon: Compass },
    { href: "/login", label: "Account", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[var(--border)] pb-safe">
      <nav className="flex items-center justify-around h-16">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive
                  ? "text-[var(--primary)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              <link.icon className={`w-6 h-6 ${isActive ? "fill-current" : ""}`} />
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
