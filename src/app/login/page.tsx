"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, User, Store } from "lucide-react";

type UserType = "customer" | "seller";

export default function LoginPage() {
  const [userType, setUserType] = useState<UserType>("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - would integrate with auth later
    console.log("Login:", { userType, email, password });
    alert(`Logged in as ${userType}!`);
  };

  return (
    <div className="min-h-screen pt-safe-header flex items-center justify-center bg-[var(--muted)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-4"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-[var(--border)]">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold text-[var(--primary)]">ZEROZAYA</h1>
            </Link>
            <p className="text-[var(--muted-foreground)] mt-2">
              Welcome back! Please sign in to continue.
            </p>
          </div>

          {/* User Type Toggle */}
          <div className="flex p-1 bg-[var(--muted)] rounded-xl mb-6">
            <button
              onClick={() => setUserType("customer")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                userType === "customer"
                  ? "bg-white text-[var(--primary)] shadow-sm"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              <User className="w-4 h-4" />
              Customer
            </button>
            <button
              onClick={() => setUserType("seller")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                userType === "seller"
                  ? "bg-white text-[var(--primary)] shadow-sm"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              <Store className="w-4 h-4" />
              Seller
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Email Address
              </label>
              <div className="flex items-center gap-3 px-4 py-3 border-[1.5px] border-[var(--border)] rounded-lg bg-[var(--background)] focus-within:border-[var(--primary)] focus-within:ring-[3px] focus-within:ring-[#2E8B571A] transition-all duration-200">
                <Mail className="w-5 h-5 text-[var(--muted-foreground)] shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] h-full"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Password
              </label>
              <div className="flex items-center gap-3 px-4 py-3 border-[1.5px] border-[var(--border)] rounded-lg bg-[var(--background)] focus-within:border-[var(--primary)] focus-within:ring-[3px] focus-within:ring-[#2E8B571A] transition-all duration-200">
                <Lock className="w-5 h-5 text-[var(--muted-foreground)] shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] h-full"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] focus:outline-none shrink-0"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]"
                />
                <span className="text-[var(--muted-foreground)]">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-[var(--primary)] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--border)]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-[var(--muted-foreground)]">
                or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex flex-col gap-3">
            <button className="btn btn-outline w-full gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-[var(--muted-foreground)] mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[var(--primary)] font-medium hover:underline"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
