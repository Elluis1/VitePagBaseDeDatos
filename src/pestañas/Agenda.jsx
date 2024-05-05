import { listaCitas } from "../Archivos/Citas"

export function Agenda() {
    return (<section>
        <h1>Citas pendientes</h1>
        <div className="citas">
        {listaCitas.map(elemento=>(
            <ul key={elemento.id}> Nombre:{elemento.paciente} - Fecha: {elemento.fecha} - Hora: {elemento.hora} - Razon de la consulta: {elemento.consulta} </ul>
        ))}
        </div>
    </section>)
}