"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Star } from "lucide-react";

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
  { 
    name: "North Indian",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop",
  },
  { 
    name: "South Indian", 
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200&h=200&fit=crop",
  },
  { 
    name: "Chinese", 
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&h=200&fit=crop",
  },
  { 
    name: "Italian", 
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop",
  },
  { 
    name: "Fast Food", 
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=200&fit=crop",
  },
  { 
    name: "Healthy", 
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop",
  },
  { 
    name: "Desserts", 
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&h=200&fit=crop",
  },
  { 
    name: "Biryani", 
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop",
  },
  { 
    name: "Burger", 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop",
  },
  { 
    name: "Pizza", 
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop",
  },
  { 
    name: "Sushi", 
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&fit=crop",
  },
  { 
    name: "Rolls", 
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop",
  },
  { 
    name: "Chaats", 
    image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?w=200&h=200&fit=crop",
  },
  { 
    name: "Thali", 
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=200&fit=crop",
  },
  { 
    name: "Tea", 
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=200&h=200&fit=crop",
  },
  { 
    name: "Momos", 
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=200&h=200&fit=crop",
  },
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
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  // Display only first 8 categories if not expanded (4x2 grid)
  // Assuming 4 columns on mobile
  const displayedCategories = showAllCategories ? categories : categories.slice(0, 8);

  return (
    <div className="pt-[var(--header-height)] pb-24 md:pt-0 md:pb-0"> {/* Increased bottom padding for nav, top padding for header */}
      
      {/* Search Bar - Sticky & Integrated */}
      <div className="md:hidden sticky top-0 z-30 bg-white/95 backdrop-blur-sm px-4 py-3 border-b border-[var(--border)] shadow-sm">
        <div className="flex items-center gap-3 px-4 py-2.5 bg-[var(--muted)]/50 border border-[var(--border)] rounded-2xl">
          <Search className="w-4 h-4 text-[var(--muted-foreground)]" />
          <input
            type="text"
            placeholder="Search for food, restaurants..."
            className="flex-1 bg-transparent outline-none text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
          />
        </div>
      </div>

      {/* Hero / Categories Grid */}
      {/* Added pt-4 to clear the sticky search bar if needed, but sticky search is relative to flow. 
          The issue might be fixed header overlapping. 
          The Navbar is fixed h-[var(--header-height)]. 
          The sticky search bar is `top-[var(--header-height)]`.
          So the content starts flow under Navbar. We need padding top on the whole page or first section equal to header + search bar? 
          Actually Navbar is fixed, so main content flows under it. 
          We added `pt-safe-header` in other pages. Let's add top margin to this first section or wrapper. 
      */}
      <section className="pt-32 md:pt-40 md:pb-16">
        <div className="container pt-4 md:pt-0">
          <div className="flex items-center justify-between mb-5 px-1 md:px-0">
            <h2 className="text-lg md:text-3xl font-bold text-[var(--foreground)] tracking-tight">
              What's on your mind?
            </h2>
             {/* Mobile See All Toggle - Hidden on desktop if we use the bottom button */}
             {!showAllCategories && categories.length > 8 && (
              <button
                onClick={() => setShowAllCategories(true)}
                className="text-xs font-semibold text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1.5 rounded-full md:hidden"
              >
                See All
              </button>
            )}
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-y-6 gap-x-2">
            {displayedCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  href={`/explore?category=${encodeURIComponent(category.name)}`}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm border border-[var(--border)] group-hover:border-[var(--primary)] group-hover:shadow-md transition-all bg-[var(--muted)]">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover p-0.5 rounded-full"
                    />
                  </div>
                  <span className="text-[10px] md:text-sm font-semibold text-[var(--foreground)]/80 text-center text-ellipsis line-clamp-1 leading-tight">
                    {category.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Desktop Expansion Button */}
          {!showAllCategories && categories.length > 8 && (
            <div className="mt-8 text-center hidden md:block">
              <button 
                onClick={() => setShowAllCategories(true)}
                className="btn btn-outline hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all"
              >
                  Show All Categories
              </button>
            </div>
          )}
        </div>
      </section>


      {/* Featured Restaurants */}
      <section className="py-2 md:py-8">
        <div className="container">
           <div className="flex items-center justify-between mb-5 px-1 md:px-0">
            <h2 className="text-lg md:text-3xl font-bold text-[var(--foreground)] tracking-tight">
              Featured Restaurants
            </h2>
            <Link
              href="/explore"
              className="flex items-center gap-1 text-xs md:text-sm text-[var(--primary)] font-semibold hover:underline bg-[var(--primary)]/10 px-3 py-1.5 rounded-full"
            >
              See All <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-1 md:px-0">
            {featuredRestaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={`/restaurant/${restaurant.id}`} className="card block group hover:shadow-xl transition-all border border-[var(--border)]/50 rounded-2xl overflow-hidden pb-2">
                  <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {restaurant.badge && (
                      <span className="absolute top-3 left-3 badge bg-white/95 backdrop-blur-md text-[var(--foreground)] shadow-sm font-bold text-[10px] uppercase tracking-wider px-2 py-1">
                        {restaurant.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                       <Star className="w-3 h-3 text-[var(--primary)] fill-current" />
                       {restaurant.rating}
                    </div>
                  </div>
                  <div className="p-3 md:p-4">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-lg text-[var(--foreground)] truncate flex-1">
                        {restaurant.name}
                        </h3>
                    </div>
                    
                    <p className="text-xs md:text-sm text-[var(--muted-foreground)] mb-3 truncate font-medium">
                      {restaurant.cuisine}
                    </p>
                    <div className="flex items-center justify-between border-t border-[var(--border)]/50 pt-3">
                       <span className="text-[10px] md:text-xs text-[var(--muted-foreground)] bg-[var(--muted)] px-2 py-1 rounded-md">
                          {restaurant.reviews} reviews
                       </span>
                        <span className="text-[10px] md:text-xs font-bold text-[var(--primary)]">
                            View Menu
                        </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-6 md:py-8 bg-[var(--muted)]/30 border-t border-[var(--border)]/50">
        <div className="container">
           <div className="flex items-center justify-between mb-5 px-1 md:px-0">
            <h2 className="text-lg md:text-3xl font-bold text-[var(--foreground)] tracking-tight">
              Popular Dishes
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-1 md:px-0">
            {popularDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                  <div className="bg-white p-2.5 md:p-3 rounded-xl border border-[var(--border)] shadow-sm h-full flex flex-col group cursor-pointer hover:border-[var(--primary)]/30 transition-all">
                      <div className="aspect-square rounded-lg overflow-hidden mb-2.5 relative">
                        <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <button className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors">
                            <span className="text-lg leading-none mb-0.5">+</span>
                        </button>
                      </div>
                      <h3 className="font-bold text-sm text-[var(--foreground)] line-clamp-1 mb-0.5">
                        {dish.name}
                      </h3>
                      <p className="text-[10px] md:text-xs text-[var(--muted-foreground)] line-clamp-1 mb-2">
                        {dish.restaurant}
                      </p>
                      <div className="mt-auto">
                          <span className="font-black text-sm text-[var(--foreground)]">{dish.price}</span>
                      </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
