import "../App.css";
import { useState } from "react";

export function Login({setUser, setPassword}) {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || contraseña === "") {
      setError(true);
      return;
    }
    setError(false);
    setUser(nombre)
    setPassword(contraseña)
  };

  return (
    <section>
      <form
        className="formulario"
        onSubmit={handleSubmit}>
        <input
          className="inputs"
          type="text"
          placeholder="nombre/Correo"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <input
          className="inputs"
          type="password"
          placeholder="contraseña"
          value={contraseña}
          onChange={(e) => {
            setContraseña(e.target.value);
          }}
        />
        <button className="botonInicio">Iniciar sesión</button>
      </form>
      {error && <p className="error"> Todos los campos son obligatorios </p>}
    </section>
  );
}

/* <BotonG txt="Registrarse"/> */
/* <input
size={30}
placeholder="nombre/Email/Numero"
onChange={(e) =>{
if (e.target.value === username)
  a === true}
}/>
</ul>
<ul>
<input
size={30}
placeholder="contraseña/contraseña"
onChange={(e) =>{
if (e.target.value === contraseña)
  b === true}
}
/> */
