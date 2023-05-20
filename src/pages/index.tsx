import { Container, RightSide } from "../styles/home/home.styles";
import TableNavBar from "../components/TableNavBar";
import Chart from "../components/Chart";
import Card from "../components/Card";
import TableContainer from "../components/TableCard";
import TableDetails from "../components/TableDetails";
import TableLine from "../components/TableLine";

const cardData = [
  { title: "Saldo a pagar", value: "R$ 120,55" },
  { title: "Saldo a receber", value: "R$ 120,55" },
  { title: "Saldo total", value: "R$ 120,55" },
];

const TableData = [
  { title: "Título 1", description: "Descrição 1" },
  { title: "Título 2", description: "Descrição 2" },
  { title: "Título 3", description: "Descrição 3" },
];

const Home = () => (
  <Container>
    {/* <Chart />
    <RightSide>
      {cardData.map((card) => (
        <Card key={card.title} title={card.title} value={card.value} />
      ))}
      <button>Download</button>
    </RightSide> */}
    <TableContainer>
      <TableDetails>
        {TableData.map((data) => (
          <TableLine
            key={data.title}
            title={data.title}
            description={data.description}
          />
        ))}
      </TableDetails>
    </TableContainer>
  </Container>
);

export default Home;
