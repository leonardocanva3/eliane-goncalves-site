import type { AnalyticsEventName } from "@/lib/analytics/events";

type EventPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(
  eventName: AnalyticsEventName,
  payload: EventPayload = {},
) {
  void eventName;
  void payload;
  // Future GA4/GTM hook:
  // 1. Verify Consent Mode state before dispatching.
  // 2. Send eventName and payload to dataLayer or gtag.
  // 3. Keep Google Ads conversion mapping in lib/ads.
}

export function buildEventAttributes(
  eventName: AnalyticsEventName,
  payload: EventPayload = {},
) {
  return {
    "data-analytics-event": eventName,
    "data-analytics-payload": JSON.stringify(payload),
  };
}
