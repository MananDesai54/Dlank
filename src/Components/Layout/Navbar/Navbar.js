import "./Navbar.css";
import { Link } from "react-router-dom";
import { firebaseData } from "../../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";

const Navbar = (props) => {
  const authLinks = <Link to="/">Authenticate</Link>;
  const [user, isLoading] = useAuthState(firebaseData.auth);

  const userLinks = (
    <div>
      <Link to="/teams">Teams</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/reminders">Reminders</Link>
      <button onClick={() => firebase.auth().signOut()}>Signout</button>
      <p>{user?.displayName || user?.email}</p>
    </div>
  );

  return (
    <div className="black white-text flex navbar">
      <Link to={user ? "/dashboard" : "/"}>
        <h3 style={{ margin: 0, color: "#fff" }}>Dlank</h3>
      </Link>
      {!isLoading ? (!user ? authLinks : userLinks) : ""}
    </div>
  );
};

export default Navbar;
