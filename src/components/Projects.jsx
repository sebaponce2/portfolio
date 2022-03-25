// Css imports
import "../css/Projects.css";

// Images imports
import project from "../images/project.png";

const Projects = () => {
    return ( 
        <div className="main-container">
            <h1 className="m-auto text-center text-uppercase pb-5" id="projects">Proyectos</h1>
            <h3 className="text-center pt-5 pb-5">Bakery Shop</h3>
            <div className="row mx-0">
                <div className="col-lg-6">
                    <div className="project-width m-auto">
                        <img src={project} alt="" className="w-100"/>
                    </div>
                </div>
                <div className="col-lg-6 my-auto pt-lg-4">
                    <p className="text-center m-auto pb-3">Consiste en una panadería virtual en la cual el cliente puede comprar sus productos de manera totalmente online.</p>
                    <p className="text-center m-auto my-4">El proyecto fue construido con las siguentes tecnologías: <span className="fw-bold">REACT JS, CSS, BOOTSTRAP, NODE JS, EXPRESS, MYSQL.</span></p>
                    <div className="m-auto width-buttons">
                        <div className="row mx-0 pt-4">
                            <div className="col-md-6 text-center">
                                <a href="https://github.com/marcom25/panaderia-proyect" target="_blank" className="buttons">Repositorio</a>
                            </div>
                            <div className="col-md-6 text-center p-buttons">
                                <a href="https://panaderia-proyect.netlify.app/" target="_blank" className="buttons">Visitar página</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;