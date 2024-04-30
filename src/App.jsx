import "./App.css";
import { Login } from "./pestañas/login.jsx";
import { Inicio } from "./pestañas/inicio.jsx";
import { useState } from "react";
const nombre = "LuigiMete"
const contrasenia = "SalchichaPure"

function App() {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);

  return (
    <div className="App">
      {!(user.length > 0 && password.length > 2) ? (
        <Login setUser={setUser} setPassword={setPassword} />
      ) : (
        <Inicio user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
