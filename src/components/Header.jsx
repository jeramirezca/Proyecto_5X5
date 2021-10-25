import React from 'react';
import { useUser } from 'context/userContext';



const Header = () => {

  const {userData} = useUser();

  return (
    <header className='headerPrivate'>
        <div className="nombre_usuario">
            <span>Bienvenido</span>
        </div>
        <div className="rol_usuario">
            <span>{userData.alias}</span>
        </div>
    </header>
  );
};

export default Header;