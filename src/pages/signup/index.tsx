import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import {
  Container,
  Content,
  ErrorMessage,
} from "../../styles/auth/auth.styles";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const buttonLabel = isLoading ? "Carregando..." : "Cadastrar";
  const router = useRouter();

  const signup = async () => {
    var errors: string[] = [];

    try {
      setIsLoading(true);

      const newUsername = username.trim();
      const newUserEmail = email.trim();
      const newUserPassword = password.trim();
      const newUserConfirmPassword = confirmPassword.trim();

      if (newUsername === "") {
        errors.push("Usuário não informado.");
      }

      if (newUserEmail === "") {
        errors.push("E-mail não informado.");
      }

      if (newUserPassword === "") {
        errors.push("Senha não informada.");
      }

      if (newUserConfirmPassword === "") {
        errors.push("Confirmação de senha não informada.");
      }

      const passwordIsValid =
        (newUserPassword == "" || newUserPassword == "") &&
        newUserPassword === newUserConfirmPassword;

      if (!passwordIsValid) {
        errors.push("As senhas não conferem.");
      }

      if (errors.length !== 0) {
        setHasError(true);
        setErrorMessages(errors);
        console.log(errors);
        return;
      }

      //fetch(`${process.env.API_URL}/user`, {
      fetch(`http://localhost:8000/user`, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          username: newUsername,
          email: newUserEmail,
          password: newUserPassword,
        }),
      });

      router.push("/signin");
    } catch (err) {
      setHasError(true);
      const errors: string[] = [...errorMessages];
      errors.push(err.message);
      setErrorMessages(errors);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const Input = (
    {
      first,
      type,
      placeholder,
      setState,
    }: {
      first: boolean;
      type: string;
      placeholder: string;
      setState: (state: string) => void;
    },
    index: number
  ) => {
    return (
      <input
        key={"input" + index}
        type={type}
        placeholder={placeholder}
        // {first && (autoFocus)}
        onChange={(evt) => setState(evt.target.value)}
      />
    );
  };

  const inputProps = [
    {
      first: true,
      type: "text",
      placeholder: "Nome de usuário",
      setState: setUsername,
    },
    {
      first: false,
      type: "text",
      placeholder: "Email",
      setState: setEmail,
    },
    {
      first: false,
      type: "password",
      placeholder: "Senha",
      setState: setPassword,
    },
    {
      first: false,
      type: "password",
      placeholder: "Repetir senha",
      setState: setConfirmPassword,
    },
  ];

  return (
    <Container>
      <Content>
        <Image src={logo} alt="GoFinance" width={130} />
        {inputProps.map((imp, index) => Input(imp, index))}
        <button type="button" onClick={signup}>
          {buttonLabel}
        </button>
        {errorMessages?.map((error, index) => {
          return (
            <ErrorMessage key={"error" + index}>
              <span>{error}</span>
            </ErrorMessage>
          );
        })}
        <p>
          Já possui uma conta? <Link href="/signin">Entre</Link>
        </p>
      </Content>
    </Container>
  );
};

export default Signup;
