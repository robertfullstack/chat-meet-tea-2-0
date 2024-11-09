import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background-image: linear-gradient(to right, #5882D1 8%, #465D8B 40%, #314263 73%);
  padding: 10px 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
  z-index: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }
`;

export const NameContent = styled.div`
  display: grid;
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

export const Options = styled.div`
  display: none;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
  }
`;
