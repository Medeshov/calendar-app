const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июнь",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const DAYS = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const getDates = (startDate, stopDate) => {
  let dateArray = new Array();
  let currentDate = startDate;
  for (let i = 0; i <= currentDate.getDay() - 1; i++) {
    dateArray.push(null);
  }
  while (currentDate <= stopDate) {
    dateArray.push(currentDate);
    currentDate = currentDate.addDays(1);
  }

  for (let i = 0; i < Math.abs(currentDate.getDay() - 7); i++) {
    dateArray.push(null);
  }

  return dateArray.reduce((weeks, current, currIndex) => {
    const weekNum = Math.floor(currIndex / 7);
    if (!weeks[weekNum]) weeks[weekNum] = [];
    weeks[weekNum].push(current);
    return weeks;
  }, []);
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

// is it possible to get whole calendar
// const year = [
//   [
//     [null, null, 1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10, 11, 12],
//     [6, 7, 8, 9, 10, 11, 12],
//     // ...
//     [8, 29, 30, null, null, null, null],
//   ],
//   [
//     [null, null, 1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10, 11, 12],
//     [6, 7, 8, 9, 10, 11, 12],
//     // ...
//     [8, 29, 30, 31, null, null, null],
//     [8, 29, 30, null, null, null, null],
//   ],
//   // ...
//   [], // 12 items
// ];
