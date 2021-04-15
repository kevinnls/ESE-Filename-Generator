import timetable from "../../public/timetable.json";

const filenameGenerator = (regNum, pgCount) => {
  let ret = false;
  const customISTDateFormat = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Kolkata",
  };
  const todayIST = new Date().toLocaleString("en-CA", customISTDateFormat);

  let PaperTitle = timetable[todayIST];

  try {
    ret = `${regNum.slice(-3)}_${PaperTitle}_${regNum}_${pgCount}pgs.pdf`;
    //ret = `${regNum}_${PaperTitle}_${pgCount}pgs.pdf`
  } catch (err) {
    console.error("you messed up\n", err);
    ret = false;
  } finally {
    return ret;
  }
};

export { filenameGenerator };
