"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Utensils,
  Users,
  Target,
  ArrowRight,
  TrendingUp,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section - Added pt-safe-header to clear fixed navbar */}
      <section className="pt-safe-header relative overflow-hidden bg-[var(--muted)]/30">
        <div className="container py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold tracking-wide"
                >
                    OUR STORY
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)]"
                >
                    Redefining Local
                    <br />
                    <span className="text-[var(--primary)]">Food Discovery.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed"
                >
                     We believe the best meals aren't delivered in a box—they are experienced in person. Zerozaya connects you with the authentic flavors of your city. 
                </motion.p>
            </div>
        </div>
      </section>

      {/* Visual / Divider Image */}
      <section className="container px-4">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        >
            <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&h=900&fit=crop&q=80" 
                alt="Friends eating at a restaurant" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white p-4">
                <p className="text-sm md:text-base font-medium opacity-90 uppercase tracking-widest mb-2">Philosophy</p>
                <h3 className="text-2xl md:text-4xl font-bold">Eat Real Food. Real Places.</h3>
            </div>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Why We Exist</h2>
            <p className="text-[var(--muted-foreground)] text-lg">
                In a world of cloud kitchens and delivery apps, we are bringing the focus back to the dining experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
                icon={MapPin}
                title="Hyper-Local"
                description="Your neighborhood has secrets. We help you find them. From that tiny hole-in-the-wall to the fine dining spot."
                delay={0}
            />
            <ValueCard 
                icon={TrendingUp}
                title="Data-Driven"
                description="We use real insights to show you what's trending, what's new, and what's worth your time and money."
                delay={0.1}
            />
            <ValueCard 
                icon={Heart}
                title="Community First"
                description="Built by foodies, for foodies. Real reviews, real photos, and a community that loves good food."
                delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[var(--foreground)] text-white">
        <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <StatItem value="1k+" label="Restaurants" />
                <StatItem value="50+" label="Cities" />
                <StatItem value="100k+" label="Monthly Visitors" />
                <StatItem value="4.8" label="App Store Rating" />
            </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-24 md:py-32 bg-[var(--accent)]/30">
        <div className="container text-center">
           <div className="max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)]">
                  Ready to Eat?
                </h2>
                <p className="text-[var(--muted-foreground)] text-lg">
                  Join thousands of others exploring the best food in town.
                </p>
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-full hover:bg-[var(--primary-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Find Restaurants
                  <ArrowRight className="w-5 h-5" />
                </Link>
           </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="p-8 rounded-3xl bg-[var(--muted)]/30 border border-[var(--border)] hover:border-[var(--primary)]/50 transition-colors"
        >
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-[var(--primary)]">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">{title}</h3>
            <p className="text-[var(--muted-foreground)] leading-relaxed">{description}</p>
        </motion.div>
    )
}

function StatItem({ value, label }: { value: string, label: string }) {
    return (
        <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">{value}</div>
            <div className="text-white/60 font-medium text-sm md:text-base uppercase tracking-wider">{label}</div>
        </div>
    )
}
