import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import React, { useEffect, useState}  from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { obtenerDatosUsuarios } from 'util/api';
import { useUser } from 'context/userContext';


const PrivateLayout = ({ children }) => {


  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0();
  const [loadingUserInformation, setLoadingUSerInformation] = useState(false);
  const {setUserData} = useUser();

  useEffect(()=>{

        const fetchAuth0Token = async ()=>{
            
           // Pedir token a Auth0 
           setLoadingUSerInformation(true);
           const accessToken = await getAccessTokenSilently({
    
                audience: 'api-autenticacion-prueba-mintic',
            });

            // Recibir token de Auth0
            console.log(accessToken);
            localStorage.setItem("token", accessToken);
            
            // Enviar el token de Auth0 al backend
            await obtenerDatosUsuarios(

                (response)=>{
                    console.log('response', response);
                    setUserData(response.data);
                    setLoadingUSerInformation(false);
                },
                (err)=>{
                    console.log('err',err);
                    logout({ returnTo: 'https://polar-river-68912.herokuapp.com/inicio' });
                    setLoadingUSerInformation(false);
                    
                }

            );
            
        };

            if(isAuthenticated){

                fetchAuth0Token();

            }
        

  },[isAuthenticated, getAccessTokenSilently]);

  if (isLoading || loadingUserInformation) return <div>Loading ....</div>;
  

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return (
    
      <>       
        <Sidebar />        
        <Navbar />        
        <Header />        
        <main className="contenido_pag">{children}</main>
      </>
    
  );
};

export default PrivateLayout;
