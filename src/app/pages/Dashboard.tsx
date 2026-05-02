import { motion } from "motion/react";
import { Droplets, Leaf, Cloud, AlertTriangle, Heart, DollarSign, TrendingUp, ThermometerSun, Scan } from "lucide-react";
import { Link } from "react-router";

export function Dashboard() {
  const metrics = [
    {
      icon: Droplets,
      label: "Soil Health Score",
      value: "87%",
      change: "+5%",
      color: "from-blue-500 to-cyan-500",
      status: "good"
    },
    {
      icon: ThermometerSun,
      label: "Weather Alert",
      value: "28°C",
      change: "Clear Sky",
      color: "from-orange-500 to-yellow-500",
      status: "normal"
    },
    {
      icon: Leaf,
      label: "Crop Health",
      value: "Good",
      change: "No Issues",
      color: "from-green-500 to-emerald-500",
      status: "good"
    },
    {
      icon: Heart,
      label: "Livestock Status",
      value: "98%",
      change: "+2%",
      color: "from-red-500 to-pink-500",
      status: "good"
    },
    {
      icon: DollarSign,
      label: "Monthly Revenue",
      value: "$45,230",
      change: "+12%",
      color: "from-purple-500 to-indigo-500",
      status: "good"
    },
    {
      icon: TrendingUp,
      label: "Profit Margin",
      value: "34%",
      change: "+3%",
      color: "from-teal-500 to-cyan-500",
      status: "good"
    }
  ];

  const recommendations = [
    {
      type: "Seed",
      title: "Recommended: Drought-Resistant Wheat",
      description: "Based on current soil moisture and upcoming weather patterns",
      priority: "high"
    },
    {
      type: "Irrigation",
      title: "Increase Watering in Sector B",
      description: "Soil moisture dropping below optimal levels",
      priority: "medium"
    },
    {
      type: "Livestock",
      title: "Vaccination Due for Cattle",
      description: "Schedule veterinary visit for herd health check",
      priority: "medium"
    },
    {
      type: "Market",
      title: "Corn Prices Rising",
      description: "Consider selling stored inventory - prices up 15%",
      priority: "high"
    }
  ];

  const alerts = [
    {
      icon: AlertTriangle,
      title: "Pest Alert",
      description: "Early signs of aphids detected in wheat field - sector A3",
      time: "2 hours ago",
      severity: "warning"
    },
    {
      icon: Cloud,
      title: "Rain Forecast",
      description: "Heavy rainfall expected in 48 hours - prepare drainage",
      time: "5 hours ago",
      severity: "info"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Farm Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening on your farm today.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">{metric.change}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{metric.label}</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI Recommendations</h2>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-l-4 ${
                    rec.priority === "high"
                      ? "bg-red-50 dark:bg-red-900/20 border-red-500"
                      : "bg-blue-50 dark:bg-blue-900/20 border-blue-500"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white dark:bg-gray-800">
                      {rec.type}
                    </span>
                    <span className={`text-xs font-medium ${
                      rec.priority === "high" ? "text-red-600 dark:text-red-400" : "text-blue-600 dark:text-blue-400"
                    }`}>
                      {rec.priority.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{rec.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{rec.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Alerts</h2>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      alert.severity === "warning"
                        ? "bg-yellow-100 dark:bg-yellow-900/30"
                        : "bg-blue-100 dark:bg-blue-900/30"
                    }`}>
                      <alert.icon className={`w-5 h-5 ${
                        alert.severity === "warning" ? "text-yellow-600 dark:text-yellow-400" : "text-blue-600 dark:text-blue-400"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{alert.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{alert.description}</p>
                      <span className="text-xs text-gray-500 dark:text-gray-500">{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 shadow-lg border-2 border-green-200 dark:border-green-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Scan className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">🌿 New! Plant Doctor AI</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Upload a photo of your plant to detect diseases, pests, and nutrient deficiencies instantly with our AI-powered scanner.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Disease Detection & Diagnosis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Nutrient Deficiency Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Pest & Infection Identification
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Smart Treatment Recommendations
                  </li>
                </ul>
                <Link to="/plant-doctor">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                  >
                    <Scan className="w-5 h-5" />
                    Scan Plant Now
                  </motion.button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <motion.div
                  className="w-48 h-48 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <Leaf className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 shadow-xl text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Unlock Premium AI Features</h2>
              <p className="text-purple-100 mb-4">Get advanced analytics, custom recommendations, and priority support</p>
              <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                Upgrade Now
              </button>
            </div>
            <div className="hidden md:block">
              <TrendingUp className="w-32 h-32 text-purple-400 opacity-50" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
