import TableLine from "../TableLine";
import { Body, Container, Header } from "./styles";

interface TableDetailsProps {
  children: React.ReactNode;
}

const TableDetails = ({ children }: TableDetailsProps) => (
  <Container>
    <Header>
      <h1>Título</h1>
      <h1>Descrição</h1>
    </Header>
    <Body>{children}</Body>
  </Container>
);

export default TableDetails;
