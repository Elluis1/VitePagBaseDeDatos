import "./App.css";
import { Login } from "./pestañas/Login.jsx";
import { Inicio } from "./pestañas/Inicio.jsx";
import { useState } from "react";
const nombre = "LuigiMete"
const contrasenia = "SalchichaPure"

function App() {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);

  return (
    <div className="App">
      {!(user.length > 0 && password.length > 6) ? (
        <Login setUser={setUser} setPassword={setPassword} />
      ) : (
        <Inicio user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
