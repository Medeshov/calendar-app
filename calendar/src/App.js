import React from "react";
import "./App.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { DAYS, getMonthDaysForYear } from "./shared/utils";
import {
  StyledButton,
  StyledMonthBlock,
  StyledCalendarWrapper,
  WeekDayStyle,
} from "./shared/styled";

const DayButton = ({ dayDate, onDayClick }) => {
  return dayDate ? (
    <StyledButton
      onClick={() => {
        console.log(onDayClick);
        onDayClick(dayDate);
        console.log(`Это дата –  ${dayDate}`);
      }}
    >
      {` ${dayDate.getDate()}`}
    </StyledButton>
  ) : (
    <StyledButton style={{ visibility: "hidden" }} />
  );
};

const MonthBlock = ({ monthName, monthDays, onDayClick }) => {
  return (
    <div>
      <StyledMonthBlock>
        <h1
          style={{
            margin: 0,
            fontSize: "18px",
            color: "#1d6739",
            fontWeight: "normal",
            fontFamily: "Ubuntu",
            margin: 0,
          }}
        >
          {monthName}
        </h1>
        <div
          style={{
            width: "125px",
            height: "1px",
            background: "black",
            margin: "15px 30px 10px 30px",
          }}
        ></div>

        <table
          style={{
            marginLeft: "5px",
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr>
              <th>
                <WeekDayStyle>{DAYS[1]}</WeekDayStyle>
                <WeekDayStyle>{DAYS[2]}</WeekDayStyle>
                <WeekDayStyle>{DAYS[3]}</WeekDayStyle>
                <WeekDayStyle>{DAYS[4]}</WeekDayStyle>
                <WeekDayStyle>{DAYS[5]}</WeekDayStyle>
                <WeekDayStyle
                  style={{
                    background: "#e2907a",
                    color: "white",
                  }}
                >
                  {DAYS[6]}
                </WeekDayStyle>
                <WeekDayStyle style={{ background: "#e2907a", color: "white" }}>
                  {DAYS[0]}
                </WeekDayStyle>
              </th>
            </tr>
          </thead>
          <tbody>
            {monthDays.map((weekDays) => (
              <tr>
                {weekDays.map((day) => (
                  <DayButton dayDate={day} onDayClick={onDayClick} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </StyledMonthBlock>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: null,
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(date) {
    this.setState({ chosenDate: date });
    console.log("FUUCK");
  }

  render() {
    const yearMonths = getMonthDaysForYear(2020);
    const result = yearMonths.map((month) => {
      console.log(month.monthDays);
      return (
        <MonthBlock
          monthName={month.monthName}
          monthDays={month.monthDays}
          onDayClick={this.setDate}
        />
      );
    });

    return (
      <StyledCalendarWrapper className="App">
        {result}
        <PhoneSubmitForm chosenDate={this.state.chosenDate} />
      </StyledCalendarWrapper>
    );
  }
}

class PhoneSubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: null,
    };
    this.isPhoneValid = this.isPhoneValid.bind(this);
    this.submitPhone = this.submitPhone.bind(this);
  }

  isPhoneValid() {
    return (
      this.props.chosenDate &&
      typeof this.state.phone === "string" &&
      this.state.phone.length === 11
    );
  }

  submitPhone() {
    alert(`Phone submitted - ${this.state.phone}`);
  }

  render() {
    return (
      <div>
        <PhoneInput
          country={"ru"}
          value={this.state.phone}
          onChange={(phone) => this.setState({ phone })}
        />
        <button disabled={!this.isPhoneValid()} onClick={this.submitPhone}>
          Забронировать
        </button>
      </div>
    );
  }
}

export default App;
