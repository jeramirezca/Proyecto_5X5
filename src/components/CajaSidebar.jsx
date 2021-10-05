import { Link } from 'react-router-dom';

function CajaSidebar(props) {
    return (
        <li className = "cajasSidebar">
            <Link to={props.link} className="contenidoCajas">
                <img src={props.icono} className="iconos_link" alt={props.nombre} />
                <span className="nombres_links">{props.nombre}</span>
            </Link>
            <span className="tooltip">{props.nombre}</span>
        </li>
    );
}

export default CajaSidebar;