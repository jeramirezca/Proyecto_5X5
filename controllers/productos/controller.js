
import { getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';

//consulta el listado de los productos

const consultaTodosProductos = async (callback)=>{

    const connection = getDB();
    await connection.collection('producto').find().limit(50).toArray(callback);
      
};

// crea un nuevo Producto

const crearProducto = async (datosProducto, callback)=>{

  
  console.log('Llaves: ', Object.keys(datosProducto));

      if (
          Object.keys(datosProducto).includes('codigoProducto') &&
          Object.keys(datosProducto).includes('descripcionProducto') &&
          Object.keys(datosProducto).includes('valorUnitarioProducto') &&
          Object.keys(datosProducto).includes('estadoProducto')
        ) {
          // implementar código para crear vehículo en la BD
          const connection = getDB();
          await connection.collection('producto').insertOne(datosProducto, callback);
        } else {
          return 'error';
        }
};


//editar un producto

const editarProducto =async (edicion, callback)=>{

      const filtroProducto = { _id: new ObjectId(edicion._id) };
      delete edicion._id;
      console.log(edicion.id)
      const operacion = {
        $set: edicion,
      };
      const connection = getDB();
      await connection.collection('producto').findOneAndUpdate(filtroProducto,operacion, { upsert: true, returnOriginal: true },callback);

};

//elminar un producto

const eliminarProducto = async (borrado, callback)=>{
   

    const filtroProducto = { _id: new ObjectId(borrado._id) };
    
    const connection = getDB();
    await connection.collection('producto').deleteOne(filtroProducto, (err, result) => {callback});



};






export {consultaTodosProductos, crearProducto, editarProducto, eliminarProducto};



