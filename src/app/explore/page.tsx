"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  Star,
  SlidersHorizontal,
  Grid,
  List,
  X,
} from "lucide-react";

// Mock data
const restaurants = [
  {
    id: 1,
    name: "The Green Kitchen",
    cuisine: "Healthy • Salads • Bowls",
    rating: 4.8,
    reviews: 234,
    priceRange: "₹₹",
    location: "Koramangala, Bangalore",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    tags: ["Vegetarian", "Organic"],
  },
  {
    id: 2,
    name: "Spice Garden",
    cuisine: "Indian • Biryani • Curry",
    rating: 4.6,
    reviews: 189,
    priceRange: "₹₹",
    location: "Indiranagar, Bangalore",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    tags: ["North Indian", "Spicy"],
  },
  {
    id: 3,
    name: "Pizza Paradise",
    cuisine: "Italian • Pizza • Pasta",
    rating: 4.7,
    reviews: 312,
    priceRange: "₹₹₹",
    location: "HSR Layout, Bangalore",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    tags: ["Italian", "Wood-fired"],
  },
  {
    id: 4,
    name: "Sweet Delights",
    cuisine: "Desserts • Cakes • Ice Cream",
    rating: 4.9,
    reviews: 156,
    priceRange: "₹₹",
    location: "Whitefield, Bangalore",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop",
    tags: ["Desserts", "Bakery"],
  },
  {
    id: 5,
    name: "Dragon Wok",
    cuisine: "Chinese • Asian • Noodles",
    rating: 4.5,
    reviews: 278,
    priceRange: "₹₹",
    location: "MG Road, Bangalore",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    tags: ["Chinese", "Pan-Asian"],
  },
  {
    id: 6,
    name: "Cafe Mocha",
    cuisine: "Cafe • Coffee • Snacks",
    rating: 4.4,
    reviews: 198,
    priceRange: "₹₹",
    location: "JP Nagar, Bangalore",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    tags: ["Cafe", "Breakfast"],
  },
];

const cuisineFilters = [
  "All",
  "Indian",
  "Chinese",
  "Italian",
  "Healthy",
  "Cafe",
  "Desserts",
  "Fast Food",
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine =
      selectedCuisine === "All" ||
      restaurant.cuisine.toLowerCase().includes(selectedCuisine.toLowerCase()) ||
      restaurant.tags.some((tag) =>
        tag.toLowerCase().includes(selectedCuisine.toLowerCase())
      );
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="pt-safe-header min-h-screen bg-[var(--muted)]">
      {/* Header Section */}
      {/* Header Section */}
      <div className="bg-white border-b border-[var(--border)]">
        <div className="container py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-20">
            Explore Restaurants
          </h1>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="flex items-center gap-3 px-4 py-3 border-[1.5px] border-[var(--border)] rounded-lg bg-[var(--background)] focus-within:border-[var(--primary)] focus-within:ring-[3px] focus-within:ring-[#2E8B571A] transition-all duration-200">
                  <Search className="w-5 h-5 text-[var(--muted-foreground)] shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search restaurants, cuisines..."
                    className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] h-full"
                  />
              </div>
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden btn btn-outline"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* View Toggle */}
            <div className="hidden md:flex items-center gap-2 p-1 bg-[var(--muted)] rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid"
                    ? "bg-white text-[var(--primary)] shadow-sm"
                    : "text-[var(--muted-foreground)]"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list"
                    ? "bg-white text-[var(--primary)] shadow-sm"
                    : "text-[var(--muted-foreground)]"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cuisine Filters */}
          <div className={`mt-6 ${showFilters ? "block" : "hidden md:block"}`}>
            <div className="flex flex-wrap gap-3">
              {cuisineFilters.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCuisine === cuisine
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--accent)]"
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[var(--muted-foreground)]">
            Showing <span className="font-medium text-[var(--foreground)]">{filteredRestaurants.length}</span> restaurants
          </p>
        </div>

        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-[var(--muted)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[var(--muted-foreground)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              No restaurants found
            </h3>
            <p className="text-[var(--muted-foreground)]">
              Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredRestaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={`/restaurant/${restaurant.id}`}
                  className={`card block group ${
                    viewMode === "list" ? "flex flex-row" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "list"
                        ? "w-48 h-36 flex-shrink-0"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      {restaurant.tags.slice(0, 1).map((tag) => (
                        <span key={tag} className="badge text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-[var(--foreground)]">
                        {restaurant.name}
                      </h3>
                      <span className="text-sm text-[var(--muted-foreground)]">
                        {restaurant.priceRange}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] mb-2">
                      {restaurant.cuisine}
                    </p>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1 text-[var(--primary)]">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-medium">{restaurant.rating}</span>
                      </div>
                      <span className="text-[var(--muted-foreground)]">
                        ({restaurant.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-sm text-[var(--muted-foreground)]">
                      <MapPin className="w-4 h-4" />
                      {restaurant.location}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
