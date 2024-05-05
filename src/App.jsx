import "./App.css";
import { Login } from "./pestañas/Login.jsx";
import { Inicio } from "./pestañas/Inicio.jsx";
import { useState } from "react";
import { Agenda } from "./pestañas/Agenda";
const nombre = "LuigiMete"
const contrasenia = "SalchichaPure"

function App() {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);

  return (
    <section className="App">
      {!(user === nombre && password === contrasenia) ? (
        <div><Login setUser={setUser} setPassword={setPassword} /></div>
      ) : (
        <div><Inicio user={user} setUser={setUser} /></div>
      )}
    </section>
  );
}

export default App;




//  <Agenda></Agenda>