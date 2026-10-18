
import { useRef, useState } from "react";

function App() {
  const username = useRef();
  const password = useRef();
  const [result, setResult] = useState(null);

  function submit(e) {
    e.preventDefault();
    setResult({
      name: username.current.value,
      pass: password.current.value
    });
  }

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={submit}>
        Username:
        <input ref={username} required />
        <br /><br />

        Password:
        <input type="password" ref={password} required />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      {result && (
        <div>
          <h3>Submitted Information</h3>
          <p>Username: {result.name}</p>
          <p>Password: {result.pass}</p>
        </div>
      )}
    </div>
  );
}

export default App;
