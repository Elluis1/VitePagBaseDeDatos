// export function Logindecor() {
//   return <header>{Image}</header>;
// }

import { Usuario } from "../User.jsx";
const [username, password] = Usuario;

export function Login() {
  return (
    <form>
      <ul>
        <input size={30}
          placeholder="Usuario/Email/Numero"
          onSubmit={(e) => {
            if (e.target.value === username)
              console.log("El usuario es correcto");
          }}
        />
      </ul>
      <ul>
        <input size={30}
          placeholder="Contraseña/Password"
          onSubmit={function (e) {
            if (e.target.value === password)
              console.log("La contraseña es correcta");
          }}
        />
      </ul>
      <button>Iniciar sesión</button>
    </form>
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
