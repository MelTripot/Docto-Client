import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../main";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      console.log("routing to form");
    }
  }, [user]);

  function handleSubmit(event) {
    alert("An essay was submitted: " + email + " " + password);
    signInWithEmailAndPassword(email, password);
    event.preventDefault();
  }

  return (
    <div>
      <h1>Login</h1>
      {loading ? (
        "loading"
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Pdw:
            <input
              type="text"
              name="name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
};
export default Login;
