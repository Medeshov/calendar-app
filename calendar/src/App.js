import React from "react";
import logo from "./logo.svg";
import "./App.css";
import moment from "moment";

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const getDates = (startDate, stopDate) => {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(currentDate);
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
};

var MONTHS = [
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

var DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getMonthsFirstAndLastDaysForYear = (year) => {
  var yearMonths = [];
  for (var i = 0; i < 12; i++) {
    yearMonths.push({
      monthName: MONTHS[i],
      monthDays: getDates(new Date(year, i, 1), new Date(year, i + 1, 0)),
    });
  }

  return yearMonths;
};

const DayButton = ({ dayDate }) => {
  return <button>{`${DAYS[dayDate.getDay()]} - ${dayDate.getDate()}`}</button>;
};

const MonthBlock = ({ monthName, children }) => {
  return (
    <div>
      <h1>{monthName}</h1>
      <div>{children}</div>
    </div>
  );
};

class App extends React.Component {
  render() {
    var yearMonths = getMonthsFirstAndLastDaysForYear(2020);

    var result = yearMonths.map((month) => {
      var days = month.monthDays.map((day) => <DayButton dayDate={day} />);
      return <MonthBlock monthName={month.monthName}>{days}</MonthBlock>;
    });
    return <div className="App">{result}</div>;
  }
}

export default App;
