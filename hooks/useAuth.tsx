import { useContext } from "react";
import AuthContext from "../src/userContext"

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;