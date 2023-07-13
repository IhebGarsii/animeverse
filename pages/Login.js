import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { login, isPending, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // submit email and password to model with login from useLogin
  const handleSubmit = async () => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div className="login">
      <h1>login</h1>
    </div>
  );
};

export default Login;
