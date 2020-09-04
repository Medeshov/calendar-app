import styled from "styled-components";

export const Container = styled.div`
  width: 1000;
`;

export const StyledCalendarWrapper = styled.div`
  width: 90vw;
  height: 550px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  left: 5vw;
  box-sizing: border-box;

  
  @media (max-width: 480px) {
    margin: 0;

  }
  @media (max-width: 415px) {
    margin: 0;
    justify-content: center;

  }
  }
`;

export const TitleStyle = styled.h2`
  font-family: Ubuntu, sans-serif;
  font-size: 48px;
  color: #227947;
  margin-left: 5vw;
  margin-bottom: -15px;
  /* background: green; */
`;

export const TestTextStyle = styled.p`
  font-family: Ubuntu, sans-serif;
  font-size: 18px;
  margin-left: 5vw;
  margin-bottom: 35px;

  /* background: red; */
`;

export const StyledButton = styled.button`
  font-family: Ubuntu;
  border-radius: 1px;
  font-size: 14px;
  width: 20px;
  height: 20px;
  border-style: none;
  font-weight: normal;
  background: white;
  color: #227947;
  margin: 0.5px 1px;
  padding: 0.1em 0.1em;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: #77b97e;
    color: white;
    border-style: none;
  }
  &.selected {
    background: green;
    color: white;
  }
`;
export const WeekDayStyle = styled.button`
  font-family: Ubuntu;
  border-radius: 1px;
  width: 20px;
  height: 20px;
  border-style: none;
  font-weight: normal;
  font-size: 14px;
  background: white;
  color: #227947;
  margin: 3px 1px;
  padding: 0.1em 0.1em;
`;
export const WeekendDayStyle = styled.button`
  font-family: Ubuntu;
  border-radius: 1px;
  width: 20px;
  height: 20px;
  border-style: none;
  font-weight: normal;
  font-size: 14px;
  background: #e2907a;
  color: white;
  margin: 1px;
  padding: 0.1em 0.1em;
`;
export const StyledMonthBlock = styled.div`
  border-radius: 9px;
  width: 184px;
  height: 198px;
  padding: 7px 0 15px 0;
  border: 1px solid #92c29d;
  background: #ebf5ec;

  @media (max-width: 830px) {
    margin-bottom: 20px;
  }

  @media (min-width: 831px) {
    margin-bottom: 20px;
  }
`;
export const StyledMonthName = styled.h2`
  font-size: 18px;
  color: #1d6739;
  font-weight: normal;
  font-family: Ubuntu;
  margin: 0;
  text-align: center;
`;

export const StyledLine = styled.div`
  width: 125px;
  height: 1px;
  background: black;
  margin: 6px 10px 7px 28px;
`;
export const StyledSubmitItems = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    margin: 0;
    display: block;
  }
`;
export const SubmitButton = styled.button`
  background: #68a977;
  border: none;
  width: 200px;
  height: 35px;
  color: white;
  font-family: Ubuntu, sans-serif;
  &:disabled {
    background: "#68a977";
    opacity: 0.6;
  }
`;
