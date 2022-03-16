// Images imports
import profileImage from "../images/Me.jpg";

// Css imports
import "../css/Presentation.css";

const Presentation = () => {
    return ( 
        <>
        <div className="w-25 m-auto py-2">
            <img src={profileImage} alt="sebastianponce" className="w-100"/>
        </div>
            <h1 className="text-center font-white">Sebastián Martín Ponce</h1>
            <div className="w-75 text-center m-auto py-3 font-white">
                <p>
                    !Bienvenido a mi portfolio¡. Desde ya te doy las gracias por tomarte el tiempo de entrar a mi portfolio. Te invito a ver las distintas secciones para que puedas conocerme un poquito más.
                </p>
            </div>
            <div className="text-center my-3 pt-3">
                <a href="#projects" className="text-decoration-none fw-bold text-uppercase buttonProjects">Proyectos</a>
            </div>
        </>
     );
}
 
export default Presentation;