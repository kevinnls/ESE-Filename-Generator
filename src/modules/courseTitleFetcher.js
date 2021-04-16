import timetable from "../../public/timetable.json";

const courseTitleFetcher = (regNum) => {
  let ret = false;
  const customISTDateFormat = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Kolkata",
  };
  const todayIST = new Date().toLocaleString("en-CA", customISTDateFormat);

  return timetable[todayIST] || false;
};

export { courseTitleFetcher };
