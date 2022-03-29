// Images imports
import profileImage from "../images/Me.jpg";

// Css imports
import "../css/AboutMe.css";

const AboutMe = () => {
    return (  
        <>
            <div className="text-center">
                <h2 className="text-uppercase pt-4 font-sans-pro" id="about-me">Sobre mi</h2>
            </div>
            <hr className='m-auto w-50 mt-3 p-0'/>
            <p className="text-center px-3 py-5 m-auto font-rubik">Bienvenido a la sección <span className="fw-bold">Sobre mi</span>. En esta sección quiero contarte un poco acerca de quién soy y a qué me dedico.</p>
            <div className="container-image m-auto py-2">
                <img src={profileImage} alt="sebastianponce" className="w-100 img"/>
            </div>
            <h5 className="text-center pt-5 pb-4 font-sans-pro">Un poco de mí</h5>
            <div className="text-center px-3 m-auto">
                <p className="m-auto pb-4 font-rubik font-grey">Tengo 19 años, soy estudiante de <strong className="font-black fw-bold">Ingeniería en Software</strong> en la universidad Siglo 21 y tengo conocimientos de desarrollo web tanto en <strong className="font-black fw-bold">Font-End</strong> como en <strong className="font-black fw-bold">Back-End</strong>.</p>
            </div>
            <div className="text-center px-3 pt-2 m-auto">
                <p className="m-auto pb-4 font-rubik font-grey">Actualmente me encuentro aprendiendo y mejorando mis skills. Por el momento solo tengo un proyecto <strong className="font-black fw-bold">full-stack</strong>. Este proyecto es personal/colaborativo, por lo cual está construido con las habilidades y conocimientos que he adquirido.</p>
            </div>
            <div className="text-center px-3 pt-2 m-auto">
                <p className="m-auto pb-4 font-rubik font-grey">Soy una persona que se mantiene en constante aprendizaje y con ganas de <strong className="font-black fw-bold">crecer</strong>. Estoy en busca de nuevos desafios que me lleven a <strong className="font-black fw-bold">incrementar mis capacidades y conocimientos</strong>.</p>
            </div>
        </>
    );
}
 
export default AboutMe;
