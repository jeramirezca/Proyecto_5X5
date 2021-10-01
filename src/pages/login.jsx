import { Link } from 'react-router-dom';

function Login() {
  return (
    <button className="boton_iniciarSesion">
                <Link to="/inicio">
                    Iniciar sesión
                </Link>
            </button>
  );
}

export default Login;