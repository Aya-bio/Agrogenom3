import { motion } from "motion/react";
import { Activity, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onTryDemo: () => void;
  onLearnMore: () => void;
}

export function HeroSection({ onTryDemo, onLearnMore }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-cyan-200 mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-sm text-cyan-900">AI-Powered Healthcare Innovation</span>
            </motion.div>

            <h1 className="mb-6 text-cyan-900">
              <span className="block text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                SmartHeal
              </span>
            </h1>

            <h2 className="mb-6 text-gray-700">
              AI-Powered Personalized Wound Healing Platform
            </h2>

            <p className="mb-8 text-lg text-gray-600 max-w-xl">
              An intelligent system that analyzes patient wound conditions and recommends optimized bioactive healing patches instantly.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onTryDemo}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Try Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLearnMore}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-cyan-900 rounded-xl font-semibold border-2 border-cyan-200 hover:border-cyan-300 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <motion.div
                className="absolute w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
                <Activity className="w-32 h-32 text-cyan-600 mx-auto mb-4" />
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    className="w-3 h-3 bg-cyan-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-cyan-900 font-semibold">AI Processing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
