import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.colors.black3};
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  padding-right: 16px;

  img {
    cursor: pointer;
  }
`;
