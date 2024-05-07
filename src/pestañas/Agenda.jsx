import { useState } from "react";
import {listaCitas} from '../Archivos/Citas'
import "../App";

export function Agenda() {
  const [filtletra, setFiltletra] = useState("");
  const [filtdia, setFiltdia] = useState([""])
  // const [listaCitas, setCitas] = useState([]);
  // const [nombre, setNombre] = useState("");
  // const [time, setTime] = useState("");
  // const [day, setDay] = useState("");
  // const [consult, setConsult] = useState("");
  // const [id, setId] = useState(Date.now);

  // const addCita = () => {
  //   setId(id);
  //   setNombre(nombre);
  //   setTime(time);
  //   setDay(day);
  //   setConsult(consult);
  // };

  // setCitas(addCita());

  // const nuevaCita = {
  //   id: 1,
  //   paciente: nombre,
  //   hora: time,
  //   fecha: day,
  //   consulta: consult,
  // }

  // const borrarCita = (id) => {
  //   const citasFiltradas = listaCitas.filter((cita) => cita.id !== id);
  // };

  return (
    <section>
      <h1>
        Citas pendientes
      </h1>
      <input type="checkbox" placeholder="Lunes" onClick={() => setFiltdia("Lunes") }/>
      <input type="checkbox" placeholder="Martes" onClick={() => setFiltdia("Martes") }/>
      <input type="checkbox" placeholder="Miercoles" onClick={() => setFiltdia("Miercoles") }/>
      <input type="checkbox" placeholder="Jueves" onClick={() => setFiltdia("Jueves") }/>
      <input type="checkbox" placeholder="Viernes" onClick={() => setFiltdia("Viernes") }/>
      <input type="checkbox" placeholder="Sabado" onClick={() => setFiltdia("Sabado") }/>
      <input
        onChange={(e) => setFiltletra(e.target.value)}
        type="name"
        className="inputs"
        placeholder="Ingrese el nombre del paciente"
      />
      <div className="citas">
        {listaCitas.map((elemento) =>
          !(elemento.dia === filtdia) ? (
            <h1 key={elemento.id} />
          ) : (
            <li key={elemento.id}>
              Nombre: {elemento.paciente} - Fecha: {elemento.fecha} - Dia: {elemento.dia} - Hora: {elemento.hora} - Razon de la consulta: {elemento.consulta}
              <button className="error" >
                Eliminar cita
              </button>
            </li>
          )
        )}
      </div>
    </section>
  );
}

// return (
//   <section>
//     <h1>Citas pendientes</h1>
//     <form onChange={(e) => setFiltletra(e.target.value)}>
//       <input
//         type="name"
//         className="inputs"
//         placeholder="Ingrese el nombre del paciente"
//       />
//       <div className="citas">
//         {listaCitas.map((elemento) =>
//           !(elemento.paciente === filtletra) ? (
//             <h1 key={elemento.id}/>
//           ) : (
//             <li key={elemento.id}>
//               {" "}
//               Nombre:{elemento.paciente} - Fecha: {elemento.fecha} - Hora:{" "}
//               {elemento.hora} - Razon de la consulta: {elemento.consulta}{" "}
//             </li>
//           )
//         )}
//       </div>
//     </form>
//   </section>
// );

{/*   <h2>
        Agregar Cita
        <form>
          <input
            placeholder="Nombre del paciente"
            // onChange={(e) => setNombre(e.target.value)}
          />
          <input
            placeholder="Hora"
            // onChange={(e) => setTime(e.target.value)}
          />
          <input
            placeholder="Fecha"
            // onChange={(e) => setDay(e.target.value)}
          />
          <input
            placeholder="Razon de consulta"
            // onChange={(e) => setConsult(e.target.value)}
          />
          <button type="submit" >Guardar</button>
        </form>
      </h2> */}