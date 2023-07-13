import "../Components/Home.css" 
import Background from "../Assets/Home_pies.png"

export function Home () {
    return (
        <section>
            <img className="background" src={Background} alt="background"/>

            <div className="fondo-hom">
                <div className="elementsec1" >
                    <div className="highlight-sec1">
                    <h1> Cuidamos la salud de tus pies </h1>
                
                    <p>Servicios de podología clínica integral</p>

                    <button className="btnserv"><a href="#servi" className="btn">Servicios</a></button>  
                    </div>
                </div>
            </div>
        </section>
    )
}