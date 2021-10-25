import { Link } from 'react-router-dom';
import icon_inicio from 'media/icons/icon_inicio.svg';
import icon_productos from 'media/icons/icon_productos.svg';
import icon_usuarios from 'media/icons/icon_usuarios.svg';
import icon_ventas from 'media/icons/icon_ventas.svg';
import icon_salir from 'media/icons/icon_salir.svg';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateComponent from "./PrivateComponent";

const Navbar = () => {
    const {logout} = useAuth0();
    return (
        <header className="navegacion">
            <ul>
                <PrivateComponent roleList ={["Administrador","Vendedor"]}>
                <Link to="/inicio" className="contenidoCajaNavbar">
                    <img src={icon_inicio} className="iconos_navbar" alt="Inicio" /> 
                    <span className="nombres_links">Inicio</span>
                </Link>
                <Link to="/ventas" className="contenidoCajaNavbar">
                    <img src={icon_ventas} className="iconos_navbar" alt="Ventas" />
                    <span className="nombres_links">Ventas</span>
                </Link>
                </PrivateComponent>
                <PrivateComponent roleList ={["Administrador"]}>
                <Link to="/productos" className="contenidoCajaNavbar">

                    <img src={icon_productos} className="iconos_navbar" alt="Productos" />
                    <span className="nombres_links">Productos</span>
                </Link>
                <Link to="/usuarios" className="contenidoCajaNavbar">
                    <img src={icon_usuarios} className="iconos_navbar" alt="Usuarios" />
                    <span className="nombres_links">Usuarios</span>
                </Link>
                </PrivateComponent>
                
                <a onClick={() => logout({ returnTo: 'https://polar-river-68912.herokuapp.com/inicio' })} className="contenidoCajaNavbar apuntador">
                    <img src={icon_salir} className="iconos_navbar" alt="Cerrar sesión" />
                    <span className="nombres_links">Cerrar sesión</span>
                </a>
                
            </ul>
        </header >
    );
};

export default Navbar;