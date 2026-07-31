import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("./dictionaries/en"),
  ru: () => import("./dictionaries/ru"),
  tg: () => import("./dictionaries/tg"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (await loaders[locale]()).default;
}

export type { Dictionary };
export * from "./config";
