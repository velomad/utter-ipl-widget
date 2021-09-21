/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */

 import ReactGA from "react-ga";

 export const Event = (category, action, label) => {
   ReactGA.event({
     category: category,
     action: action,
     label: label,
   });
 };