import { LoginForm } from "./Components/LoginForm"
import { Home } from "./Components/Home"
import './App.css'

import { Header } from "./Components/Header"


function App() {

    return (
        <div className="App">
        <Header/>
        <Home/>
        <LoginForm/>
        </div>
    )
}
        /**<LoginForm/>
         * const {user, setUser} = useState([]) //si no hay usuario, no pasa a home
         * import { useState } from "react"*/ 
/** { //renderizado condicional, setUser (datos) a Home
            |user.length > 0 
             ? <LoginForm setUser={setUser}/> //Imprime formulario si user.length no tiene nada dentro
             :  <Home/> //si es mayor cero (contenido) nos imprime el Home
        }  */
export default App