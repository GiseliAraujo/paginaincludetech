import { T as TSS_SERVER_FUNCTION, c as createServerFn, b as getCookie, d as getRequestHeader, s as setCookie } from "./server-B-ItVJuf.mjs";
import { i as isLocale, l as localeFromCountry, a as localeFromAcceptLanguage, D as DEFAULT_LOCALE, L as LOCALES } from "./i18n-CqjV_u4K.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const COOKIE_NAME = "include_locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const detectLocale_createServerFn_handler = createServerRpc({
  id: "15eaf2cbed0ae8e473c6e6904239b35d2f5bceca0bdec7014e5325c1aee32c96",
  name: "detectLocale",
  filename: "src/lib/i18n.functions.ts"
}, (opts) => detectLocale.__executeServer(opts));
const detectLocale = createServerFn({
  method: "GET"
}).handler(detectLocale_createServerFn_handler, async () => {
  const cookieValue = getCookie(COOKIE_NAME);
  if (isLocale(cookieValue)) return cookieValue;
  const country = getRequestHeader("x-vercel-ip-country") ?? getRequestHeader("cf-ipcountry") ?? getRequestHeader("x-country-code") ?? null;
  const fromCountry = localeFromCountry(country);
  if (fromCountry) return fromCountry;
  const acceptLang = getRequestHeader("accept-language");
  const fromHeader = localeFromAcceptLanguage(acceptLang);
  if (fromHeader) return fromHeader;
  return DEFAULT_LOCALE;
});
const setLocale_createServerFn_handler = createServerRpc({
  id: "1f3e3739e364c8f265c79b6ac4319e6f22dfc667833dab112fec7e2e22416f5c",
  name: "setLocale",
  filename: "src/lib/i18n.functions.ts"
}, (opts) => setLocale.__executeServer(opts));
const setLocale = createServerFn({
  method: "POST"
}).inputValidator((data) => {
  if (!isLocale(data.locale)) {
    throw new Error(`Invalid locale. Expected one of: ${LOCALES.join(", ")}`);
  }
  return {
    locale: data.locale
  };
}).handler(setLocale_createServerFn_handler, async ({
  data
}) => {
  setCookie(COOKIE_NAME, data.locale, {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax"
  });
  return {
    locale: data.locale
  };
});
export {
  detectLocale_createServerFn_handler,
  setLocale_createServerFn_handler
};
