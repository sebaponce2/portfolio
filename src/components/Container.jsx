// Components imports
import Navbar from "./Navbar";
import Presentation from "./Presentation";

// Css imports 
import "../css/App.css";
import "../css/Colors.css";

const Container = () => {
    return ( 
        <div className="container-page ">
            <header>
                <Navbar/>
            </header>
            <section className="spacing-5 bg-grey-dark">
                <Presentation/>
            </section>
            <section>
                
            </section>
        </div>
     );
}
 
export default Container;