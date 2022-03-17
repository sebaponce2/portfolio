// Images imports
import project from "../images/project.png";

const Projects = () => {
    return ( 
        <>
            <h1 className="text-center text-uppercase pb-5">Proyectos</h1>
            <div>
                <h2 className="text-center pt-4 pb-3">Bakery Shop</h2>
                <p className="text-center m-auto pb-5">Consiste en una panadería virtual en la que el cliente puede comprar sus productos de manera totalmente online.</p>
                <div className="w-50 m-auto">
                    <img src={project} alt="" className="w-100"/>
                </div>
                <p className="text-center m-auto py-5">El proyecto fue construido con las siguentes tecnologías: <span className="fw-bold">REACT, CSS, BOOTSTRAP, NODEJS, EXPRESS, MYSQL</span></p>
            </div>
        </>
     );
}
 
export default Projects;