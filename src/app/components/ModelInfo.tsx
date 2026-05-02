import { motion } from "motion/react";
import { Brain, TrendingUp, Award } from "lucide-react";

const models = [
  { name: "Decision Tree", accuracy: 78, color: "bg-blue-500" },
  { name: "Random Forest", accuracy: 82, color: "bg-cyan-500" },
  { name: "XGBoost", accuracy: 87, color: "bg-green-500", isBest: true }
];

export function ModelInfo() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Brain className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
            <h2 className="mb-4 text-gray-900">About The AI Model</h2>
            <p className="text-lg text-gray-600">
              Rigorous machine learning evaluation for optimal prediction accuracy
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-cyan-200">
            <h3 className="mb-6 text-gray-900">Machine Learning Models Tested</h3>

            <div className="space-y-6 mb-8">
              {models.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-900">{model.name}</span>
                      {model.isBest && (
                        <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-full">
                          <Award className="w-3 h-3" />
                          Best
                        </span>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{model.accuracy}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${model.accuracy}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`h-full ${model.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Why XGBoost?</h4>
                  <p className="text-gray-700">
                    XGBoost was selected due to its exceptional performance on structured clinical data.
                    The model excels at capturing complex non-linear relationships between patient features
                    and treatment outcomes, while maintaining interpretability for clinical decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600">Training Samples</div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-600">9</div>
                <div className="text-sm text-gray-600">Clinical Features</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600">87%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
