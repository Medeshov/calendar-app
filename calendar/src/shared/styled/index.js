import styled from "styled-components";

export const Container = styled.div`
  width: 1000;
`;

export const StyledButton = styled.button`
  font-family: Ubuntu;
  border-radius: 1px;
  width: 20px;
  height: 20px;
  border-style: none;
  font-weight: normal;
  background: white;
  color: #227947;
  margin: 1px;
  box-sizing: content-box;
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
  text-align: center;
  align-content: center;
  justify-content: center;
  border-radius: 1px;
  width: 20px;
  height: 20px;
  border-style: none;
  font-weight: normal;
  font-size: 14px;
  background: white;
  color: #227947;
  margin: 1px;
`;
export const StyledMonthBlock = styled.div`
  border-radius: 9px;
  width: 184px;
  height: 240px;
  padding: 10px;
  border: 1px solid #92c29d;
  background: #ebf5ec;
  margin: 10px 0;
`;

export const StyledCalendarWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
