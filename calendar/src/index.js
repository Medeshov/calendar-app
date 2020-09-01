import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const getDates = (startDate, stopDate) => {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(currentDate);
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
};

const getMonthsFirstAndLastDaysForYear = (year) => {
  var year = {};
  var months = [
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
  months = [];
  for (var i = 0; i < 12; i++) {
    // year[i.toString()] = {
    //   firstDay: new Date(year, i, 1),
    //   lastDay: new Date(year, i + 1, 0),
    // };
    months.push({
      firstDay: new Date(year, i, 1),
      lastDay: new Date(year, i + 1, 0),
    });
  }

  return months;
};
