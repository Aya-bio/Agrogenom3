import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    dashboard: "Dashboard",
    seedIntelligence: "Seed Intelligence",
    livestockHealth: "Livestock Health",
    plantDoctor: "Plant Doctor AI",
    analytics: "Analytics",
    marketplace: "Marketplace",
    about: "About Us",
    contact: "Contact",

    // Landing Page
    heroTitle: "AI-Powered Future of Agriculture & Livestock",
    heroSubtitle: "Transform your farm with intelligent solutions for crops, seeds, livestock, and business management",
    getStarted: "Get Started",
    bookDemo: "Book Demo",
    learnMore: "Learn More",

    // Common
    signIn: "Sign In",
    signUp: "Sign Up",
    logout: "Logout",
    submit: "Submit",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    loading: "Loading...",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    dashboard: "لوحة التحكم",
    seedIntelligence: "ذكاء البذور",
    livestockHealth: "صحة الماشية",
    plantDoctor: "طبيب النباتات AI",
    analytics: "التحليلات",
    marketplace: "السوق",
    about: "من نحن",
    contact: "اتصل بنا",

    // Landing Page
    heroTitle: "مستقبل الزراعة والثروة الحيوانية بالذكاء الاصطناعي",
    heroSubtitle: "حوّل مزرعتك بحلول ذكية للمحاصيل والبذور والماشية وإدارة الأعمال",
    getStarted: "ابدأ الآن",
    bookDemo: "احجز عرض توضيحي",
    learnMore: "اعرف المزيد",

    // Common
    signIn: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    logout: "تسجيل الخروج",
    submit: "إرسال",
    cancel: "إلغاء",
    save: "حفظ",
    delete: "حذف",
    edit: "تعديل",
    loading: "جاري التحميل...",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "ar" : "en");
    document.documentElement.dir = language === "en" ? "rtl" : "ltr";
    document.documentElement.lang = language === "en" ? "ar" : "en";
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
