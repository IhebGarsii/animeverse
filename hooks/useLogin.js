import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [isPending, setIsPending] = useState(null);
  const { error, setErorr } = useState(null);
  const login = async (email, password) => {
    setErorr(null);
    setIsPending(true);
    const res = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email, password),
    });
    const json = await res.json();
    if (!res.ok) {
      setErorr(json.erorr);
      setIsPending(false);
    }
    if (res.ok) {
      setIsPending(false);
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
    }
  };
  return { login, isPending, error };
};
