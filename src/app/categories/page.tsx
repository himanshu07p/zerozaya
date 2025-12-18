"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Utensils,
  Coffee,
  Pizza,
  Salad,
  Cake,
  ChefHat,
  Soup,
  Sandwich,
  IceCream,
  Wine,
  Beef,
  Fish,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "North Indian",
    icon: Utensils,
    count: 245,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop&q=80",
    description: "Rich curries & biryanis",
  },
  {
    name: "South Indian",
    icon: Coffee,
    count: 189,
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=400&fit=crop&q=80",
    description: "Dosas, idlis & filter coffee",
  },
  {
    name: "Chinese",
    icon: Soup,
    count: 156,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop&q=80",
    description: "Noodles & Manchurian",
  },
  {
    name: "Italian",
    icon: Pizza,
    count: 98,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&q=80",
    description: "Pizzas & pastas",
  },
  {
    name: "Fast Food",
    icon: Sandwich,
    count: 312,
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&h=400&fit=crop&q=80",
    description: "Burgers & quick bites",
  },
  {
    name: "Healthy",
    icon: Salad,
    count: 87,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80",
    description: "Salads & organic",
  },
  {
    name: "Desserts",
    icon: Cake,
    count: 134,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop&q=80",
    description: "Cakes & pastries",
  },
  {
    name: "Ice Cream",
    icon: IceCream,
    count: 76,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop&q=80",
    description: "Scoops & sundaes",
  },
  {
    name: "Seafood",
    icon: Fish,
    count: 54,
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&h=400&fit=crop&q=80",
    description: "Fresh & coastal",
  },
  {
    name: "BBQ & Grill",
    icon: Beef,
    count: 67,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop&q=80",
    description: "Grilled & smoky",
  },
  {
    name: "Beverages",
    icon: Wine,
    count: 203,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop&q=80",
    description: "Juices & shakes",
  },
  {
    name: "Fine Dining",
    icon: ChefHat,
    count: 43,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&q=80",
    description: "Premium experience",
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=600&fit=crop&q=80"
            alt="Food variety"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Browse by Category
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Find exactly what you're craving
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={`/explore?category=${encodeURIComponent(category.name)}`}
                    className="group relative block aspect-[4/3] rounded-2xl overflow-hidden"
                  >
                    {/* Background Image */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-[var(--primary-light)]" />
                        <span className="text-xs text-white/60">{category.count} places</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-0.5">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/70 hidden sm:block">
                        {category.description}
                      </p>
                      
                      {/* Hover Arrow */}
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
