// export function Logindecor() {
//   return <header>{Image}</header>;
// }
import { BotonG } from "../componentes/designs";
import { Usuario } from "../User";
const [username, password] = Usuario;
import { useState } from "react";
let a
let b

export function Login() {
  return (
    <div>
      <form
            onSubmit={function (e) {
              e.preventDefault
              if(a === true || b === true)
                console.log("Iniciando sesión");
              else
                console.log('Error en el inicio')
            }}>
        <ul>
          <input
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
          />
        </ul>
        <BotonG txt="Iniciar sesión"/>
      </form>
      <BotonG txt="Registrarse"/>
    </div>
  );
}

// export function Logininputs(title) {
//   return (
//     <div>
//       <input placeholder={(title.txt)}
//         onChange={function (e) {
//           console.log(e.target.value);
//         }}
//       />
//     </div>
//   );
// }
