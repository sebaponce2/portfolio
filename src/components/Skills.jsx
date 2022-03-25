// Images imports
import html from"../images/html-5.svg";
import css from"../images/css.svg";
import bootstrap from "../images/bootstrap.svg";
import javascript from "../images/javascript.svg";
import react from "../images/react.svg";
import node from "../images/node.svg";
import express from "../images/express.svg";
import postman from "../images/postman.svg";
import mysql from "../images/mysql.svg";

// Css imports 
import "../css/Skills.css";


const Skills = () => {
    return ( 
        <>
            <h2 className="text-center text-uppercase font-white" id="skills">Skills</h2>
            <div className="text-center font-white px-3 py-4">
                <p className="m-auto pb-5">Estas son las tecnologías con las cuales he trabajado.</p>
            </div>
            <div className="row container-skills m-auto">
                <div className="col-6 col-md-4 py-2 my-auto">
                    <img src={html} alt="html" className="w-100 p-1"/>
                </div>
                <div className="col-6 col-md-4 py-2 my-auto">
                    <img src={css} alt="css" className="w-100 p-1"/>
                </div> 
                <div className="col-6 col-md-4 py-2 my-auto">
                    <img src={bootstrap} alt="bootstrap" className="w-100 p-4"/>
                </div>
                <div className="col-6 col-md-4 py-2 my-auto">
                    <img src={javascript} alt="javascript" className="w-100 p-4"/>
                </div>
                <div className="col-6 col-md-4 py-2 my-auto">
                    <img src={react} alt="react" className="w-100 p-2"/>
                </div>
                <div className="col-6 col-md-4 py-2 my-auto">
                    <img src={node} alt="node" className="w-100" />
                </div>
                <div className="col-6 col-md-4 py-2 my-auto">
                    <img src={express} alt="express" className="w-100"/>
                </div>
                <div className="col-6 col-md-4 py-2 my-auto">
                    <img src={postman} alt="postman" className="w-100"/>
                </div>
                <div className="col-6 col-md-4 py-2 my-auto">
                    <img src={mysql} alt="mysql" className="w-100"/>
                </div>
            </div>
        </>
     );
}
 
export default Skills;