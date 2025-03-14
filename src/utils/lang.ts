// src/utils/lang.js
import en from "../components/locales/en.json"
import kh from "../components/locales/kh.json"

const defaultLang = 'en';

const langData: any = {
  en,
  kh
};

let currentLang = localStorage.getItem('language') || defaultLang;

export const getLangData = () => langData[currentLang];

export const translate = (key: any) => {
  const lang = getLangData();
  return lang[key] || key; // Return the translation or the key as a fallback
};

export const setLang = (lang: any) => {
  currentLang = lang;
  localStorage.setItem('language', lang);
};
