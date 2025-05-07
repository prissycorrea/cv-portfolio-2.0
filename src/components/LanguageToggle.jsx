import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import brazilFlag from '/images/language-flags/brazil-flag.png';
import ukFlag from '/images/language-flags/uk-flag.png';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  useEffect(() => {
    setIsEnglish(i18n.language === 'en');
  }, [i18n.language]);

  const changeLanguage = () => {
    const language = isEnglish ? 'pt' : 'en';
    i18n.changeLanguage(language)
      .then(() => setIsEnglish(!isEnglish))
      .catch(err => console.error('Erro ao mudar idioma:', err));
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <span className={`text-sm font-semibold ${isEnglish ? 'text-white-500' : 'text-gray-400'}`}>
        EN
      </span>

      <div
        className="w-20 h-10 bg-gray-300 rounded-full relative cursor-pointer transition-colors duration-300"
        onClick={changeLanguage}
      >
        <div
          className={`w-10 h-10 bg-white rounded-full absolute top-0 transition-all duration-300 shadow-md flex items-center justify-center ${
            isEnglish ? 'left-0' : 'left-10'
          }`}
        >
          <img
            src={isEnglish ? ukFlag : brazilFlag}
            alt="flag"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>

      <span className={`text-sm font-semibold ${!isEnglish ? 'text-white-500' : 'text-gray-400'}`}>
        PT
      </span>
    </div>
  );
}
