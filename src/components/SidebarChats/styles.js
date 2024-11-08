import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 70px);
  overflow-y: auto;
  background-image: linear-gradient(#5882D1 8%, #DE9C5E 63%, #DE7718 92%);

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Content = styled.div``;

export const Divider = styled.div`
  margin: 0 10px;
  border-top: solid 1px #ddd;
`;
