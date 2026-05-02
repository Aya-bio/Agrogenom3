import { motion } from "motion/react";
import { Wifi, Activity, Dna, Printer, Building2 } from "lucide-react";

const technologies = [
  {
    icon: Wifi,
    title: "Biosensor Live Monitoring",
    description: "Real-time wound condition tracking with IoT sensors embedded in patches",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Activity,
    title: "Real-Time AI Tracking",
    description: "Continuous machine learning analysis of healing progress and adaptive treatment",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: Dna,
    title: "Gene Delivery Integration",
    description: "Targeted genetic therapy combined with bioactive patches for enhanced healing",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: Printer,
    title: "3D Bioprinting Fabrication",
    description: "Custom-designed patches printed on-demand based on patient-specific wound geometry",
    gradient: "from-orange-500 to-red-400"
  },
  {
    icon: Building2,
    title: "Hospital Clinical Dashboard",
    description: "Enterprise platform for managing multiple patients with AI-powered insights",
    gradient: "from-indigo-500 to-blue-400"
  }
];

export function FutureTechnology() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Coming Soon
          </motion.div>
          <h2 className="mb-4 text-gray-900">Future Technology Pipeline</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Next-generation innovations in personalized wound care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                  <tech.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="mb-3 text-gray-900">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>

                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
