// Modules imports
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

// Css imports
import "../css/Colors.css";
import "../css/Footer.css";

const Footer = () => {
    return ( 
        <>
            <div className="row main-container">
                <div className="col-md-6 font-white pb-4">
                    <h4 className="text-uppercase pb-2">Sebastián Martín Ponce</h4>
                    <p>Gracias por visitar mi portfolio. Espero que te haya gustado.</p>
                </div>
                <div className="col-md-6 font-white social">
                    <h4 className="text-uppercase">Redes sociales</h4>
                    <div>
                        <a href="http://www.linkedin.com/in/sebastián-ponce-4156a01a9/" target="_blank" className="fs-2 font-white p-2 pt-0 mt-0"><BsLinkedin/></a>
                        <a href="mailto:sebaottok@gmail.com?" target="_blank" className="fs-2 font-white p-2 pt-0 mt-0"><SiGmail/></a>
                        <a href="https://github.com/sebaponce2" target="_blank" className="fs-2 font-white p-2 pt-0 mt-0"><BsGithub/></a>
                        <a href="https://www.instagram.com/sebaponce__/" target="_blank" className="fs-2 font-white p-2 pt-0 pe-0 mt-0"><BsInstagram/></a>
                    </div>
                </div>
            </div>
            <div className="main-container">
                <hr className="font-white"/>
                <p className="text-center font-white w-100 m-auto pt-3">&copy;Sebastián Martín Ponce</p>
            </div>
        </>
     );
}
 
export default Footer;