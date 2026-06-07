export const adsConversionEvents = {
  lead: "ads_lead",
  whatsapp: "ads_whatsapp_click",
  schedule: "ads_schedule_click",
  ebook: "ads_ebook_click",
  contact: "ads_contact_click",
} as const;

// Future Google Ads setup:
// Add conversion IDs/labels only after the final account and consent strategy
// are approved. Keep this file as the single source for Ads event names.
