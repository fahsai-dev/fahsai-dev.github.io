import ReactGA from 'react-ga';
import { CONFIG } from '../constant';

const initGA = (userId) => {
  if (CONFIG.trackingId != null) {
    const gaOptions = {};
    ReactGA.initialize(CONFIG.trackingId, gaOptions);
    console.log("initGA");
  }
};

const logPageView = () => {
  if (CONFIG.trackingId != null) {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    console.log("logPageView");
  }
};

export { initGA, logPageView };