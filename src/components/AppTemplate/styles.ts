import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 30px;
  }
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.black2};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 28px;
  }
`;
