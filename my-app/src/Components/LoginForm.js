import "./LoginForm.css"
import { useState } from "react"

export function LoginForm({setUser}){
    const [nombre, setNombre] = useState("") //aquí se guarda el nombre de usuario
    const [contraseña, setContraseña] = useState("")
    const [error, serError] = useState(false) //Mensaje que pida llenar los campos

    const handleSubmit = (e) => {
        e.preventDefault()  //Para que la pagina no se recargue al presionar el boton, se refrezque por defecto
        if(nombre == "" || contraseña == "") {   
            serError(true)  //lógica para inputs vacíos, salta error por si loguea sin rellenar
            return
        }
        serError(false) 
        setUser([nombre]) //pasar validaciones a setUser
    } 

    return (
        <section>
            <h1>Login</h1>

            <form
            className = "loginForm"
            onSubmit={handleSubmit}
            >
                <input 
                type = "text"
                value = {nombre}
                onChange = {e => setNombre(e.target.value)} //Captura eventos(e) que se escriben en el input
                
                /> 
                <input 
                type = "password"
                value = {contraseña}
                onChange = {e => setContraseña(e.target.value)}
                /> 
                <button>Iniciar sesión</button>
            </form>   
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}