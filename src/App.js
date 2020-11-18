import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Layout/Navbar/Navbar";
import { firebaseData } from "./firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, isLoading, error] = useAuthState(firebaseData.auth);
  console.log(user, isLoading, error);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
