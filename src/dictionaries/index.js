const dictionaries = {
  ar: () => import("./ar.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (!locale || !dictionaries[locale]) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return dictionaries[locale]();
};
