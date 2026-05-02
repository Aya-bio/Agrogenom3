import { motion } from "motion/react";
import { Layers, Zap, TrendingUp, Shield, Sparkles } from "lucide-react";

const patches = [
  {
    icon: Layers,
    name: "Collagen Patch",
    useCase: "Chronic wounds and surgical sites",
    benefits: "Promotes tissue regeneration, reduces scarring",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    name: "Stem Cell Patch",
    useCase: "Deep tissue damage and burns",
    benefits: "Accelerates healing, regenerates skin cells",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    name: "Growth Factor Patch",
    useCase: "Diabetic ulcers and slow-healing wounds",
    benefits: "Stimulates cell growth, enhances recovery speed",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    name: "Antimicrobial Patch",
    useCase: "Infected wounds and high-risk areas",
    benefits: "Prevents infection, antibacterial protection",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Zap,
    name: "Combination Smart Patch",
    useCase: "Complex multi-factor wounds",
    benefits: "All-in-one solution with AI-optimized formulation",
    color: "from-indigo-500 to-blue-500"
  }
];

export function PatchLibrary() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-gray-900">Treatment Patch Library</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced bioactive patches designed for every wound type
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patches.map((patch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${patch.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <patch.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="mb-3 text-gray-900">{patch.name}</h3>

                <div className="mb-3">
                  <p className="text-sm font-medium text-cyan-600 mb-1">Use Case:</p>
                  <p className="text-gray-600">{patch.useCase}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-cyan-600 mb-1">Benefits:</p>
                  <p className="text-gray-600">{patch.benefits}</p>
                </div>

                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${patch.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
