import { useState, useEffect, createContext } from "react";
import { findOneByEmail } from "./services/userServices"
import jwt_decode from "jwt-decode";

interface AuthContextType {
  auth: User | null;
  setAuth: (auth: User | null) => void;
}

interface User {
  username: string;
  email: string;
  id: string;
}

export const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {},
});

const AuthProvider: any = ({ children }: any): any => {
  const [auth, setAuth] = useState<User | null>(null);

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("token lost");
        return;
      }

      const decodedToken: { username: string; email: string; id: string } =
        jwt_decode(token);
      console.log("AuthProvider, from token: " + decodedToken.email);
      console.log("AuthProvider, from auth: " + auth?.email);

      const authData = {
        username: decodedToken.username,
        email: decodedToken.email,
        id: decodedToken.id,
      };

      try {
        const userData = await findOneByEmail(authData.email);
        delete userData.password;
        setAuth(userData);
      } catch (error) {
        console.log(error);
        setAuth(null);
      }
    };
    authenticateUser();
  }, [auth?.email]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;