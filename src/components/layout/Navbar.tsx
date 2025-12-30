
import Link from "next/link";
import { Search } from "lucide-react";
export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="absolute md:fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--border)] h-[var(--header-height)] pt-[var(--sat)] transition-all duration-200">
      <div className="container h-full">
        <nav className="flex items-center justify-between h-full gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold text-[var(--primary)] tracking-tight">
              ZEROZAYA
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
             <div className="flex items-center gap-1 bg-[var(--muted)]/50 p-1 rounded-full border border-[var(--border)]/50 backdrop-blur-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-5 py-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-white rounded-full transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>

          {/* Desktop Actions & Search */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
             {/* Integrated Search Bar */}
            <div className="relative group">
                <div className="flex items-center gap-2 px-3 py-2 bg-[var(--muted)]/30 border border-[var(--border)] rounded-full focus-within:border-[var(--primary)] focus-within:bg-white focus-within:shadow-sm transition-all duration-200 w-64">
                    <Search className="w-4 h-4 text-[var(--muted-foreground)] group-focus-within:text-[var(--primary)]" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-transparent border-none outline-none text-sm w-full placeholder:text-[var(--muted-foreground)] text-[var(--foreground)]"
                    />
                </div>
            </div>

            <div className="h-6 w-px bg-[var(--border)] mx-1"></div>

            <Link href="/login" className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--primary)] px-2 transition-colors">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary text-sm py-2 px-5 rounded-full shadow-sm hover:shadow-md">
              Get Started
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="/search" className="p-2 text-[var(--foreground)]">
               <Search className="w-6 h-6" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
