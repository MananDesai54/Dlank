import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { firebaseData } from "../../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = (props) => {
  const authLinks = <Link to="/">Authenticate</Link>;

  const userLinks = (
    <Fragment>
      <Link to="/">Dashboard</Link>
      <Link to="/">Teams</Link>
      <Link to="/">Tasks</Link>
      <Link to="/" onClick={firebaseData.auth.signOut}>
        Signout
      </Link>
    </Fragment>
  );

  const [user, isLoading] = useAuthState(firebaseData.auth);

  return (
    <div className={classes.Navbar}>
      <h3>Dlank</h3>
      {!isLoading ? (!user ? authLinks : userLinks) : ""}
    </div>
  );
};

export default Navbar;
