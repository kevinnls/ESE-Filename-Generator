import timetable from "../../public/timetable.json";

const courseTitleFetcher = (classGroup) => {
  const customISTDateFormat = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Kolkata",
  };
  const todayIST = new Date().toLocaleString("en-CA", customISTDateFormat);

  try {
    return timetable[todayIST][classGroup];
  } catch (err) {
    console.warn("Don't think you have a regular exam today");
    console.error(err);
    return false;
  }
};

export { courseTitleFetcher };
