import TableNavBar from "../TableNavBar";
import { Container } from "./styles";

interface TableContainerProps {
  children: React.ReactNode;
}

const TableContainer = ({ children }: TableContainerProps) => {
  return (
    <Container>
      <TableNavBar />
      {children}
    </Container>
  );
};

export default TableContainer;
