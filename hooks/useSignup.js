import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [isPending, setIsPending] = useState(null);
  const { error, setErorr } = useState(null);
  const signup = async (email, password) => {
    setErorr(null);
    setIsPending(true);
    const res = await fetch("/api/user/signup", {
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
      dispatch({ type: "LOGIN", payload: json });
    }
  };
  return { signup, isPending, error };
};
