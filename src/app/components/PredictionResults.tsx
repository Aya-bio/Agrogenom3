import { motion } from "motion/react";
import { CheckCircle, AlertTriangle, Clock, Target } from "lucide-react";

interface PredictionData {
  recommendedPatch: string;
  confidence: number;
  healingRisk: string;
  estimatedRecovery: number;
  reasoning: string[];
}

interface PredictionResultsProps {
  prediction: PredictionData | null;
}

export function PredictionResults({ prediction }: PredictionResultsProps) {
  if (!prediction) return null;

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "from-green-500 to-emerald-500";
      case "moderate":
        return "from-yellow-500 to-orange-500";
      case "high":
        return "from-red-500 to-rose-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-cyan-200">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-4"
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="mb-2 text-gray-900">AI Prediction Complete</h2>
              <p className="text-gray-600">Personalized treatment recommendation generated</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-cyan-200">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-gray-900">Recommended Patch</h3>
                </div>
                <p className="text-2xl font-bold text-cyan-900">{prediction.recommendedPatch}</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-gray-900">Confidence Score</h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-green-600">{prediction.confidence}</p>
                  <span className="text-xl text-green-600">%</span>
                </div>
                <div className="mt-2 h-2 bg-green-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${prediction.confidence}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  />
                </div>
              </div>

              <div className={`bg-gradient-to-br ${getRiskColor(prediction.healingRisk).replace('from-', 'from-').replace('to-', 'to-')} bg-opacity-10 rounded-2xl p-6 border`}>
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  <h3 className="text-gray-900">Healing Risk</h3>
                </div>
                <p className="text-2xl font-bold text-orange-600">{prediction.healingRisk}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <h3 className="text-gray-900">Estimated Recovery</h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-purple-600">{prediction.estimatedRecovery}</p>
                  <span className="text-xl text-purple-600">Days</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="mb-4 text-gray-900">AI Reasoning</h3>
              <ul className="space-y-3">
                {prediction.reasoning.map((reason, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2" />
                    <span className="text-gray-700">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
