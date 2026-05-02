import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Upload, Leaf, AlertCircle, CheckCircle, XCircle, Droplets, Bug, Activity, Clock, TrendingUp } from "lucide-react";
import { useScanHistory, ScanResult } from "../context/ScanHistoryContext";
import { useLanguage } from "../context/LanguageContext";

export function PlantDoctor() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addScan, scans } = useScanHistory();
  const { language } = useLanguage();

  const diseases = [
    {
      name: "Early Blight",
      nameAr: "اللفحة المبكرة",
      confidence: 87,
      status: "critical" as const,
      nutrientDeficiency: ["Nitrogen"],
      infection: "Fungal",
      treatment: [
        "Apply copper-based fungicide immediately",
        "Remove and destroy infected leaves",
        "Improve air circulation around plants",
        "Water at soil level, avoid wetting foliage"
      ],
      treatmentAr: [
        "طبق مبيد فطري نحاسي فوراً",
        "أزل الأوراق المصابة واحرقها",
        "حسّن دوران الهواء حول النباتات",
        "اروِ عند مستوى التربة، تجنب ترطيب الأوراق"
      ],
      preventive: [
        "Practice crop rotation",
        "Use disease-resistant varieties",
        "Maintain proper plant spacing",
        "Apply mulch to prevent soil splash"
      ],
      preventiveAr: [
        "مارس الدورة الزراعية",
        "استخدم أصناف مقاومة للأمراض",
        "حافظ على المسافات المناسبة بين النباتات",
        "استخدم النشارة لمنع تناثر التربة"
      ],
      irrigationAdvice: "Water deeply but infrequently, early morning preferred",
      irrigationAdviceAr: "اروِ بعمق لكن بشكل غير متكرر، الصباح الباكر مفضل",
      expertConsultation: true
    },
    {
      name: "Rust Disease",
      nameAr: "مرض الصدأ",
      confidence: 76,
      status: "warning" as const,
      infection: "Fungal",
      treatment: [
        "Apply sulfur-based fungicide",
        "Remove heavily infected plants",
        "Ensure good drainage",
        "Reduce humidity around plants"
      ],
      treatmentAr: [
        "طبق مبيد فطري كبريتي",
        "أزل النباتات المصابة بشدة",
        "تأكد من التصريف الجيد",
        "قلل الرطوبة حول النباتات"
      ],
      preventive: [
        "Plant resistant varieties",
        "Provide adequate spacing",
        "Remove plant debris regularly",
        "Monitor weather conditions"
      ],
      preventiveAr: [
        "ازرع أصناف مقاومة",
        "وفر مسافات كافية",
        "أزل بقايا النباتات بانتظام",
        "راقب ظروف الطقس"
      ],
      irrigationAdvice: "Avoid overhead watering, use drip irrigation",
      irrigationAdviceAr: "تجنب الري العلوي، استخدم الري بالتنقيط",
      expertConsultation: false
    },
    {
      name: "Nitrogen Deficiency",
      nameAr: "نقص النيتروجين",
      confidence: 82,
      status: "warning" as const,
      nutrientDeficiency: ["Nitrogen"],
      treatment: [
        "Apply nitrogen-rich fertilizer",
        "Use compost or aged manure",
        "Consider foliar feeding",
        "Monitor soil pH levels"
      ],
      treatmentAr: [
        "طبق سماد غني بالنيتروجين",
        "استخدم السماد العضوي",
        "فكر في التسميد الورقي",
        "راقب مستويات pH التربة"
      ],
      preventive: [
        "Regular soil testing",
        "Maintain organic matter in soil",
        "Use cover crops",
        "Proper fertilization schedule"
      ],
      preventiveAr: [
        "اختبار التربة بانتظام",
        "حافظ على المادة العضوية في التربة",
        "استخدم المحاصيل الغطائية",
        "جدول تسميد مناسب"
      ],
      irrigationAdvice: "Normal watering schedule, avoid over-watering",
      irrigationAdviceAr: "جدول ري عادي، تجنب الإفراط في الري",
      expertConsultation: false
    },
    {
      name: "Healthy Plant",
      nameAr: "نبات صحي",
      confidence: 94,
      status: "healthy" as const,
      treatment: [
        "Continue current care routine",
        "Maintain regular watering",
        "Monitor for any changes",
        "Keep soil nutrients balanced"
      ],
      treatmentAr: [
        "استمر في روتين العناية الحالي",
        "حافظ على الري المنتظم",
        "راقب أي تغييرات",
        "حافظ على توازن عناصر التربة"
      ],
      preventive: [
        "Regular inspection",
        "Proper fertilization",
        "Good air circulation",
        "Pest monitoring"
      ],
      preventiveAr: [
        "الفحص المنتظم",
        "التسميد المناسب",
        "دوران هواء جيد",
        "مراقبة الآفات"
      ],
      irrigationAdvice: "Maintain current watering schedule",
      irrigationAdviceAr: "حافظ على جدول الري الحالي",
      expertConsultation: false
    },
    {
      name: "Powdery Mildew",
      nameAr: "البياض الدقيقي",
      confidence: 89,
      status: "critical" as const,
      infection: "Fungal",
      pestSigns: "White powdery coating on leaves",
      treatment: [
        "Apply potassium bicarbonate spray",
        "Improve air circulation immediately",
        "Remove severely affected leaves",
        "Apply neem oil solution"
      ],
      treatmentAr: [
        "رش بيكربونات البوتاسيوم",
        "حسّن دوران الهواء فوراً",
        "أزل الأوراق المتضررة بشدة",
        "طبق محلول زيت النيم"
      ],
      preventive: [
        "Avoid overhead watering",
        "Ensure proper plant spacing",
        "Use resistant varieties",
        "Remove debris regularly"
      ],
      preventiveAr: [
        "تجنب الري العلوي",
        "تأكد من المسافات المناسبة",
        "استخدم أصناف مقاومة",
        "أزل البقايا بانتظام"
      ],
      irrigationAdvice: "Water at soil level only, early morning",
      irrigationAdviceAr: "اروِ عند مستوى التربة فقط، الصباح الباكر",
      expertConsultation: true
    },
    {
      name: "Aphid Infestation",
      nameAr: "إصابة المن",
      confidence: 91,
      status: "warning" as const,
      pestSigns: "Small insects clustering on stems and leaves",
      treatment: [
        "Spray with insecticidal soap",
        "Introduce beneficial insects",
        "Use strong water spray to dislodge",
        "Apply neem oil if severe"
      ],
      treatmentAr: [
        "رش بالصابون الحشري",
        "أدخل حشرات نافعة",
        "استخدم رذاذ ماء قوي للإزالة",
        "طبق زيت النيم في الحالات الشديدة"
      ],
      preventive: [
        "Encourage natural predators",
        "Regular plant inspection",
        "Avoid over-fertilization",
        "Use reflective mulches"
      ],
      preventiveAr: [
        "شجع المفترسات الطبيعية",
        "الفحص المنتظم للنباتات",
        "تجنب الإفراط في التسميد",
        "استخدم نشارة عاكسة"
      ],
      irrigationAdvice: "Normal watering, avoid water stress",
      irrigationAdviceAr: "ري عادي، تجنب إجهاد الماء",
      expertConsultation: false
    }
  ];

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleAnalyze = async () => {
    if (!uploadedImage) return;

    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];

    const scanResult: ScanResult = {
      id: Date.now().toString(),
      image: uploadedImage,
      timestamp: new Date(),
      diseaseName: language === "ar" ? randomDisease.nameAr : randomDisease.name,
      confidence: randomDisease.confidence,
      status: randomDisease.status,
      nutrientDeficiency: randomDisease.nutrientDeficiency,
      pestSigns: randomDisease.pestSigns,
      waterStress: randomDisease.waterStress,
      infection: randomDisease.infection,
      treatment: language === "ar" ? randomDisease.treatmentAr : randomDisease.treatment,
      preventive: language === "ar" ? randomDisease.preventiveAr : randomDisease.preventive,
      irrigationAdvice: language === "ar" ? randomDisease.irrigationAdviceAr : randomDisease.irrigationAdvice,
      expertConsultation: randomDisease.expertConsultation
    };

    setResult(scanResult);
    addScan(scanResult);
    setIsAnalyzing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "from-green-500 to-emerald-500";
      case "warning":
        return "from-yellow-500 to-orange-500";
      case "critical":
        return "from-red-500 to-rose-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return CheckCircle;
      case "warning":
        return AlertCircle;
      case "critical":
        return XCircle;
      default:
        return Activity;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {language === "ar" ? "طبيب النباتات AI" : "Plant Doctor AI"}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {language === "ar"
              ? "قم بتحميل صورة للنبات للكشف عن الأمراض ونقص العناصر الغذائية والآفات"
              : "Upload a plant image to detect diseases, nutrient deficiencies, and pests"
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {language === "ar" ? "تحميل الصورة" : "Upload Image"}
              </h2>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-2xl transition-all ${
                  isDragging
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
                  className="hidden"
                />

                {uploadedImage ? (
                  <div className="relative">
                    <img src={uploadedImage} alt="Uploaded plant" className="w-full h-96 object-cover rounded-xl" />
                    <button
                      onClick={() => {
                        setUploadedImage(null);
                        setResult(null);
                      }}
                      className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 px-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                      <Upload className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">
                      {language === "ar" ? "اسحب وأفلت صورة هنا" : "Drag & drop an image here"}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {language === "ar" ? "أو" : "or"}
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow flex items-center gap-2"
                      >
                        <Upload className="w-5 h-5" />
                        {language === "ar" ? "تصفح الملفات" : "Browse Files"}
                      </button>
                      <button
                        onClick={() => {
                          const input = fileInputRef.current;
                          if (input) {
                            input.capture = "environment";
                            input.click();
                          }
                        }}
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow flex items-center gap-2"
                      >
                        <Camera className="w-5 h-5" />
                        {language === "ar" ? "التقط صورة" : "Take Photo"}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {uploadedImage && !result && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full mt-6 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      {language === "ar" ? "جاري التحليل..." : "Analyzing..."}
                    </>
                  ) : (
                    <>
                      <Activity className="w-5 h-5" />
                      {language === "ar" ? "تحليل النبات بالذكاء الاصطناعي" : "Analyze with AI"}
                    </>
                  )}
                </motion.button>
              )}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                {language === "ar" ? "نصائح للحصول على أفضل النتائج" : "Tips for Best Results"}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  {language === "ar" ? "التقط صورة واضحة وقريبة من المنطقة المتضررة" : "Take a clear, close-up photo of the affected area"}
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  {language === "ar" ? "تأكد من إضاءة جيدة، يفضل ضوء النهار الطبيعي" : "Ensure good lighting, preferably natural daylight"}
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  {language === "ar" ? "اشمل الورقة أو الجزء كاملاً في الإطار" : "Include the entire leaf or part in the frame"}
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  {language === "ar" ? "تجنب الظلال والانعكاسات" : "Avoid shadows and reflections"}
                </li>
              </ul>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {language === "ar" ? "نتائج التحليل" : "Analysis Results"}
                    </h2>
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${getStatusColor(result.status)} text-white font-semibold`}>
                      {result.confidence}% {language === "ar" ? "ثقة" : "Confidence"}
                    </div>
                  </div>

                  <div className={`bg-gradient-to-br ${getStatusColor(result.status)} bg-opacity-10 rounded-xl p-6 mb-6 border-2 border-${result.status === "healthy" ? "green" : result.status === "warning" ? "yellow" : "red"}-500`}>
                    <div className="flex items-start gap-4">
                      {(() => {
                        const StatusIcon = getStatusIcon(result.status);
                        return <StatusIcon className={`w-8 h-8 ${result.status === "healthy" ? "text-green-600" : result.status === "warning" ? "text-yellow-600" : "text-red-600"}`} />;
                      })()}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {result.diseaseName}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {language === "ar" ? "الحالة:" : "Status:"}{" "}
                          <span className="font-semibold capitalize">{result.status}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {result.nutrientDeficiency && (
                      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-orange-600" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {language === "ar" ? "نقص عناصر" : "Nutrient Deficiency"}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {result.nutrientDeficiency.join(", ")}
                        </p>
                      </div>
                    )}

                    {result.pestSigns && (
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
                        <div className="flex items-center gap-2 mb-2">
                          <Bug className="w-5 h-5 text-red-600" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {language === "ar" ? "علامات آفات" : "Pest Signs"}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {result.pestSigns}
                        </p>
                      </div>
                    )}

                    {result.infection && (
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center gap-2 mb-2">
                          <Activity className="w-5 h-5 text-purple-600" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {language === "ar" ? "نوع العدوى" : "Infection Type"}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {result.infection}
                        </p>
                      </div>
                    )}

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Droplets className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {language === "ar" ? "نصيحة الري" : "Irrigation"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        {result.irrigationAdvice}
                      </p>
                    </div>
                  </div>

                  {result.expertConsultation && (
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 mb-6 border-l-4 border-red-500">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-red-600 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-red-900 dark:text-red-100 mb-1">
                            {language === "ar" ? "يُنصح باستشارة خبير" : "Expert Consultation Recommended"}
                          </h4>
                          <p className="text-sm text-red-700 dark:text-red-300">
                            {language === "ar"
                              ? "هذه الحالة قد تتطلب تدخل متخصص. يُرجى الاتصال بمهندس زراعي."
                              : "This condition may require professional intervention. Please consult an agricultural expert."
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {language === "ar" ? "العلاج الموصى به" : "Recommended Treatment"}
                  </h3>
                  <ul className="space-y-3">
                    {result.treatment.map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {language === "ar" ? "خطوات وقائية" : "Preventive Steps"}
                  </h3>
                  <ul className="space-y-3">
                    {result.preventive.map((step, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {scans.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {language === "ar" ? "سجل المسح الضوئي" : "Scan History"}
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {scans.slice(0, 8).map((scan) => (
                <motion.div
                  key={scan.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 cursor-pointer"
                  onClick={() => {
                    setUploadedImage(scan.image);
                    setResult(scan);
                  }}
                >
                  <img src={scan.image} alt="Scan" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      scan.status === "healthy" ? "bg-green-100 text-green-700" :
                      scan.status === "warning" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {scan.status}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {scan.diseaseName}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="w-3 h-3" />
                      {new Date(scan.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
