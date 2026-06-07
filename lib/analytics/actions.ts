import { analyticsEvents } from "@/lib/analytics/events";
import { buildEventAttributes } from "@/lib/analytics/ga";

export function whatsappClickAttributes(source: string) {
  return buildEventAttributes(analyticsEvents.whatsappClick, { source });
}

export function ebookClickAttributes(source: string) {
  return buildEventAttributes(analyticsEvents.ebookClick, { source });
}

export function appointmentClickAttributes(source: string) {
  return buildEventAttributes(analyticsEvents.appointmentClick, { source });
}

export function contactClickAttributes(source: string) {
  return buildEventAttributes(analyticsEvents.contactClick, { source });
}

export function serviceCtaClickAttributes(service: string) {
  return buildEventAttributes(analyticsEvents.serviceCtaClick, { service });
}
