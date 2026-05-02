import { motion } from "motion/react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Package, Users } from "lucide-react";

export function Analytics() {
  const revenueData = [
    { month: "Jan", revenue: 12000, expenses: 8000 },
    { month: "Feb", revenue: 15000, expenses: 9000 },
    { month: "Mar", revenue: 18000, expenses: 10000 },
    { month: "Apr", revenue: 22000, expenses: 11000 },
    { month: "May", revenue: 25000, expenses: 12000 },
    { month: "Jun", revenue: 28000, expenses: 13000 }
  ];

  const cropPerformance = [
    { crop: "Wheat", yield: 4.5, target: 5.0 },
    { crop: "Corn", yield: 6.2, target: 6.0 },
    { crop: "Barley", yield: 3.8, target: 4.5 },
    { crop: "Rice", yield: 5.5, target: 5.5 },
    { crop: "Soybean", yield: 3.2, target: 3.5 }
  ];

  const livestockData = [
    { name: "Cattle", value: 45, color: "#10b981" },
    { name: "Sheep", value: 30, color: "#3b82f6" },
    { name: "Goats", value: 15, color: "#f59e0b" },
    { name: "Poultry", value: 10, color: "#ef4444" }
  ];

  const roiData = [
    { quarter: "Q1", roi: 15 },
    { quarter: "Q2", roi: 22 },
    { quarter: "Q3", roi: 28 },
    { quarter: "Q4", roi: 34 }
  ];

  const kpis = [
    {
      icon: DollarSign,
      label: "Total Revenue",
      value: "$120,000",
      change: "+15.3%",
      trend: "up",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Package,
      label: "Production Volume",
      value: "23.2 tons",
      change: "+8.7%",
      trend: "up",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      label: "Profit Margin",
      value: "42%",
      change: "+5.2%",
      trend: "up",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      label: "Efficiency Score",
      value: "87%",
      change: "-2.1%",
      trend: "down",
      color: "from-orange-500 to-red-500"
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Business Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Data-driven insights for optimal farm management</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center`}>
                  <kpi.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 ${
                  kpi.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}>
                  {kpi.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{kpi.change}</span>
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{kpi.label}</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{kpi.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Revenue vs Expenses</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #10b981",
                    borderRadius: "12px",
                    padding: "12px"
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} name="Revenue" />
                <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={3} name="Expenses" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Crop Performance</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cropPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="crop" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #3b82f6",
                    borderRadius: "12px",
                    padding: "12px"
                  }}
                />
                <Legend />
                <Bar dataKey="yield" fill="#3b82f6" name="Current Yield (tons/ha)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="target" fill="#10b981" name="Target Yield (tons/ha)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Livestock Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={livestockData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {livestockData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">ROI Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="quarter" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #a855f7",
                    borderRadius: "12px",
                    padding: "12px"
                  }}
                />
                <Line type="monotone" dataKey="roi" stroke="#a855f7" strokeWidth={3} name="ROI %" dot={{ fill: "#a855f7", r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">AI Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Increase Corn Production",
                description: "Market analysis shows corn prices rising. Consider allocating 15% more land.",
                impact: "High",
                color: "green"
              },
              {
                title: "Optimize Irrigation Schedule",
                description: "AI predicts 12% water savings with adjusted timing. Reduce costs while maintaining yield.",
                impact: "Medium",
                color: "blue"
              },
              {
                title: "Diversify Livestock",
                description: "Add goat farming - low startup cost, high ROI potential in your region.",
                impact: "Medium",
                color: "purple"
              }
            ].map((rec, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${
                  rec.color === "green"
                    ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                    : rec.color === "blue"
                    ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500"
                    : "bg-purple-50 dark:bg-purple-900/20 border-purple-500"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-white">{rec.title}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    rec.color === "green"
                      ? "bg-green-600 text-white"
                      : rec.color === "blue"
                      ? "bg-blue-600 text-white"
                      : "bg-purple-600 text-white"
                  }`}>
                    {rec.impact}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{rec.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
