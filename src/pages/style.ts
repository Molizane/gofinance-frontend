import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
  align-items: center;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  button {
    width: 100%;
  }
`;
