// Components imports
import Navbar from "./Navbar";
import Presentation from "./Presentation";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

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
            <section className="spacing-4">
                <AboutMe/>
            </section>
            <section className="spacing-4 bg-grey-dark">
                <Skills/>
            </section>
        </div>
     );
}
 
export default Container;