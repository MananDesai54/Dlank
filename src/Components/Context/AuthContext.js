import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseData } from "../../firebase.config";

export const AuthContext = createContext({
  user: null,
});

const AuthContextProvider = (props) => {
  const [user] = useAuthState(firebaseData.auth);

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
