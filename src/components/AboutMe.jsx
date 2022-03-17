// Images imports
import profileImage from "../images/Me2.jpg";

// Css imports
import "../css/AboutMe.css";

const AboutMe = () => {
    return (  
        <>
            <div className="text-center">
                <h2 className="text-uppercase pt-4">Sobre mi</h2>
            </div>
            <hr className='m-auto w-50 mt-3 p-0'/>
            <p className="text-center px-3 py-5">Bienvenido a la sección <span className="fw-bold">Sobre mi</span>. En esta sección quiero contarte un poco sobre quien soy y a qué me dedico.</p>
            <div className="w-50 m-auto py-2">
                <img src={profileImage} alt="sebastianponce" className="w-100 img"/>
            </div>
            <h5 className="text-center pt-5 pb-3">Un poco de mí</h5>
            <div className="text-center px-3">
                <p>Tengo 19 años, soy estudiante de Ingeniería en Software en la universidad Siglo 21 y tengo conocimientos de desarrollo web tanto en Font-End como en Back-End.</p>
            </div>
            <div className="text-center px-3 pt-2">
                <p>Actualmente me encuentro aprendiendo y mejorando mis skills. Por el momento solo tengo un proyecto full-stack. Este proyecto es personal/colaborativo, por lo cual está construido con las habilidades y conocimientos que he adquirido.</p>
            </div>
            <div className="text-center px-3 pt-2">
                <p>Soy una persona que se mantiene en constante aprendizaje y con ganas de crecer. Estoy en busca de nuevos desafios que me lleven a incrementar mis capacidades y conocimientos.</p>
            </div>
        </>
    );
}
 
export default AboutMe;
