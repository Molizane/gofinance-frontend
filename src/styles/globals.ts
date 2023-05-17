import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif
}

body {
  background-color: ${(props) => props.theme.colors.black2};
  color: ${(props) => props.theme.colors.white};
}

button {
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  /* box-shadow: 0px 4px 4px ${(props) => props.theme.colors.secondary}; */
  padding: 16px;
  font-size:25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 1;

  &:hover{
      background-color: ${(props) => props.theme.colors.secondary};
  }
}

input{
  background-color: ${(props) => props.theme.colors.black3};
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  border: none;
  min-height: 27px;
  padding-left: 16px;
  padding-bottom: 8px;
  padding-top: 8px;
  font-size: 12px;

  &:focus{
    outline: none;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus{
  background-color: ${(props) => props.theme.colors.black3};
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: ${(props) => props.theme.colors.white};
  ::-webkit-input-placeholder{
    color: #4b4747;
    font-size:12px;
    font-weight: 500;
  }
}
`;
