import "./Navbar.css";
import { Link } from "react-router-dom";
import { firebaseData } from "../../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";

const Navbar = (props) => {
  const authLinks = <Link to="/">Authenticate</Link>;

  const userLinks = (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/">Teams</Link>
      <Link to="/">Tasks</Link>
      <button onClick={() => firebase.auth().signOut()}>Signout</button>
    </div>
  );

  const [user, isLoading] = useAuthState(firebaseData.auth);

  return (
    <div className="black white-text flex navbar">
      <Link to="/">
        <h3 style={{ margin: 0, color: "#fff" }}>Dlank</h3>
      </Link>
      {!isLoading ? (!user ? authLinks : userLinks) : ""}
    </div>
  );
};

export default Navbar;
