import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Redirect } from "react-router-dom";
import { firebaseData } from "../../firebase.config";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, loading] = useAuthState(firebaseData.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        !user && !loading ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
