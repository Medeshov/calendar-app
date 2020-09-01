import React from "react";

import "./App.css";
import { DAYS, getMonthDaysForYear } from "./shared/utils";
import {
  StyledButton,
  StyledMonthBlock,
  StyledCalendarWrapper,
} from "./shared/styled";

const DayButton = ({ dayDate }) => {
  return (
    <StyledButton
      onClick={() => {
        alert(`Clicked - ${dayDate}`);
      }}
    >
      {`${DAYS[dayDate.getDay()]} - ${dayDate.getDate()}`}
    </StyledButton>
  );
};

const MonthBlock = ({ monthName, children }) => {
  return (
    <StyledMonthBlock>
      <h1>{monthName}</h1>
      <div>{children}</div>
    </StyledMonthBlock>
  );
};

class App extends React.Component {
  render() {
    const yearMonths = getMonthDaysForYear(2020);
    const result = yearMonths.map((month) => {
      const days = month.monthDays.map((day) => <DayButton dayDate={day} />);
      return <MonthBlock monthName={month.monthName}>{days}</MonthBlock>;
    });

    return (
      <StyledCalendarWrapper className="App">{result}</StyledCalendarWrapper>
    );
  }
}

export default App;
