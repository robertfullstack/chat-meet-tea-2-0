import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 15px 20px;
  cursor: pointer;
  width: 96%;
  margin-left:7px;
  border-radius: 15px;
  transition:0.5s;

  &:hover {
    background-color:#F8A961;
  }

  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 60%;
    margin-right: 10px;
    min-width: fit-content;
  }

  &.active {
    background-color: #f9d7b8;
  }
`;

export const Name = styled.span`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis; 
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;
