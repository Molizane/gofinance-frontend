import DateInput from "../DateInput";
import SearchBar from "../SearchBar";
import { Container, LeftSide } from "./styles";

const TableNavBar = () => (
  <Container>
    <LeftSide>
      <DateInput title="Data inicial"></DateInput>
      <DateInput title="Data final"></DateInput>
      <SearchBar />
    </LeftSide>
    <button>Adicionar</button>
  </Container>
);

export default TableNavBar;
