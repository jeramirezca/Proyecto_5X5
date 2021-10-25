import advertencia from 'media/advertencia.png';
import logo from 'media/logo.png'
import { useUser } from 'context/userContext';
import React from 'react';

const PrivateRoute = ({roleList, children})=>{

    const {userData} = useUser(); // del contexto creado par obtener la informacion del usuario

    
    if(roleList.includes(userData.rol)){

        return children;
    }

    return <div className="advertenciaAutorizacion"> 
        <div>
        <img src={advertencia}  className="logoAdvertencia" alt="logo" />
        <span className="mensajeAdvertencia">No está autorizado para ver este sitio. </span>
        </div><div>
        
        <span className="mensajeAdvertencia">Contacta un Administrador en caso de dificultades </span>
        <img src={logo}  className="logoX" alt="logo" /> 
        </div>

    </div>;


}


export default PrivateRoute;