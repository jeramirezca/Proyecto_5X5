import React from "react";
import {Link} from 'react-router-dom';
import "styles/estiloLogin.css";



function Login (){
    return(
        <div className= "content-general">
            <div className="max-width">
                <div className="login">
                    <div className="login_container">
                        <form className="card-details">
                            <h1 className="text-center color-label">Inicio de Sesión</h1>
                            <div className="mt-20">
                                <label for="usuario"className ="semi-bold label-form color-label">Usuario</label>
                                <input id="usuario" type="text" placeholder ="Ingrese el usuario" className="form-control"/>
                           </div>
                           <div className="mt-20">
                                <label for="contrasena" className ="semi-bold label-form color-label">Contraseña</label>
                                <input id="contrasena"type="password" placeholder ="Ingrese la contraseña" className="form-control"/>
                            </div>
                            <Link to="/inicio">
                            <button  className="btn btn__login btn--green mt-20" > Iniciar Sesión </button>
                            </Link>
                            <button className="btn btn__login btn--green mt-20">Iniciar con Google</button>
                            <div className="mt-20 text-center"></div>
                            <span className="bold color-label">¿No tienes una cuenta?</span>
                            
                            <button type="button" className="link-button">
                            <Link to="/registro">                                   
                                <span className="ml-5 apuntador">Crear una cuenta</span>
                            </Link>    
                            </button>                            
                        </form>
                    </div>
                </div>                           
            </div>
        </div>
    );
}


export default Login;