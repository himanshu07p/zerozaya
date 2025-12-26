"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Users,
  Star,
  Menu,
  X,
} from "lucide-react";

// Mock data
const stats = [
  { label: "Total Views", value: "2,345", icon: Eye, change: "+12%" },
  { label: "Menu Items", value: "24", icon: UtensilsCrossed, change: "+3" },
  { label: "Reviews", value: "156", icon: Star, change: "+8" },
  { label: "This Month", value: "890", icon: TrendingUp, change: "+23%" },
];

const menuItems = [
  {
    id: 1,
    name: "Caesar Salad",
    category: "Salads",
    price: "₹249",
    status: "active",
    views: 234,
  },
  {
    id: 2,
    name: "Buddha Bowl",
    category: "Bowls",
    price: "₹349",
    status: "active",
    views: 189,
  },
  {
    id: 3,
    name: "Green Detox Smoothie",
    category: "Beverages",
    price: "₹199",
    status: "active",
    views: 156,
  },
  {
    id: 4,
    name: "Avocado Toast",
    category: "Breakfast",
    price: "₹299",
    status: "draft",
    views: 0,
  },
];

export default function SellerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarLinks = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "menu", label: "Menu Items", icon: UtensilsCrossed },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[var(--muted)] pt-safe-header">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-[var(--border)] transform transition-transform duration-300 z-40 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-6">
            <div className="mb-8">
              <h2 className="font-bold text-lg text-[var(--foreground)]">
                The Green Kitchen
              </h2>
              <p className="text-sm text-[var(--muted-foreground)]">
                Seller Dashboard
              </p>
            </div>

            <nav className="space-y-2">
              {sidebarLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === link.id
                      ? "bg-[var(--primary)] text-white"
                      : "text-[var(--muted-foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="absolute bottom-6 left-6 right-6">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          {activeTab === "dashboard" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-[var(--foreground)]">
                    Welcome back! 👋
                  </h1>
                  <p className="text-[var(--muted-foreground)]">
                    Here&apos;s what&apos;s happening with your restaurant.
                  </p>
                </div>
                <Link href="/seller/add-item" className="btn btn-primary">
                  <Plus className="w-4 h-4" />
                  Add Menu Item
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-6 bg-white rounded-2xl border border-[var(--border)]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-[var(--primary)]" />
                      </div>
                      <span className="text-sm font-medium text-[var(--primary)]">
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)]">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Recent Menu Items */}
              <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
                <div className="p-6 border-b border-[var(--border)]">
                  <h2 className="font-semibold text-[var(--foreground)]">
                    Recent Menu Items
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[var(--muted)]">
                      <tr>
                        <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">
                          Item
                        </th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">
                          Category
                        </th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">
                          Price
                        </th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">
                          Status
                        </th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">
                          Views
                        </th>
                        <th className="text-right px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuItems.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--muted)]/50"
                        >
                          <td className="px-6 py-4">
                            <span className="font-medium text-[var(--foreground)]">
                              {item.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-[var(--muted-foreground)]">
                            {item.category}
                          </td>
                          <td className="px-6 py-4 text-[var(--foreground)]">
                            {item.price}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                item.status === "active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-[var(--muted-foreground)]">
                            {item.views}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-2 hover:bg-[var(--muted)] rounded-lg transition-colors">
                                <Edit className="w-4 h-4 text-[var(--muted-foreground)]" />
                              </button>
                              <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4 text-red-500" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "menu" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-[var(--foreground)]">
                  Menu Items
                </h1>
                <Link href="/seller/add-item" className="btn btn-primary">
                  <Plus className="w-4 h-4" />
                  Add New Item
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-xl border border-[var(--border)]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-[var(--foreground)]">
                        {item.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          item.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] mb-2">
                      {item.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[var(--primary)]">
                        {item.price}
                      </span>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-[var(--muted)] rounded-lg">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-2xl font-bold text-[var(--foreground)] mb-8">
                Restaurant Settings
              </h1>

              <div className="bg-white rounded-2xl border border-[var(--border)] p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    defaultValue="The Green Kitchen"
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="Farm-to-table healthy dining experience"
                    className="input resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    defaultValue="123 Green Street, Koramangala"
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                    className="input"
                  />
                </div>
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
