// Components imports 
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

// Css imports
import "../css/Colors.css";
import "../css/ContactMe.css";
import { icons } from 'react-icons';


const ContactMe = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_70h6qff', 'template_lj4hjuu', form.current, 'sFPKFR3bKenSS16-G')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        swal({
            title:"¡Enviado exitosamente!",
            text: " ",
            icon: "success",
            buttons: false,
            timer: "1500"
        });
    };
    

    return ( 
        <>
            <div className="main-container">
                <h2 className="text-center text-uppercase font-white m-auto pb-4" id="contact">Contacto</h2>
                <p className="text-center font-white m-auto pb-4">Muchas gracias por visitar mi portfolio. Te invito a contactarme a través del siguiente formulario.</p>
            </div>
            <div className="m-auto pt-4 main-container">
                <form ref={form} onSubmit={sendEmail} className="form-width bg-white px-3 m-auto formStyles">
                    <label className="d-block w-100 pt-5 pb-2">Nombre y apellido</label>
                    <input type="text" name="fullname" id="" className="w-100 border-0 bg-input inputStyles p-2 ps-3" placeholder="Ingresa tu nombre y apellido"/>
                    <label className="d-block w-100 py-2">Correo electrónico</label>
                    <input type="email" name="mail" id="" className="w-100 border-0 bg-input inputStyles p-2 ps-3" placeholder="Ingresa tu correo electrónico"/>
                    <label className="d-block w-100 py-2">Mensaje</label>
                    <textarea name="message" className="w-100 mb-5 pb-5 border-0 bg-input inputStyles p-2 ps-3" placeholder="Mensaje"></textarea>
                    <div className="position">
                        <button type="submit" value="Send" className="mb-5 submit-button">Enviar</button>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default ContactMe;