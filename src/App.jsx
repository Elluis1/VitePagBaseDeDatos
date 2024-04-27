import './App.css'
import { Logininputs,  BotonInicioRegistro } from './pestañas/login.jsx'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <Logininputs text="Email/Usuario/Numero" />
      <Logininputs text="Contraseña" />
      <BotonInicioRegistro text="Iniciar sesión" />
      <BotonInicioRegistro text="Registrarse" />
    </div>
  )
}

export default App
