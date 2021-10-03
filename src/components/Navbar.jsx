import { Link } from 'react-router-dom';
import icon_inicio from 'media/icons/icon_inicio.svg';
import icon_productos from 'media/icons/icon_productos.svg';
import icon_usuarios from 'media/icons/icon_usuarios.svg';
import icon_ventas from 'media/icons/icon_ventas.svg';
import icon_salir from 'media/icons/icon_salir.svg';

const Navbar = () => {
    return (
        <header className="navegacion">
            <ul>
                <Link to="/inicio" className="contenidoCajaNavbar">
                    <img src={icon_inicio} className="iconos_navbar" alt="Inicio" /> 
                    <span className="nombres_links">Inicio</span>
                </Link>
                <Link to="/ventas" className="contenidoCajaNavbar">
                    <img src={icon_ventas} className="iconos_navbar" alt="Ventas" />
                    <span className="nombres_links">Ventas</span>
                </Link>
                <Link to="/productos" className="contenidoCajaNavbar">

                    <img src={icon_productos} className="iconos_navbar" alt="Productos" />
                    <span className="nombres_links">Productos</span>
                </Link>
                <Link to="/usuarios" className="contenidoCajaNavbar">
                    <img src={icon_usuarios} className="iconos_navbar" alt="Usuarios" />
                    <span className="nombres_links">Usuarios</span>
                </Link>
                <Link to="../login" className="contenidoCajaNavbar">
                    <img src={icon_salir} className="iconos_navbar" alt="Cerrar sesión" />
                    <span className="nombres_links">Cerrar sesión</span>
                </Link>
            </ul>
        </header >
    );
};

export default Navbar;