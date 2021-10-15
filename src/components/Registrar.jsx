import React from "react";
import {Link} from 'react-router-dom';
import "styles/estiloLogin.css";

function Registrar (){
    return(
        <div className= "content-general">
        <div className="max-width">
            <div className="login">
                <div className="login_container">
                    <form className="card-details">
                        <h1 className="text-center">Registro de Usuario</h1>
                        <div>
                            <label for="usuario"className ="semi-bold label-form">Usuario</label>
                            <input id="usuario" type="text" placeholder ="Ingrese el usuario" className="form-control"/>
                       </div>
                       <div className="mt-20">
                            <label for="contrasena" className ="semi-bold label-form">Contraseña</label>
                            <input id="contrasena" type="password" placeholder ="Ingrese la contraseña" className="form-control"/>
                        </div>
                        <div className="mt-20">
                            <label for="rcontrasena"className ="semi-bold label-form">Confirmar Contraseña</label>
                            <input id="rcontrasena"type="password" placeholder ="Ingrese nuevamente la contraseña" className="form-control"/>
                        </div>
                        <Link to="/login">
                        <button type='sumit' className="btn btn__login btn--green mt-20" onClick={(e) =>window.alert("Usted se ha registrado exitosamente, su cuenta pasará a un proceso de confirmación")}>Registrarse</button>
                        </Link>
                        <button className="btn btn__login btn--green mt-20">Registrarse con Google</button>
                    </form>
                </div>
            </div>                           
        </div>
    </div>
    );
}


export default Registrar;