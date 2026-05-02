import { useState } from "react";
import { motion } from "motion/react";
import { Upload, Camera, AlertCircle, CheckCircle, Activity } from "lucide-react";

export function LivestockHealth() {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 2500));

    setAnalysis({
      healthScore: 87,
      status: "Healthy",
      possibleIllness: "None Detected",
      stressLevel: "Low",
      movementPattern: "Normal",
      recommendations: [
        "Continue current feeding regimen",
        "Schedule routine vaccination in 2 weeks",
        "Monitor weight gain progress",
        "Ensure adequate water supply"
      ],
      veterinaryAction: "No immediate action required",
      confidence: 92
    });

    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Livestock Health AI</h1>
          <p className="text-gray-600 dark:text-gray-400">Upload animal images or videos for AI-powered health analysis</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upload Media</h2>

            <div className="mb-6">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                {uploadedFile ? (
                  <img src={uploadedFile} alt="Uploaded" className="max-h-60 rounded-xl" />
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-3" />
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Click to upload image or video</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">PNG, JPG, MP4 up to 10MB</p>
                  </div>
                )}
              </label>
            </div>

            {uploadedFile && (
              <div className="space-y-4">
                <div className="flex gap-3">
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="flex-1 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow disabled:opacity-50"
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze with AI"}
                  </button>
                  <button
                    onClick={() => {
                      setUploadedFile(null);
                      setAnalysis(null);
                    }}
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Clear
                  </button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">AI Analysis Tips</h3>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Ensure good lighting and clear visibility</li>
                        <li>• Capture full body view when possible</li>
                        <li>• Multiple angles improve accuracy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {analysis && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI Analysis Results</h2>
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full font-semibold">
                    {analysis.confidence}% Confidence
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Health Score</span>
                    </div>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">{analysis.healthScore}%</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{analysis.status}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Possible Illness</h3>
                    <p className="text-gray-600 dark:text-gray-400">{analysis.possibleIllness}</p>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Stress Level</h3>
                    <p className="text-gray-600 dark:text-gray-400">{analysis.stressLevel}</p>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Movement Pattern</h3>
                    <p className="text-gray-600 dark:text-gray-400">{analysis.movementPattern}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recommendations</h3>
                <ul className="space-y-3">
                  {analysis.recommendations.map((rec: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <span className="text-gray-700 dark:text-gray-300">{rec}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Veterinary Action</h3>
                    <p className="text-gray-700 dark:text-gray-300">{analysis.veterinaryAction}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                1
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Upload Media</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Take clear photos or videos of your livestock</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                2
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Our AI detects health indicators and patterns</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                3
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Get Results</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Receive actionable insights and recommendations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
