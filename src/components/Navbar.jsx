import "../css/Colors.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light bg-light w-100" style={{position: 'fixed'}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Sebastián
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
                <a class="nav-link" aria-current="page" href="index.html">
                  Inicio
                </a>
              </li>
              <hr className="w-100 m-0 m-auto d-md-none"/>
              <li class="nav-item px-2">
                <a class="nav-link" href="#about-me">
                  Sobre mi
                </a>
              </li>
              <hr className="w-100 m-0 m-auto d-md-none"/>
              <li class="nav-item px-2">
                <a class="nav-link" href="#projects">
                  Proyectos
                </a>
              </li>
              <hr className="w-100 m-0 m-auto d-md-none"/>
              <li class="nav-item px-2">
                <a class="nav-link" href="#contact">
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
