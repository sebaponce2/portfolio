// Components imports
import Navbar from "./Navbar";
import Presentation from "./Presentation";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

// Css imports 
import "../css/App.css";
import "../css/Colors.css";

const Container = () => {
    return ( 
        <div className="container-page">
            <header>
                <Navbar/>
            </header>
            <section className="spacing-5 bg-grey-dark">
                <Presentation/>
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
        </div>
     );
}
 
export default Container;