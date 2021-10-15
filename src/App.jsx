import PrivateLayout from 'layouts/PrivateLayout';
import { Auth0Provider } from "@auth0/auth0-react";
import AuthLayout from 'layouts/AuthLayout';
import Inicio from 'pages/inicio';
import UsuariosInfoPage from 'pages/usuarios';
import VentasInfoPage from 'pages/ventas';
import ProductosInfoPage from 'pages/productos';
import AgregarVenta from 'pages/agregarVenta';
import AgregarProducto from 'pages/agregarProducto';
import AgregarUsuario from 'pages/agregarUsuario';
import FormEdVenta from 'pages/editarVenta';
import VerVenta from 'pages/verVenta';
import 'styles/styles.css';
import "styles/estiloFooter.css";
import "styles/estiloSidebar.css";
import "styles/estiloHeader.css";
import "styles/estiloInicio.css";
import "styles/estiloNavbar.css";
import "styles/estiloOtros.css";
import "styles/estiloTable.css";
import "styles/estiloLogin.css";



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Auth0Provider
      domain="misiontic-prueba.us.auth0.com"
      clientId='ecgbwFvG0quLZcjwJN3Jt216QuOviV0D'
      redirectUri='http://localhost:3000/inicio'
      audience='api-autenticacion-prueba-mintic'      
      >
      <div className='App'>
        <Router>
          <Switch>
            <Route path={['/inicio', '/ventas', '/usuarios', '/productos', '/AgregarVenta', '/editarVenta', '/AgregarUsuario', '/AgregarProducto', '/verVenta']}>
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
                  <Route path='/agregarVenta'>
                    <AgregarVenta />
                  </Route>
                  <Route path='/agregarProducto'>
                    <AgregarProducto />
                  </Route>
                  <Route path='/agregarUsuario'>
                    <AgregarUsuario />
                  </Route>
                  <Route path='/editarVenta'>
                    < FormEdVenta />
                  </Route>
                  <Route path='/verVenta'>
                    < VerVenta />
                  </Route>
                  <Route path='/inicio'>
                    <Inicio />
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>
          </Switch>
        </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;
