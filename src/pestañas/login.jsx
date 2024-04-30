import { BotonG } from "../componentes/designs";
import { Usuario } from "../User";
import '../App.css'
const [username, password] = Usuario;
import { useState } from "react";
let a
let b

export function Login() {
  return (
    <div>
      <form className="formulario">
        <input type="text"></input>
        <input type="password"></input>
        <BotonG txt="Iniciar sesión"/>
        <BotonG txt="Registrarse"/>
      </form>
    </div>
  );
}

/* <input
size={30}
placeholder="Usuario/Email/Numero"
onChange={(e) =>{
if (e.target.value === username)
  a === true}
}/>
</ul>
<ul>
<input
size={30}
placeholder="Contraseña/Password"
onChange={(e) =>{
if (e.target.value === password)
  b === true}
}
/> */