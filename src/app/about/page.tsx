"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Utensils,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";

const stats = [
  { value: "1000+", label: "Restaurants" },
  { value: "50+", label: "Cities" },
  { value: "5000+", label: "Dishes" },
  { value: "10K+", label: "Users" },
];

const values = [
  {
    icon: MapPin,
    title: "Local Discovery",
    description: "Discover hidden food gems in your neighborhood",
  },
  {
    icon: Utensils,
    title: "Menu Transparency",
    description: "Browse complete menus with prices before visiting",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Real reviews from food lovers like you",
  },
  {
    icon: Target,
    title: "Dine-In Focus",
    description: "Find places worth visiting in person",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              About
              <br />
              <span className="text-[var(--primary-light)]">Zerozaya</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto">
              Helping you discover amazing local food spots. No delivery, no fees — just pure food discovery.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center gap-8 md:gap-16 mt-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
                Zerozaya was born from a simple idea: help people discover the incredible 
                food options right in their neighborhood. We believe that the best dining 
                experiences come from exploring local gems — not just ordering online.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-6 rounded-2xl border border-[var(--border)] bg-white hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                      <Icon className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)]">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=600&fit=crop&q=80"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discover?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Start exploring the best local restaurants in your area today.
            </p>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--primary-dark)] transition-colors"
            >
              Explore Restaurants
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
