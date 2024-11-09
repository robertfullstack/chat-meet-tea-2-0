import styled from "styled-components";

export const Container = styled.div`
  height: 62px;
  bottom: 0px;
  width: 100%;
  padding: 30px 30px;
  background-color: #fafafa;
  display: flex;

  svg {
    padding: 5px;
    width: 35px;
    height: 37px;
    border-radius: 13px;
    border: 1px solid black;
    color: rgb(255 255 255);
    background-color: #171f2e;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 12px;
  outline: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  box-shadow: inset 0 0 1px 1px #0003;
  background-color: #e49348;
`;

