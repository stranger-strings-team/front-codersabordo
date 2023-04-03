import { useState, useEffect, createContext } from "react";
import { findOneById } from "./services/userServices"
import jwt_decode from "jwt-decode";

interface AuthContextType {
  auth: User | null;
  setAuth: (auth: User | null) => void;
}

interface User {
  email: string;
  _id: string;
  roles: [string]
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

      const decodedToken: { email: string; _id: string, roles: [string] } =
        jwt_decode(token);

      const authData = {
        email: decodedToken.email,
        roles: decodedToken.roles
      };

      try {
        const userData = await findOneById(authData.email);
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