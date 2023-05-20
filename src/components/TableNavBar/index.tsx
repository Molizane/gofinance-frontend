import DateInput from "../DateInput";
import SearchBar from "../SearchBar";
import { Container, LeftSide } from "./styles";

const TableNavBar = () => (
  <Container>
    <LeftSide>
      <DateInput title="Data inicial"></DateInput>
      <DateInput title="Data final"></DateInput>
      <SearchBar />
      <button>Adicionar</button>
    </LeftSide>
  </Container>
);

export default TableNavBar;
