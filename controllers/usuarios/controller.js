
import { getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';
import jwt_decode from 'jwt-decode';


//consulta el listado de los usuarios

const consultaTodosUsuarios = async (callback)=>{

    const connection = getDB();
    await connection.collection('usuarios').find().limit(50).toArray(callback);
      
};

//consulta venderores

const consultaVenderores = async (callback)=>{

  const connection = getDB();
  await connection.collection('usuarios').find({rol: "Vendedor"}).limit(50).toArray(callback);
    
};


// consulta un usuario especifico por id

const consultaUsuario =async (id,callback) =>{

  const connection = getDB();
  await connection.collection('usuarios').findOne({ _id: new ObjectId(id)},callback);

};


//CREA UN USUARIO NUEVO

const crearUsuario = async (datosUsuario, callback)=>{

  const connection = getDB();
  await connection.collection('usuarios').insertOne(datosUsuario, callback);

};



// consulta si se encuentra, sino lo crea nuevamente

const consultarOCrearUsuario = async (req, callback) =>{

  //1. Obtener los datos del usuario desde el token
  const token = req.headers.authorization.split("Bearer ")[1]; // separe para tener el token solito
  console.log("token", token);
  console.log("token", jwt_decode(token));
  //obtener informacion del usuario
  const user = jwt_decode(token)['http://localhost/userData'];
  console.log(user);
  //2. Con el correo del usuario o el id de Auth0 verificar si el usuario esta en la BD o no
  const connection = getDB();
  await connection.collection('usuarios').findOne({email: user.email}, async (err,response)=>{

    console.log("response consulta bd", response);

    if(response){

      //3. Si el usuario ya esta en la BD, devuelve la informacion del usuario

      callback(err, response);

    }else{

       //4. Si el usuario no esta en la BD, lo crea y devuelve la información

       //modifica Id que trae Auth0 y asigna el id de la base de datos de MongoDB
       user.auth0ID = user._id;
       delete user._id;
       user.rol = 'Sin rol';
       user.estado = 'Pendiente';
       user.alias = '';
       await crearUsuario(user, (err,respuesta)=> callback(err, user));
    }
  }); 
};














/*

const crearUsuario = async (datosUsuario, callback)=>{

  
  console.log('Llaves: ', Object.keys(datosUsuario));

      if (
          Object.keys(datosUsuario).includes('usuario') &&
          Object.keys(datosUsuario).includes('rol') &&
          Object.keys(datosUsuario).includes('estado')
        ) {
          // implementar código para crear vehículo en la BD
          const connection = getDB();
          console.log(datosUsuario.usuario);
          const ss =  { usuario: datosUsuario.usuario};
          console.log(ss);

          const resultado = await connection.collection('usuarios').findOne(ss);

          if(resultado){

            return callback(409)
            
          }else{

            await connection.collection('usuarios').insertOne(datosUsuario, callback);

          }         
          
        } else {
          return { err: 'Error en consulta de datos', result: "Hola" };
        }
};
*/

//editar un usuario

const editarUsuario =async (id,edicion, callback)=>{

  
  const filtroProducto = { _id: new ObjectId(id) };
  console.log("aqui,",id);
  console.log(filtroProducto);
  const operacion = {
    $set: edicion,
  };
  const connection = getDB();
 
  await connection.collection('usuarios').findOneAndUpdate(filtroProducto,operacion, { upsert: true, returnOriginal: true },callback);

};


//elminar un usuario

const eliminarUsuario = async (id, callback)=>{

    const filtroUsuario = { _id: new ObjectId(id) };
    
    const connection = getDB();
    await connection.collection('usuarios').deleteOne(filtroUsuario, callback);

};



export {consultaTodosUsuarios, crearUsuario, editarUsuario, eliminarUsuario, consultaUsuario, consultarOCrearUsuario, consultaVenderores};



