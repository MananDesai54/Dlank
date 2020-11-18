import { useState } from "react";
import classes from "./Auth.module.css";
import { firebaseData } from "../../firebase.config";

import Button from "../Layout/Button/Button";
import Input from "../Layout/Input/Input";

const Auth = (props) => {
  const [mode, setMode] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { auth } = firebaseData;

  const switchMode = () => {
    if (mode.toLowerCase() === "login") setMode("Signup");
    else setMode("Login");
  };

  const authUser = (e) => {
    e.preventDefault();
    if (mode === "login") {
      auth.signInWithEmailAndPassword(email, password);
    } else {
      auth.createUserWithEmailAndPassword(email, password);
    }
    setEmail("");
    setPassword("");
  };

  const signInWithGoogle = () => {
    const provider = new firebaseData.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <form className={classes.AuthForm} onSubmit={authUser}>
      <Input
        type="email"
        name="email"
        placeholder="john@xyz.com"
        onChange={(e) => setEmail(e.target.value)}
        validations={{
          required: true,
        }}
        value={email}
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
      <Button type="submit" text={mode} onClick={() => {}} />
      <Button
        type="button"
        onClick={switchMode}
        text={`Switch to ${
          mode.toLowerCase() === "login" ? "Signup" : "Login"
        }`}
      />
      <Button
        type="button"
        text="SignIn with Google"
        onClick={signInWithGoogle}
      />
    </form>
  );
};

export default Auth;
