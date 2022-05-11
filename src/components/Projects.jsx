// Css imports
import "../css/Projects.css";

// Images imports
import project from "../images/Laptop-Calidad-min.jpg";
import challenge from "../images/Laptop-Calidad-min-Challenge.jpg";

const Projects = () => {
    return ( 
        <div className="main-container">
            <h1 className="m-auto text-center text-uppercase pb-5 font-sans-pro wow fadeIn" data-wow-duration="2s" id="projects">Proyectos</h1>
            <h3 className="text-center pt-5 pb-4 font-rubik wow fadeIn" data-wow-duration="2s" data-wow-delay= '1s'>Bakery Shop</h3>
            <div className="row mx-0">
                <div className="col-lg-6">
                    <div className="project-width m-auto wow bounceInLeft" data-wow-duration="2s">
                        <img src={project} alt="" className="w-100 img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-6 my-auto pt-lg-4 wow bounceInRight" data-wow-duration="2s">
                    <p className="text-center m-auto pb-3 font-rubik font-grey">Consiste en una panadería virtual en la cual el cliente puede comprar sus productos de manera totalmente online.</p>
                    <p className="text-center m-auto my-4 font-rubik font-grey">El proyecto fue construido con las siguentes tecnologías: <span className="fw-bold font-rubik font-black">REACT JS, CSS, BOOTSTRAP, NODE JS, EXPRESS, MYSQL.</span></p>
                    <div className="m-auto width-buttons">
                        <div className="row mx-0 pt-4">
                            <div className="col-md-6 text-center wow fadeIn" data-wow-duration="2s" data-wow-delay= '1s'>
                                <a href="https://github.com/marcom25/panaderia-proyect" target="_blank" className="buttons">Repositorio</a>
                            </div>
                            <div className="col-md-6 text-center p-buttons wow fadeIn" data-wow-duration="2s" data-wow-delay= '1s'>
                                <a href="https://panaderia-proyect.netlify.app/" target="_blank" className="buttons">Visitar página</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row mx-0">
            <h3 className="text-center pt-5 mt-5 pb-4 font-rubik wow fadeIn" data-wow-duration="2s" data-wow-delay= '1s'>Challenge Alkemy</h3>
                <div className="col-lg-6">
                    <div className="project-width m-auto wow bounceInLeft" data-wow-duration="2s">
                        <img src={challenge} alt="" className="w-100 img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-6 my-auto pt-lg-4 wow bounceInRight" data-wow-duration="2s">
                    <p className="text-center m-auto pb-3 font-rubik font-grey">Consiste en una página en la cual podés llevar el registro de tus ingresos y egresos.</p>
                    <p className="text-center m-auto my-4 font-rubik font-grey">El proyecto fue construido con las siguentes tecnologías: <span className="fw-bold font-rubik font-black">REACT JS, CSS, BOOTSTRAP, NODE JS, EXPRESS, MYSQL.</span></p>
                    <div className="m-auto width-buttons">
                        <div className="row mx-0 pt-4">
                            <div className="col-md-6 text-center wow fadeIn" data-wow-duration="2s" data-wow-delay= '1s'>
                                <a href="https://github.com/sebaponce2/challenge-alkemy-fullstack.git" target="_blank" className="buttons">Repositorio</a>
                            </div>
                            <div className="col-md-6 text-center p-buttons wow fadeIn" data-wow-duration="2s" data-wow-delay= '1s'>
                                <a href="https://challenge-fullstack-alkemy-sebastianponce.netlify.app/" target="_blank" className="buttons">Visitar página</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default Projects;