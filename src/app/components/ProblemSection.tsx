import { motion } from "motion/react";
import { AlertCircle, TrendingUp, Clock, Users } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "300M+ People",
    description: "Suffer from chronic wounds globally",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: AlertCircle,
    title: "High Risk",
    description: "Diabetic ulcers increase amputation risk by 15x",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Clock,
    title: "Delayed Healing",
    description: "Generic treatments slow recovery by 40%",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: TrendingUp,
    title: "Need Speed",
    description: "Doctors require faster decision support",
    color: "from-cyan-500 to-blue-500"
  }
];

export function ProblemSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-gray-900">The Problem We're Solving</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wound care is stuck in the past. It's time for intelligent, personalized treatment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <problem.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2 text-gray-900">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
