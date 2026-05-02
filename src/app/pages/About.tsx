import { motion } from "motion/react";
import { Target, Eye, Zap, Users, Award, Globe } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Pioneering AI technology for sustainable agriculture",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Farmer-First",
      description: "Building solutions that truly empower agricultural communities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to eco-friendly and regenerative farming practices",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering world-class technology and customer support",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      expertise: "Agricultural AI & Machine Learning",
      image: "👩‍💼"
    },
    {
      name: "Mohamed Hassan",
      role: "CTO",
      expertise: "Biotechnology & Data Science",
      image: "👨‍💻"
    },
    {
      name: "Dr. Ahmed Ali",
      role: "Chief Agricultural Officer",
      expertise: "Agronomy & Crop Science",
      image: "👨‍🔬"
    },
    {
      name: "Lisa Johnson",
      role: "Head of Product",
      expertise: "UX Design & Product Strategy",
      image: "👩‍💼"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50+", label: "Countries" },
    { number: "35%", label: "Avg. Yield Increase" },
    { number: "$50M+", label: "Farmer Revenue Impact" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">About AgroGenome AI</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              We're on a mission to revolutionize agriculture through artificial intelligence and biotechnology
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                AgroGenome AI is dedicated to empowering farmers and agricultural businesses with cutting-edge
                artificial intelligence and biotechnology solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We believe that the future of food security lies in smart, sustainable farming practices powered
                by data-driven insights. Our platform combines machine learning, genomic analysis, and real-time
                monitoring to help farmers make better decisions, increase yields, and reduce environmental impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                To be the global leader in agricultural AI, transforming how food is grown and managed worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We envision a world where every farmer, regardless of size or location, has access to the same
                powerful technology used by the world's largest agribusinesses.
              </p>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400">
              World-class experts in AI, agriculture, and biotechnology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-center border border-green-100 dark:border-green-900"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-sm text-green-600 dark:text-green-400 mb-2">{member.role}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
