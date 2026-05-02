import { useState } from "react";
import { motion } from "motion/react";
import { User, Activity, Droplet, Thermometer, TrendingUp } from "lucide-react";

interface PatientData {
  age: number;
  gender: string;
  diabetic: boolean;
  infection: boolean;
  woundType: string;
  temperature: number;
  moisture: string;
  pH: number;
  healingSpeed: string;
}

interface PatientInputPanelProps {
  onPredict: (data: PatientData) => void;
  isLoading: boolean;
}

export function PatientInputPanel({ onPredict, isLoading }: PatientInputPanelProps) {
  const [formData, setFormData] = useState<PatientData>({
    age: 45,
    gender: "male",
    diabetic: false,
    infection: false,
    woundType: "chronic",
    temperature: 37.0,
    moisture: "normal",
    pH: 7.0,
    healingSpeed: "normal"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">Patient Assessment</h2>
            <p className="text-lg text-gray-600">
              Enter patient data for AI-powered treatment recommendation
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-600" />
                  Age
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.diabetic}
                    onChange={(e) => setFormData({ ...formData, diabetic: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="text-gray-700 font-medium">Diabetic</span>
                </label>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.infection}
                    onChange={(e) => setFormData({ ...formData, infection: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="text-gray-700 font-medium">Infection Present</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-600" />
                  Wound Type
                </label>
                <select
                  value={formData.woundType}
                  onChange={(e) => setFormData({ ...formData, woundType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="acute">Acute</option>
                  <option value="chronic">Chronic</option>
                  <option value="burn">Burn</option>
                  <option value="ulcer">Ulcer</option>
                  <option value="surgical">Surgical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-cyan-600" />
                  Temperature (°C)
                </label>
                <input
                  type="range"
                  min="35"
                  max="40"
                  step="0.1"
                  value={formData.temperature}
                  onChange={(e) => setFormData({ ...formData, temperature: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
                <div className="text-center mt-1 text-cyan-600 font-semibold">{formData.temperature}°C</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-cyan-600" />
                  Moisture Level
                </label>
                <select
                  value={formData.moisture}
                  onChange={(e) => setFormData({ ...formData, moisture: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  pH Level
                </label>
                <input
                  type="range"
                  min="5"
                  max="9"
                  step="0.1"
                  value={formData.pH}
                  onChange={(e) => setFormData({ ...formData, pH: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
                <div className="text-center mt-1 text-cyan-600 font-semibold">{formData.pH}</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-600" />
                  Healing Speed
                </label>
                <select
                  value={formData.healingSpeed}
                  onChange={(e) => setFormData({ ...formData, healingSpeed: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="slow">Slow</option>
                  <option value="normal">Normal</option>
                  <option value="fast">Fast</option>
                </select>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Analyzing...
                </span>
              ) : (
                "Predict Treatment"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
