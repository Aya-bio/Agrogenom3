import { useState } from "react";
import { motion } from "motion/react";
import { Sprout, MapPin, Thermometer, Droplets, TrendingUp, DollarSign, Shield } from "lucide-react";

export function SeedIntelligence() {
  const [formData, setFormData] = useState({
    soilType: "loamy",
    location: "",
    temperature: 25,
    waterLevel: "medium",
    season: "spring"
  });

  const [prediction, setPrediction] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const recommendations = [
      {
        name: "Drought-Resistant Wheat Variety DR-2024",
        yield: "4.5 tons/hectare",
        diseaseResistance: 92,
        profitEstimate: "$3,200/hectare",
        growthPeriod: "120 days",
        suitability: 95
      },
      {
        name: "High-Yield Corn Hybrid HY-350",
        yield: "6.2 tons/hectare",
        diseaseResistance: 88,
        profitEstimate: "$4,100/hectare",
        growthPeriod: "110 days",
        suitability: 92
      },
      {
        name: "Climate-Smart Barley CS-100",
        yield: "3.8 tons/hectare",
        diseaseResistance: 90,
        profitEstimate: "$2,800/hectare",
        growthPeriod: "100 days",
        suitability: 87
      }
    ];

    setPrediction({
      recommendations,
      soilAnalysis: {
        ph: 6.8,
        nitrogen: "High",
        phosphorus: "Medium",
        potassium: "High"
      }
    });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Seed Intelligence</h1>
          <p className="text-gray-600 dark:text-gray-400">AI-powered seed recommendations for optimal crop yield</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Farm Input Data</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Sprout className="w-4 h-4 text-green-600" />
                  Soil Type
                </label>
                <select
                  value={formData.soilType}
                  onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                  <option value="clay">Clay</option>
                  <option value="silt">Silt</option>
                  <option value="peat">Peat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Cairo, Egypt"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-green-600" />
                  Average Temperature: {formData.temperature}°C
                </label>
                <input
                  type="range"
                  min="10"
                  max="45"
                  value={formData.temperature}
                  onChange={(e) => setFormData({ ...formData, temperature: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-green-600" />
                  Water Availability
                </label>
                <select
                  value={formData.waterLevel}
                  onChange={(e) => setFormData({ ...formData, waterLevel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="low">Low (Limited Irrigation)</option>
                  <option value="medium">Medium (Moderate Irrigation)</option>
                  <option value="high">High (Abundant Water)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Planting Season
                </label>
                <select
                  value={formData.season}
                  onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="autumn">Autumn</option>
                  <option value="winter">Winter</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePredict}
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
              >
                {isLoading ? "Analyzing..." : "Get AI Recommendations"}
              </motion.button>
            </div>
          </motion.div>

          {prediction && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recommended Seeds</h2>

                <div className="space-y-4">
                  {prediction.recommendations.map((seed: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border border-green-200 dark:border-green-800"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{seed.name}</h3>
                        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {seed.suitability}% Match
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Expected Yield</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{seed.yield}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Disease Resistance</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{seed.diseaseResistance}%</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Profit Estimate</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{seed.profitEstimate}</p>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Growth Period</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{seed.growthPeriod}</p>
                        </div>
                      </div>

                      <button className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        Order Seeds
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Soil Analysis</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">pH Level</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{prediction.soilAnalysis.ph}</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Nitrogen</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">{prediction.soilAnalysis.nitrogen}</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Phosphorus</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{prediction.soilAnalysis.phosphorus}</p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Potassium</p>
                    <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{prediction.soilAnalysis.potassium}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
