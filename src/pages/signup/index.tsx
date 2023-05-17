import Image from "next/image";
import { Container } from "./styles";
import { Content } from "./styles";
import logo from "../../assets/logo.png";
import Link from "next/link";

const Signup = () => (
  <Container>
    <Content>
      <Image src={logo} alt="GoFinance" width={130} />
      <input type="text" placeholder="Nome de usuário" autoFocus />
      <input type="text" placeholder="Email" />
      <input type="passwword" placeholder="Senha" />
      <input type="passwword" placeholder="Repetir senha" />
      <button>Cadastrar</button>
      <p>
        Já possui uma conta? <Link href="/signin">Entre</Link>
      </p>
    </Content>
  </Container>
);

export default Signup;
