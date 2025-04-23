import { useEffect } from "react";
import ReactGA from "react-ga4";

const AnalyticsTracker = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  return null;
};

export default AnalyticsTracker;
