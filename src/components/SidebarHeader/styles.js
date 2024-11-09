import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background-color: #5882D1;
  padding: 10px 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 1px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
  }
`;
