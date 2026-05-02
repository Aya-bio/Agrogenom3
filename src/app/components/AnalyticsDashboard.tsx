import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const featureImportance = [
  { name: "Age", value: 85 },
  { name: "pH", value: 78 },
  { name: "Temperature", value: 72 },
  { name: "Diabetes", value: 90 },
  { name: "Wound Type", value: 65 },
  { name: "Moisture", value: 58 }
];

const healingTimeline = [
  { day: 0, healing: 0 },
  { day: 3, healing: 15 },
  { day: 7, healing: 35 },
  { day: 14, healing: 60 },
  { day: 21, healing: 80 },
  { day: 28, healing: 95 }
];

const patientComparison = [
  { name: "Adult", value: 65 },
  { name: "Pediatric", value: 35 }
];

const diabeticComparison = [
  { type: "Non-Diabetic", healingRate: 85 },
  { type: "Diabetic", healingRate: 62 }
];

const COLORS = ["#0ea5e9", "#06b6d4", "#14b8a6", "#10b981"];

export function AnalyticsDashboard() {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-gray-900">Visual Analytics Dashboard</h2>
          <p className="text-lg text-gray-600">
            Data-driven insights for optimal wound treatment decisions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-cyan-200"
          >
            <h3 className="mb-6 text-gray-900">Feature Importance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={featureImportance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #0ea5e9",
                    borderRadius: "12px",
                    padding: "12px"
                  }}
                />
                <Bar dataKey="value" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-cyan-200"
          >
            <h3 className="mb-6 text-gray-900">Patient Recovery Timeline</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={healingTimeline}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="day" stroke="#64748b" label={{ value: "Days", position: "insideBottom", offset: -5 }} />
                <YAxis stroke="#64748b" label={{ value: "Healing %", angle: -90, position: "insideLeft" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #10b981",
                    borderRadius: "12px",
                    padding: "12px"
                  }}
                />
                <Line type="monotone" dataKey="healing" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981", r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-cyan-200"
          >
            <h3 className="mb-6 text-gray-900">Adult vs Pediatric Patients</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={patientComparison}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {patientComparison.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-cyan-200"
          >
            <h3 className="mb-6 text-gray-900">Diabetic vs Non-Diabetic Healing</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={diabeticComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="type" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #f59e0b",
                    borderRadius: "12px",
                    padding: "12px"
                  }}
                />
                <Bar dataKey="healingRate" fill="url(#diabeticGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="diabeticGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
