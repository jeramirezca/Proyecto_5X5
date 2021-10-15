import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function CajaSidebar(props) {
    const {logout} = useAuth0();

    const cerrarSesión = ()=>{

        logout({ returnTo: 'http://localhost:3000/inicio' })
        localStorage.setItem("token",null);



    };

    if (props.nombre === "Cerrar sesión") {
        return (
            <li className="cajasSidebar">
                <a onClick={() =>  cerrarSesión()} className="contenidoCajas">
                    <img src={props.icono} className="iconos_link" alt={props.nombre} />
                    <span className="nombres_links">{props.nombre}</span>
                    <span className="tooltip">{props.nombre}</span>
                </a>
            </li>
        );

    } else {
        return (
            <li className="cajasSidebar">
                <Link to={props.link} className="contenidoCajas">
                    <img src={props.icono} className="iconos_link" alt={props.nombre} />
                    <span className="nombres_links">{props.nombre}</span>
                </Link>
                <span className="tooltip">{props.nombre}</span>
            </li>
        );
    }
}

export default CajaSidebar;