import { getSiteMetaData } from "utils/helpers";


// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  const siteMetadata = getSiteMetaData();
  window.gtag('config', siteMetadata.GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}