"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Store,
  Phone,
  MapPin,
} from "lucide-react";

type UserType = "customer" | "seller";

export default function RegisterPage() {
  const [userType, setUserType] = useState<UserType>("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    // Seller-specific fields
    restaurantName: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Mock registration
    console.log("Register:", { userType, ...formData });
    alert(`Registered as ${userType}!`);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center bg-[var(--muted)]">
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
              Create your account to get started.
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

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Full Name
              </label>
              <div className="flex items-center gap-3 px-4 py-3 border-[1.5px] border-[var(--border)] rounded-lg bg-[var(--background)] focus-within:border-[var(--primary)] focus-within:ring-[3px] focus-within:ring-[#2E8B571A] transition-all duration-200">
                <User className="w-5 h-5 text-[var(--muted-foreground)] shrink-0" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] h-full"
                  required
                />
              </div>
            </div>

            {userType === "seller" && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                    Restaurant Name
                  </label>
                  <div className="flex items-center gap-3 px-4 py-3 border-[1.5px] border-[var(--border)] rounded-lg bg-[var(--background)] focus-within:border-[var(--primary)] focus-within:ring-[3px] focus-within:ring-[#2E8B571A] transition-all duration-200">
                    <Store className="w-5 h-5 text-[var(--muted-foreground)] shrink-0" />
                    <input
                      type="text"
                      name="restaurantName"
                      value={formData.restaurantName}
                      onChange={handleChange}
                      placeholder="Enter restaurant name"
                      className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] h-full"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                    Restaurant Address
                  </label>
                  <div className="flex items-center gap-3 px-4 py-3 border-[1.5px] border-[var(--border)] rounded-lg bg-[var(--background)] focus-within:border-[var(--primary)] focus-within:ring-[3px] focus-within:ring-[#2E8B571A] transition-all duration-200">
                    <MapPin className="w-5 h-5 text-[var(--muted-foreground)] shrink-0" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter restaurant address"
                      className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] h-full"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Email Address
              </label>
              <div className="flex items-center gap-3 px-4 py-3 border-[1.5px] border-[var(--border)] rounded-lg bg-[var(--background)] focus-within:border-[var(--primary)] focus-within:ring-[3px] focus-within:ring-[#2E8B571A] transition-all duration-200">
                <Mail className="w-5 h-5 text-[var(--muted-foreground)] shrink-0" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] h-full"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Phone Number
              </label>
              <div className="flex items-center gap-3 px-4 py-3 border-[1.5px] border-[var(--border)] rounded-lg bg-[var(--background)] focus-within:border-[var(--primary)] focus-within:ring-[3px] focus-within:ring-[#2E8B571A] transition-all duration-200">
                <Phone className="w-5 h-5 text-[var(--muted-foreground)] shrink-0" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] h-full"
                  required
                  minLength={8}
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

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Confirm Password
              </label>
              <div className="flex items-center gap-3 px-4 py-3 border-[1.5px] border-[var(--border)] rounded-lg bg-[var(--background)] focus-within:border-[var(--primary)] focus-within:ring-[3px] focus-within:ring-[#2E8B571A] transition-all duration-200">
                <Lock className="w-5 h-5 text-[var(--muted-foreground)] shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] h-full"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-1 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]"
                required
              />
              <label
                htmlFor="terms"
                className="text-sm text-[var(--muted-foreground)]"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-[var(--primary)] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[var(--primary)] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-[var(--muted-foreground)] mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[var(--primary)] font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
