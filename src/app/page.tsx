"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Star,
  Utensils,
  Coffee,
  Pizza,
  Salad,
  Cake,
  ChefHat,
} from "lucide-react";

// Mock data for featured restaurants
const featuredRestaurants = [
  {
    id: 1,
    name: "The Green Kitchen",
    cuisine: "Healthy • Salads • Bowls",
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Spice Garden",
    cuisine: "Indian • Biryani • Curry",
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    badge: "Trending",
  },
  {
    id: 3,
    name: "Pizza Paradise",
    cuisine: "Italian • Pizza • Pasta",
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    badge: null,
  },
  {
    id: 4,
    name: "Sweet Delights",
    cuisine: "Desserts • Cakes • Ice Cream",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop",
    badge: "New",
  },
];

const categories = [
  { icon: Utensils, name: "All", count: 1250 },
  { icon: Coffee, name: "Cafes", count: 340 },
  { icon: Pizza, name: "Fast Food", count: 520 },
  { icon: Salad, name: "Healthy", count: 280 },
  { icon: Cake, name: "Desserts", count: 190 },
  { icon: ChefHat, name: "Fine Dining", count: 85 },
];

const popularDishes = [
  {
    id: 1,
    name: "Avocado Toast",
    restaurant: "The Green Kitchen",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Butter Chicken",
    restaurant: "Spice Garden",
    price: "₹349",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    restaurant: "Pizza Paradise",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    restaurant: "Sweet Delights",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop&q=80"
            alt="Delicious food spread"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Discover Your Next
              <br />
              <span className="text-[var(--primary-light)]">Favorite Meal</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
              Explore menus from the best local restaurants. No delivery, just discovery.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 p-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-3 px-4 flex-1">
                <Search className="w-5 h-5 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Search restaurants, cuisines, dishes..."
                  className="flex-1 py-3 bg-transparent outline-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                />
              </div>
              <button className="btn btn-primary px-8 py-3">
                <Search className="w-4 h-4" />
                Search
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-12 mt-12"
            >
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">1000+</p>
                <p className="text-sm text-white/60">Restaurants</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">5000+</p>
                <p className="text-sm text-white/60">Dishes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
                <p className="text-sm text-white/60">Cities</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-8">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={`/explore?category=${category.name.toLowerCase()}`}
                    className="flex flex-col items-center p-6 bg-white rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-lg transition-all group"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--accent)] text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors mb-3">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-[var(--foreground)]">
                      {category.name}
                    </span>
                    <span className="text-sm text-[var(--muted-foreground)]">
                      {category.count} places
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                Featured Restaurants
              </h2>
              <Link
                href="/explore"
                className="flex items-center gap-2 text-[var(--primary)] font-medium hover:underline"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRestaurants.map((restaurant, index) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={`/restaurant/${restaurant.id}`} className="card block group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {restaurant.badge && (
                        <span className="absolute top-3 left-3 badge">
                          {restaurant.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-[var(--foreground)] mb-1">
                        {restaurant.name}
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] mb-3">
                        {restaurant.cuisine}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-[var(--primary)]">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-medium">{restaurant.rating}</span>
                        </div>
                        <span className="text-sm text-[var(--muted-foreground)]">
                          ({restaurant.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                Popular Dishes
              </h2>
              <Link
                href="/explore"
                className="flex items-center gap-2 text-[var(--primary)] font-medium hover:underline"
              >
                Explore More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDishes.map((dish, index) => (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-[var(--border)] hover:shadow-lg transition-shadow"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--foreground)]">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {dish.restaurant}
                    </p>
                    <p className="text-[var(--primary)] font-medium mt-1">
                      {dish.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Own a Restaurant?
            </h2>
            <p className="text-white/80 mb-8">
              Join Zerozaya and showcase your menu to thousands of food lovers.
              List your restaurant for free and reach more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/seller/register" className="btn bg-white text-[var(--primary)] hover:bg-gray-100">
                Register Your Restaurant
              </Link>
              <Link href="/about" className="btn border-2 border-white text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
