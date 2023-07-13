import "../Components/Navbar.css"

export function Navbar() {
    return (
            <nav>
              <ul>
                <a href="#home" class="nav-link">Inicio</a>
                <a href="#servi" class="nav-link">Servicios</a>
                <a href="#acerca-de" class="nav-link">Sobre nosotros</a>
                <a href="#contacto" class="nav-link">Contacto</a>
              </ul>
            </nav>
    )
}