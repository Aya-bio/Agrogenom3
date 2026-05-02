import { motion } from "motion/react";
import { ShoppingCart, Star, Package, Heart } from "lucide-react";
import { useState } from "react";

export function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "seeds", "biofertilizers", "feed", "veterinary"];

  const products = [
    {
      id: 1,
      name: "Drought-Resistant Wheat Seeds (10kg)",
      category: "seeds",
      price: 89.99,
      rating: 4.8,
      reviews: 124,
      image: "🌾",
      inStock: true
    },
    {
      id: 2,
      name: "Organic Biofertilizer Premium (25kg)",
      category: "biofertilizers",
      price: 45.50,
      rating: 4.9,
      reviews: 89,
      image: "🌱",
      inStock: true
    },
    {
      id: 3,
      name: "High-Protein Livestock Feed (50kg)",
      category: "feed",
      price: 65.00,
      rating: 4.7,
      reviews: 156,
      image: "🌾",
      inStock: true
    },
    {
      id: 4,
      name: "Complete Veterinary Care Kit",
      category: "veterinary",
      price: 125.00,
      rating: 5.0,
      reviews: 43,
      image: "⚕️",
      inStock: true
    },
    {
      id: 5,
      name: "Hybrid Corn Seeds Premium (15kg)",
      category: "seeds",
      price: 120.00,
      rating: 4.6,
      reviews: 98,
      image: "🌽",
      inStock: true
    },
    {
      id: 6,
      name: "Nitrogen-Rich Fertilizer (30kg)",
      category: "biofertilizers",
      price: 55.99,
      rating: 4.8,
      reviews: 76,
      image: "💧",
      inStock: false
    },
    {
      id: 7,
      name: "Poultry Complete Feed Mix (40kg)",
      category: "feed",
      price: 48.00,
      rating: 4.5,
      reviews: 112,
      image: "🐔",
      inStock: true
    },
    {
      id: 8,
      name: "Cattle Vaccination Package",
      category: "veterinary",
      price: 95.00,
      rating: 4.9,
      reviews: 67,
      image: "💉",
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Agricultural Marketplace</h1>
          <p className="text-gray-600 dark:text-gray-400">Premium products for modern farming</p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-xl font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 relative"
            >
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Out of Stock
                </div>
              )}

              <div className="text-6xl mb-4 text-center">{product.image}</div>

              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm h-12">{product.name}</h3>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{product.rating}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  ${product.price}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  disabled={!product.inStock}
                  className={`flex-1 py-2 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    product.inStock
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add
                </button>
                <button className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Need Bulk Orders?</h2>
              <p className="text-green-100 mb-4">Get special pricing for large quantity purchases</p>
              <button className="px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                Contact Sales Team
              </button>
            </div>
            <div className="hidden md:block">
              <Package className="w-32 h-32 text-green-400 opacity-50" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
