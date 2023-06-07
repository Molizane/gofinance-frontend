import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import router from "next/router";

type AuthProviderProps = {
  children: ReactNode;
};

type LoginCredentials = {
  userName: string;
  password: string;
};

type AuthContextData = {
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
};

type AuthState = {
  token: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [origin, setOrigin] = useState("/");
  const [data, setData] = useState<AuthState | undefined>(() => {
    if (typeof window === "undefined") {
      return {} as AuthState;
    }

    const token = localStorage.getItem("@gofinance:token");

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token };
    }
  });

  useEffect(() => {
    if (
      !data?.token &&
      router.pathname !== "/signin" &&
      router.pathname !== "/signup"
    ) {
      setOrigin(router.pathname);
      router.replace("/signin");
    }
  }, [data]);

  const login = useCallback(
    async ({ userName, password }: LoginCredentials) => {
      try {
        const response = await api.post("/login", { userName, password });
        const accessToken = response.data;

        localStorage.setItem("@gofinance:token", accessToken);
        api.defaults.headers.authorization = `Bearer ${accessToken}`;
        router.replace(origin);

        if (!accessToken) {
          setData(undefined);
        }

        setData({ token: accessToken });
      } catch (ex) {
        console.log(ex);
      }
    },
    [origin]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("@gofinance:token");
    delete api.defaults.headers.authorization;
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useLogin = (): AuthContextData => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useLogin };
