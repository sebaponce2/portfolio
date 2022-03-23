// Components imports
import Navbar from "./Navbar";
import Presentation from "./Presentation";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

// Css imports 
import "../css/App.css";
import "../css/Colors.css";

const Container = () => {
    return ( 
        <div className="container-page">
            <header>
                <Navbar/>
            </header>
            <section className="spacing-5 bg-grey-dark h-100vh d-flex align-items-center">
                <div className="col">
                    <Presentation/>
                </div>
            </section>
            <section className="row spacing-4 mx-0">
                <AboutMe/>
            </section>
            <section className="spacing-4 bg-grey-dark px-3 m-auto">
                <Skills/>
            </section>
            <section className="row spacing-4 mx-0">
                <Projects/>
            </section>
            <section className="spacing-4 bg-grey-dark px-3 m-auto">
                <ContactMe/>
            </section>
            <footer className="spacing-3 bg-black px-4">
                <Footer/>
            </footer>
        </div>
     );
}
 
export default Container;