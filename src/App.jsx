import "./App.css";
import { Login } from "./pestañas/Login.jsx";
import { Inicio } from "./pestañas/Inicio.jsx";
import { useState } from "react";
import { Agenda } from "./pestañas/Agenda.jsx";
const nombre = "LuigiMete"
const contrasenia = "SalchichaPure"

function App() {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);
  const [agendas, setAgendas] = useState(false);


  return (
    <section className="App">
      {!(user === nombre && password === contrasenia) ? (
        <div><Login setUser={setUser} setPassword={setPassword} /></div>
      ) : (
        <div><Inicio user={user} setUser={setUser} />{
          !agendas === true
          ? <Inicio agendas={agendas} setAgendas={setAgendas} />
          : <Agenda agendas={agendas} setAgendas={setAgendas} />
        } </div>
      )}
    </section>
  );
}

export default App;
