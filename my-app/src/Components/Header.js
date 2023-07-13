import Logo from "../Assets/LOGO_blancoturq.png"
import "../Components/Header.css"
import { Navbar } from "./Navbar"

export function Header() {
    return (
        <header>
        <a href="LoginForm.js" className="logo">
            <img src={Logo} alt="logo"/>
        </a>
        <Navbar/>
        </header>
    )
}