import React from "react";
import { Languages } from "lucide-react";
import { useI18n } from "../utils/i18n";

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useI18n();
  const toggle = () => setLanguage(language === "en" ? "ar" : "en");

  return (
    <button
      onClick={toggle}
      aria-label={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
      className="fixed left-4 bottom-4 z-[100] h-16 w-16 rounded-full bg-green-600 text-white shadow-xl hover:bg-green-700 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-white/60 flex items-center justify-center"
    >
      <Languages className="h-7 w-7" />
    </button>
  );
};

export default LanguageToggle;


