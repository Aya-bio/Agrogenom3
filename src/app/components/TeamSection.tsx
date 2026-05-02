import { motion } from "motion/react";
import { Users, Brain, Microscope, Stethoscope, Cpu } from "lucide-react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Advanced machine learning and predictive analytics",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Microscope,
    title: "Biotechnology",
    description: "Bioactive materials and wound healing science",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Stethoscope,
    title: "Regenerative Medicine",
    description: "Tissue engineering and cellular therapy",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Cpu,
    title: "Clinical Decision Support",
    description: "Healthcare technology and data-driven diagnostics",
    color: "from-orange-500 to-red-500"
  }
];

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Users className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
          <h2 className="mb-4 text-gray-900">Bio Innovators Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multidisciplinary experts combining cutting-edge technology with medical science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all text-center h-full">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <area.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="mb-3 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>

                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-cyan-200 max-w-3xl mx-auto"
        >
          <h3 className="text-center mb-4 text-gray-900">Our Mission</h3>
          <p className="text-center text-gray-700 leading-relaxed">
            SmartHeal combines the power of artificial intelligence, biotechnology, regenerative medicine,
            and clinical decision support to revolutionize wound care. We're building the future where
            every patient receives the most effective, personalized treatment based on their unique clinical profile.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
