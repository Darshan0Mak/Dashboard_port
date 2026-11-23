import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  // GA4 gtag support
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Google Tag Manager dataLayer support
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}
