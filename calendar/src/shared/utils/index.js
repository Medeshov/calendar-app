const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const getDates = (startDate, stopDate) => {
  let dateArray = new Array();
  let currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(currentDate);
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
};

export const getMonthDaysForYear = (year) => {
  var yearMonths = [];
  for (let i = 0; i < 12; i++) {
    yearMonths.push({
      monthName: MONTHS[i],
      monthDays: getDates(new Date(year, i, 1), new Date(year, i + 1, 0)),
    });
  }

  return yearMonths;
};
