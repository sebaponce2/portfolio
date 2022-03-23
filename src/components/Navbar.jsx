// Css imports
import "../css/Navbar.css";
import "../css/Colors.css";

// Image import
import me from "../images/Me.jpg";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light bg-light w-100" style={{position: 'fixed'}}>
        <div class="container-fluid">
          <img src={me} alt="sebastianponce" className="img-radius"/>
          <a class="navbar-brand" href="#">
            Sebastián Ponce
          </a>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-md-flex justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav text-center">
              <hr className="w-100 m-0 m-auto d-md-none"/>
              <li class="nav-item px-2">
                <a class="nav-link buttons-hover" aria-current="page" href="index.html">
                  Inicio
                </a>
              </li>
              <hr className="w-100 m-0 m-auto d-md-none"/>
              <li class="nav-item px-2">
                <a class="nav-link buttons-hover" href="#about-me">
                  Sobre mi
                </a>
              </li>
              <hr className="w-100 m-0 m-auto d-md-none"/>
              <li class="nav-item px-2">
                <a class="nav-link buttons-hover" href="#projects">
                  Proyectos
                </a>
              </li>
              <hr className="w-100 m-0 m-auto d-md-none"/>
              <li class="nav-item px-2">
                <a class="nav-link buttons-hover" href="#contact">
                  Contacto
                </a>
              </li>
              <hr className="w-100 m-0 m-auto d-md-none"/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
