import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent = ({roleList, children})=>{

    const {userData} = useUser(); // del contexto creado par obtener la informacion del usuario

    
    if(roleList.includes(userData.rol)){

        return children;
    }

    return <></>;


}


export default PrivateComponent;