import Chart from "../components/Chart";
// import Card from "../components/Card";
import { Container, RightSide } from "./styles";
import DateInput from "../components/DateInput";
import SearchBar from "../components/SearchBar";
import TableNavBar from "../components/TableNavBar";

const cardData = [
  { title: "Saldo a pagar", value: "R$ 120,55" },
  { title: "Saldo a receber", value: "R$ 120,55" },
  { title: "Saldo total", value: "R$ 120,55" },
];

const Home = () => (
  <Container>
    <TableNavBar />
    <RightSide></RightSide>
  </Container>
);

export default Home;
