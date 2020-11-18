import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Layout/Navbar/Navbar";
import "./firebase.config";
import "materialize-css/dist/css/materialize.min.css";
import PrivateRoute from "./Components/Routing/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import NotFound from "./Components/Layout/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Auth} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
