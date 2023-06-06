import { useContext } from "react";
import { AuthContext } from "../../Authentication/Provider/provider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
