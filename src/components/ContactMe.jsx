import "../css/Colors.css";
import "../css/ContactMe.css";

const ContactMe = () => {
    return ( 
        <>
        {/* AJUSTAR EL WIDTH DEL FORMULARIO EN MOBILE*/}
            <div>
                <h2 className="text-center text-uppercase font-white m-auto pb-4">Contactame</h2>
                <p className="text-center font-white m-auto pb-4">Muchas gracias por visitar mi portfolio. Te invito a contactarme a través del siguiente formulario.</p>
            </div>
            <div className="m-auto pt-4">
                <form action="POST" className="w-75 bg-white px-3 m-auto formStyles">
                    <label htmlFor="" className="d-block w-100 pt-5 pb-2">Nombre</label>
                    <input type="text" name="" id="" className="w-100 border-0 bg-input inputStyles p-2" placeholder="Ingresa tu nombre"/>
                    <label htmlFor="" className="d-block w-100 py-2">Correo electrónico</label>
                    <input type="text" name="" id="" className="w-100 border-0 bg-input inputStyles p-2" placeholder="Ingresa tu correo electronico"/>
                    <label htmlFor="" className="d-block w-100 py-2">Mensaje</label>
                    <input type="text" className="w-100 mb-5 pb-5 border-0 bg-input inputStyles p-2" placeholder="Mensaje"/>
                </form>
            </div>
        </>
     );
}
 
export default ContactMe;