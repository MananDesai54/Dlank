import { Fragment, useState } from "react";
import "./Auth.css";
import { firebaseData } from "../../firebase.config";

import Button from "../Layout/Button/Button";
import Input from "../Layout/Input/Input";
import Loader from "../Layout/Loader/Loader";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";

const Auth = (props) => {
  const [mode, setMode] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { auth } = firebaseData;
  const [user] = useAuthState(auth);

  const switchMode = () => {
    if (mode.toLowerCase() === "login") setMode("Signup");
    else setMode("Login");
  };

  const authUser = (e) => {
    e.preventDefault();
    setLoading(true);
    if (mode.toLowerCase() === "login") {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(resetForm)
        .catch(catchError);
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(resetForm)
        .catch(clearError);
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  const catchError = (error) => {
    console.log(error);
    setError(error.message);
    setEmail("");
    setPassword("");
    clearError();
    setLoading(false);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  const signInWithGoogle = () => {
    const provider = new firebaseData.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <form className="auth-form" onSubmit={authUser}>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {error && <p className="red-text center">{error}</p>}
          <Input
            type="email"
            name="email"
            placeholder="john@xyz.com"
            onChange={(e) => setEmail(e.target.value)}
            validations={{
              required: true,
            }}
            value={email}
            autofocus
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            validations={{
              required: true,
            }}
            value={password}
          />
          <div className="modes">
            <Button
              type="submit"
              text={mode}
              className="green"
              onClick={() => {}}
            />
            <Button
              type="button"
              onClick={switchMode}
              text={`Switch to ${
                mode.toLowerCase() === "login" ? "Signup" : "Login"
              }`}
              className="black"
            />
          </div>

          <Button
            type="button"
            text="SignIn with Google"
            onClick={signInWithGoogle}
            className="red darken-4"
            style={{
              display: "block",
              margin: "auto",
            }}
          />
        </Fragment>
      )}
    </form>
  );
};

export default Auth;
