export const analyticsEvents = {
  whatsappClick: "whatsapp_click",
  ebookClick: "ebook_click",
  appointmentClick: "appointment_click",
  contactClick: "contact_click",
  serviceCtaClick: "service_cta_click",
  contactFormStart: "contact_form_start",
  contactFormSubmit: "contact_form_submit",
  servicePageView: "service_page_view",
  faqOpen: "faq_open",
  leadSubmit: "lead_submit",
  adsConversion: "ads_conversion",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];
