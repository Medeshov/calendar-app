import React from "react";
import "./App.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { DAYS, getMonthDaysForYear } from "./shared/utils";
import {
  StyledButton,
  StyledMonthBlock,
  StyledMonthName,
  StyledCalendarWrapper,
  WeekDayStyle,
  WeekendDayStyle,
  TitleStyle,
  TestTextStyle,
  StyledLine,
  SubmitButton,
  StyledSubmitItems,
} from "./shared/styled";

const DayButton = ({ dayDate, onDayClick, selected }) => {
  return dayDate ? (
    <StyledButton
      onClick={() => {
        console.log(onDayClick);
        onDayClick(dayDate);
        console.log(`Это дата –  ${dayDate}`);
      }}
      className={selected ? "selected" : ""}
    >
      {` ${dayDate.getDate()}`}
    </StyledButton>
  ) : (
    <StyledButton
      style={{ visibility: "hidden", width: "20px", height: "10px" }}
    />
  );
};

const MonthBlock = ({ monthName, monthDays, chosenDate, onDayClick }) => {
  return (
    <div>
      <StyledMonthBlock>
        <StyledMonthName>{monthName}</StyledMonthName>
        <StyledLine />
        <table style={{ paddingLeft: "13px" }}>
          <thead>
            <tr>
              <th style={{ padding: "0" }}>
                <WeekDayStyle>{DAYS[1]}</WeekDayStyle>
                <WeekDayStyle>{DAYS[2]}</WeekDayStyle>
                <WeekDayStyle>{DAYS[3]}</WeekDayStyle>
                <WeekDayStyle>{DAYS[4]}</WeekDayStyle>
                <WeekDayStyle>{DAYS[5]}</WeekDayStyle>
                <WeekendDayStyle>{DAYS[6]}</WeekendDayStyle>
                <WeekendDayStyle>{DAYS[0]}</WeekendDayStyle>
              </th>
            </tr>
          </thead>
          <tbody>
            {monthDays.map((weekDays) => (
              <tr>
                {weekDays.map((day) => (
                  <DayButton
                    dayDate={day}
                    onDayClick={onDayClick}
                    selected={day?.getTime() === chosenDate?.getTime()}
                  />
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
  }

  render() {
    const yearMonths = getMonthDaysForYear(2020);
    const result = yearMonths.map((month) => {
      console.log(month.monthDays);
      return (
        <MonthBlock
          monthName={month.monthName}
          monthDays={month.monthDays}
          chosenDate={this.state.chosenDate}
          onDayClick={this.setDate}
        />
      );
    });

    return (
      <div>
        <TitleStyle>Бронирование даты</TitleStyle>
        <TestTextStyle>
          Тестовое задание на должность full-stack разработчика
        </TestTextStyle>
        <StyledCalendarWrapper className="App">
          {result}
          <PhoneSubmitForm chosenDate={this.state.chosenDate} />
        </StyledCalendarWrapper>
      </div>
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
    alert(`Успешно забронирован номер (${this.state.phone}) на выбранную дату`);
  }

  render() {
    return (
      <StyledSubmitItems>
        <PhoneInput
          onlyCountries={["ru"]}
          localization={["ru"]}
          value={this.state.phone}
          onChange={(phone) => this.setState({ phone })}
          disableDropdown={true}
          placeholder="+7(___)___-__-__"
          inputStyle={{
            backgroundColor: "#f2f2f2",
            width: "200px",
            border: "1px solid grey",
            borderRadius: "0px",
          }}
        />
        <SubmitButton
          disabled={!this.isPhoneValid()}
          onClick={this.submitPhone}
          buttonStyle
        >
          Забронировать
        </SubmitButton>
      </StyledSubmitItems>
    );
  }
}

export default App;
