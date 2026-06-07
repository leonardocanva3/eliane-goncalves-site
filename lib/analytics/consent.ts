export type ConsentCategory = "analytics" | "ads" | "functional";

export const consentDefaults: Record<ConsentCategory, boolean> = {
  analytics: false,
  ads: false,
  functional: true,
};
