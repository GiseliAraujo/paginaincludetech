import { createServerFn } from "@tanstack/react-start";
import {
  getRequestHeader,
  getCookie,
  setCookie,
} from "@tanstack/react-start/server";
import {
  DEFAULT_LOCALE,
  isLocale,
  localeFromAcceptLanguage,
  localeFromCountry,
  type Locale,
  LOCALES,
} from "./i18n";

const COOKIE_NAME = "include_locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

/**
 * Detect the visitor's locale on the server.
 * Priority: cookie (manual choice) → IP country (Vercel/Cloudflare) →
 * Accept-Language → default (pt).
 */
export const detectLocale = createServerFn({ method: "GET" }).handler(
  async (): Promise<Locale> => {
    // 1) Explicit user choice in cookie
    const cookieValue = getCookie(COOKIE_NAME);
    if (isLocale(cookieValue)) return cookieValue;

    // 2) IP-based country detection via edge headers
    const country =
      getRequestHeader("x-vercel-ip-country") ??
      getRequestHeader("cf-ipcountry") ??
      getRequestHeader("x-country-code") ??
      null;
    const fromCountry = localeFromCountry(country);
    if (fromCountry) return fromCountry;

    // 3) Accept-Language fallback
    const acceptLang = getRequestHeader("accept-language");
    const fromHeader = localeFromAcceptLanguage(acceptLang);
    if (fromHeader) return fromHeader;

    return DEFAULT_LOCALE;
  },
);

/**
 * Persist a manual locale choice in a cookie so future visits respect it.
 */
export const setLocale = createServerFn({ method: "POST" })
  .inputValidator((data: { locale: string }) => {
    if (!isLocale(data.locale)) {
      throw new Error(`Invalid locale. Expected one of: ${LOCALES.join(", ")}`);
    }
    return { locale: data.locale };
  })
  .handler(async ({ data }) => {
    setCookie(COOKIE_NAME, data.locale, {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
    });
    return { locale: data.locale };
  });