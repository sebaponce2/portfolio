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
                    <h4 className="text-uppercase pb-2">Redes sociales</h4>
                    <div>
                        <p className="w-100">Aca van a ir los iconitos</p>
                    </div>
                </div>
            </div>
            <div>
                <hr className="font-white"/>
                <p className="text-center font-white w-100 m-auto pt-3">&copy;Sebastián Martín Ponce</p>
            </div>
        </>
     );
}
 
export default Footer;