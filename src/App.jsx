import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import Inicio from 'pages/inicio';
import UsuariosInfoPage from 'pages/usuarios';
import VentasInfoPage from 'pages/ventas';
import ProductosInfoPage from 'pages/productos';
import Login from 'pages/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import "styles/estiloTablas.css";
import "styles/estiloFooter.css";
import "styles/estiloSidebar.css";
import "styles/estiloHeader.css";
import "styles/estiloInicio.css";
import "styles/estiloNavbar.css";
import "styles/estiloFormulario.css";
import AgregarVenta from 'pages/agregarVenta';
import AgregarProducto from 'pages/agregarProducto';
import AgregarUsuario from 'pages/agregarUsuario';


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path={['/inicio', '/ventas', '/usuarios', '/productos', '/AgregarVenta', '/AgregarUsuario', '/AgregarProducto']}>
            <PrivateLayout>
              <Switch>
                <Route path='/ventas'>
                  <VentasInfoPage />
                </Route>
                <Route path='/usuarios'>
                  <UsuariosInfoPage />
                </Route>
                <Route path='/productos'>
                  <ProductosInfoPage />
                </Route>
                <Route path='/inicio'>
                  <Inicio />
                </Route>
                <Route path='/agregarVenta'>
                  <AgregarVenta />
                </Route>
                <Route path='/agregarProducto'>
                  <AgregarProducto />
                </Route>
                <Route path='/agregarUsuario'>
                  <AgregarUsuario />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/']}>
            <AuthLayout>
              <Switch>
                <Route path='/'>
                  <Login />
                </Route>
              </Switch>
            </AuthLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
