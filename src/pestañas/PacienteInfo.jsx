import { useState } from "react";
import { Pacientes } from "./pestañas/Pacientes.jsx";

export function PacienteInfo(pacienteSelec) {
  const [dato, setDato] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let id = db.pacienteSelec.dato.add({
        dato,
      });
      setDato("");
    } catch (error) {
      return console.log("algo fallo");
    }
  }

  return(
    <div>
        hola
    </div>
  )
}
