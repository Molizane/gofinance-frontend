import Image from "next/image";
import { Container, Content } from "../../styles/auth/auth.styles";
import logo from "../../assets/logo.png";
import Link from "next/link";

const Signin = () => (
  <Container>
    <Content>
      <Image src={logo} alt="GoFinance" width={130} />
      <input type="text" placeholder="Nome de usuário" autoFocus />
      <input type="passwword" placeholder="Senha" />
      <button>Entrar</button>
      <p>
        Ainda não possui uma conta? <Link href="/signup">Cadastre-se</Link>
      </p>
    </Content>
  </Container>
);

export default Signin;
