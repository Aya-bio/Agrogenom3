import { motion } from "motion/react";
import { Sprout, Brain, TrendingUp, Shield, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router";

export function LandingPage() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms analyze your farm data for optimal decisions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sprout,
      title: "Smart Seed Selection",
      description: "Get personalized seed recommendations based on soil and climate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Plant Doctor AI",
      description: "Instant disease detection and diagnosis by uploading plant photos",
      color: "from-emerald-500 to-teal-500",
      isNew: true
    },
    {
      icon: Shield,
      title: "Livestock Health AI",
      description: "Early warning system for livestock health issues with AI monitoring",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Profit Optimization",
      description: "Data-driven strategies to maximize your agricultural ROI",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Farm Owner",
      text: "AgroGenome AI increased my crop yield by 35% in just one season!",
      image: "👨‍🌾"
    },
    {
      name: "Sarah Mohamed",
      role: "Livestock Manager",
      text: "The livestock health monitoring saved me thousands in veterinary costs.",
      image: "👩‍🌾"
    },
    {
      name: "Omar Ali",
      role: "Agribusiness CEO",
      text: "This platform transformed how we manage our entire agricultural operation.",
      image: "👨‍💼"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      features: ["Basic AI Analytics", "Seed Recommendations", "Weather Forecasts", "Email Support"]
    },
    {
      name: "Professional",
      price: "$99",
      features: ["Advanced AI", "Plant Doctor AI", "Livestock Health AI", "Business Analytics", "Priority Support", "API Access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Full Platform Access", "Custom AI Models", "Dedicated Support", "White Label", "On-Premise Option"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 dark:bg-green-600 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-200 dark:border-green-800 mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sprout className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm text-green-900 dark:text-green-100">Powered by Advanced AI & Biotechnology</span>
            </motion.div>

            <h1 className="mb-6 text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              {t("heroTitle")}
            </h1>

            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("heroSubtitle")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  {t("getStarted")}
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-green-900 dark:text-green-100 rounded-xl font-semibold border-2 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-colors"
              >
                {t("bookDemo")}
              </motion.button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "10K+", label: "Active Farmers" },
                { number: "35%", label: "Avg. Yield Increase" },
                { number: "24/7", label: "AI Monitoring" },
                { number: "50+", label: "Countries" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 border border-green-100 dark:border-green-900"
                >
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Why Choose AgroGenome AI?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Revolutionary technology meets agricultural expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-800 relative"
              >
                {benefit.isNew && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    NEW
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">What Farmers Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Real results from real agricultural professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 border border-green-100 dark:border-green-900"
              >
                <div className="text-6xl mb-4">{testimonial.image}</div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choose the plan that fits your farm size
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-3xl p-8 border-2 ${
                  plan.popular ? "border-green-500 shadow-2xl scale-105" : "border-gray-200 dark:border-gray-800"
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-green-600 dark:text-green-400">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600 dark:text-gray-400">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}>
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AG</span>
                </div>
                <span className="font-bold text-xl">AgroGenome AI</span>
              </div>
              <p className="text-gray-400">
                Transforming agriculture with artificial intelligence and biotechnology.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/dashboard" className="hover:text-green-400 transition-colors">Dashboard</Link></li>
                <li><Link to="/seed-intelligence" className="hover:text-green-400 transition-colors">Seed Intelligence</Link></li>
                <li><Link to="/livestock-health" className="hover:text-green-400 transition-colors">Livestock Health</Link></li>
                <li><Link to="/marketplace" className="hover:text-green-400 transition-colors">Marketplace</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 AgroGenome AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
