export const META_PIXEL_ID = "2119003922011848";

function fbq(...args) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq(...args);
}

export const pageView = () => fbq("track", "PageView");
export const lead = (params) => fbq("track", "Lead", params);
export const contact = (params) => fbq("track", "Contact", params);
export const search = (params) => fbq("track", "Search", params);
export const viewContent = (params) => fbq("track", "ViewContent", params);
