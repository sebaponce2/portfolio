// Css imports
import "../css/Presentation.css";

const Presentation = () => {
    return ( 
        <>
            <h1 className="text-center font-white">Hola, soy Sebastián Martín Ponce</h1>
            <div className="w-75 text-center m-auto py-3 font-white">
                <p>
                    !Bienvenido a mi portfolio¡. Desde ya estoy agradecido de que te tomes el tiempo de entrar a mi portfolio. Te invito a pasar por las siguientes secciones y puedas conocerme un poquito más.
                </p>
            </div>
            <div className="text-center my-3 pt-3">
                <a href="#projects" className="text-decoration-none fw-bold text-uppercase buttonProjects">Proyectos</a>
            </div>
        </>
     );
}
 
export default Presentation;