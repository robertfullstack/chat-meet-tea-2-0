import styled from "styled-components";

export const Container = styled.div`
  flex: 1 1 0%;
  background-color: #fafafa;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  `;
