"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Search from "@/components/search";

export default function HomePage() {
  const routes = [
    { name: "Products-Create", path: "/product-db-create" },
    { name: "Products", path: "/products-db" },
    { name: "Sequential", path: "/posts-sequential" },
    { name: "Form", path: "/react-form" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-8"
      >
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome to My Website
          </h1>
          <h2>
            <Search />
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Building cool stuff with code 🚀 — Explore my projects, ideas, and
            blogs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {routes.map((route, idx) => (
            <motion.div
              key={route.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={route.path}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg flex items-center gap-2"
              >
                {route.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Raj Aryan | Crafted with ❤️ using
            Next.js & Tailwind CSS
          </p>
        </div>
      </motion.div>
    </main>
  );
}
