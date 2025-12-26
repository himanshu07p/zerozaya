"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Phone,
  Globe,
  Heart,
  Share2,
} from "lucide-react";

// Mock restaurant data

interface Restaurant {
  id: number;
  name: string;
  tagline: string;
  cuisine: string;
  rating: number;
  reviews: number;
  priceRange: string;
  location: string;
  hours: string;
  phone: string;
  website: string;
  images: string[];
  about: string;
}

const restaurants: Record<string, Restaurant> = {
  "1": {
    id: 1,
    name: "The Green Kitchen",
    tagline: "Farm-to-table healthy dining",
    cuisine: "Healthy • Salads • Bowls • Organic",
    rating: 4.8,
    reviews: 234,
    priceRange: "₹₹",
    location: "123 Green Street, Koramangala, Bangalore",
    hours: "9:00 AM - 10:00 PM",
    phone: "+91 98765 43210",
    website: "www.greenkitchen.com",
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    ],
    about:
      "The Green Kitchen is committed to serving fresh, organic, and locally-sourced ingredients. Our menu features a variety of healthy options including nutrient-rich salads, wholesome grain bowls, and refreshing smoothies.",
  },
};

const restaurant = restaurants["1"];

const menuCategories = [
  {
    name: "Salads",
    items: [
      {
        id: 1,
        name: "Caesar Salad",
        description: "Romaine lettuce, parmesan, croutons, caesar dressing",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=200&h=200&fit=crop",
        isVeg: true,
        isBestseller: true,
      },
      {
        id: 2,
        name: "Greek Salad",
        description: "Cucumber, tomatoes, olives, feta cheese, olive oil",
        price: "₹279",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=200&fit=crop",
        isVeg: true,
        isBestseller: false,
      },
    ],
  },
  {
    name: "Bowls",
    items: [
      {
        id: 3,
        name: "Buddha Bowl",
        description: "Quinoa, chickpeas, avocado, roasted vegetables",
        price: "₹349",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop",
        isVeg: true,
        isBestseller: true,
      },
      {
        id: 4,
        name: "Poke Bowl",
        description: "Sushi rice, fresh salmon, edamame, seaweed",
        price: "₹449",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop",
        isVeg: false,
        isBestseller: false,
      },
    ],
  },
  {
    name: "Smoothies",
    items: [
      {
        id: 5,
        name: "Green Detox",
        description: "Spinach, kale, apple, ginger, lemon",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=200&h=200&fit=crop",
        isVeg: true,
        isBestseller: true,
      },
      {
        id: 6,
        name: "Berry Blast",
        description: "Mixed berries, banana, yogurt, honey",
        price: "₹179",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=200&h=200&fit=crop",
        isVeg: true,
        isBestseller: false,
      },
    ],
  },
];

interface RestaurantPageClientProps {
  id: string;
}

export default function RestaurantPageClient({ id }: RestaurantPageClientProps) {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);
  const [liked, setLiked] = useState(false);
  
  const currentRestaurant = restaurants[id] || restaurant;

  return (
    <div className="pt-safe-header min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[var(--muted)]">
        <div className="grid grid-cols-4 gap-1 h-64 md:h-80 overflow-hidden">
          <div className="col-span-4 md:col-span-2 row-span-2">
            <img
              src={currentRestaurant.images[0]}
              alt={currentRestaurant.name}
              className="w-full h-full object-cover"
            />
          </div>
          {currentRestaurant.images.slice(1).map((img, idx) => (
            <div key={idx} className="hidden md:block">
              <img
                src={img}
                alt={`${currentRestaurant.name} ${idx + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Back Button */}
        <Link
          href="/explore"
          className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setLiked(!liked)}
            className={`p-2 rounded-full shadow-md transition-colors ${
              liked
                ? "bg-red-500 text-white"
                : "bg-white/90 backdrop-blur-sm hover:bg-white"
            }`}
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="container py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2">
                {currentRestaurant.name}
              </h1>
              <p className="text-[var(--muted-foreground)] mb-3">
                {currentRestaurant.tagline}
              </p>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                {currentRestaurant.cuisine} • {currentRestaurant.priceRange}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1 px-3 py-1 bg-[var(--accent)] rounded-full text-[var(--primary)]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">{currentRestaurant.rating}</span>
                  <span className="text-sm">({currentRestaurant.reviews} reviews)</span>
                </div>
              </div>

              {/* About */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                  About
                </h2>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {currentRestaurant.about}
                </p>
              </div>

              {/* Menu */}
              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                  Menu
                </h2>

                {/* Category Tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {menuCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        activeCategory === category.name
                          ? "bg-[var(--primary)] text-white"
                          : "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--accent)]"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Menu Items */}
                <div className="space-y-4">
                  {menuCategories
                    .find((cat) => cat.name === activeCategory)
                    ?.items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4 p-4 bg-[var(--muted)] rounded-xl hover:bg-[var(--accent)] transition-colors"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span
                                  className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                    item.isVeg
                                      ? "border-green-600"
                                      : "border-red-600"
                                  }`}
                                >
                                  <span
                                    className={`w-2 h-2 rounded-full ${
                                      item.isVeg ? "bg-green-600" : "bg-red-600"
                                    }`}
                                  />
                                </span>
                                <h3 className="font-semibold text-[var(--foreground)]">
                                  {item.name}
                                </h3>
                                {item.isBestseller && (
                                  <span className="badge text-xs">Bestseller</span>
                                )}
                              </div>
                              <p className="text-sm text-[var(--muted-foreground)] mb-2">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <p className="font-semibold text-[var(--foreground)]">
                            {item.price}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="sticky top-20 space-y-4">
              {/* Contact Card */}
              <div className="p-6 bg-[var(--muted)] rounded-2xl">
                <h3 className="font-semibold text-[var(--foreground)] mb-4">
                  Contact & Location
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {currentRestaurant.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[var(--primary)]" />
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {currentRestaurant.hours}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[var(--primary)]" />
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {currentRestaurant.phone}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[var(--primary)]" />
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {currentRestaurant.website}
                    </p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="p-4 bg-[var(--accent)] rounded-xl border border-[var(--primary)]/20">
                <p className="text-sm text-[var(--accent-foreground)]">
                  <strong>Note:</strong> Zerozaya is a food discovery platform.
                  Please contact the restaurant directly for reservations or
                  takeaway orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
