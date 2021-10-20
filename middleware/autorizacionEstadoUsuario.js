import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';
import jwt_decode from 'jwt-decode';



const autorizacionEstadoUsuario = async (req,res,next) =>{

    console.log("Soy un middleware personalizado");
    //obtener el usuario desde el token
    const token = req.headers.authorization.split("Bearer ")[1]; // separe para tener el token solito
    console.log("token", token);
    console.log("token", jwt_decode(token));
    //obtener informacion del usuario
    const user = jwt_decode(token)['http://localhost/userData'];
    console.log(user);
    
    
    const connection = getDB();
    await connection.collection('usuarios').findOne({email: user.email}, async (err,response)=>{
      //verificar el estado del usuario
      if(response){
        if(response.estado === "No autorizado"){ 

            // si el usuario es no autorizado, retornar un error de autenticación
            res.sendStatus(401);          
            res.end;
                  
        }
        else{
          // si el usuario esta pendendiente o autorizado, ejecutar next
          console.log("habilitado"); 
          
          next();  
        }
     }else{

      next();

     } 
    }); 
};

export default autorizacionEstadoUsuario;