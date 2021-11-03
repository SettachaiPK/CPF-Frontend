import AOS from "aos";
import moment from "moment";

export async function onMounted(callback = null) {
  AOS.init({
    easing: "ease-in-out-cubic",
    duration: 750,
    once: true,
    offset: 10,
  });
  if (callback) {
    callback();
  }
  return true;
}

export function formatNumber(value, digits = 2) {
  let val = (value / 1).toFixed(digits);
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function formatDate(value, format = "DD/MM/YYYY") {
  let string = moment(new Date(String(value))).format(format);
  if (string) {
    string = string.split("/");
    return `${string[0]}/${string[1]}/${parseInt(string[2]) + 543}`;
  } else {
    return "";
  }
}
