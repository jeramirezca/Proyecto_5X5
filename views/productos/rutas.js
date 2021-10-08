import Express from 'express';
import { consultaTodosProductos, crearProducto, editarProducto, eliminarProducto } from '../../controllers/productos/controller.js';


const rutasProducto = Express.Router();

//Respuesta generica despues de la consulta

const genericCallBack = (res) =>(err,result)=>{

    if(err){
     
      res.status(500).send("Error consultando los productos");
    
    }else{

      res.json(result);

    }
};


// PARA LISTAR ELEMENTOS
rutasProducto.route('/productos').get((req,res)=>{

  console.log('alguien hizo get en la ruta /productos');
  consultaTodosProductos(genericCallBack(res));

});



//AGREGAR PRODUCTO

rutasProducto.route('/productos/nuevo').post((req,res)=>{

  console.log('alguien hizo post en la ruta /productos/nuevo');
  crearProducto(req.body, genericCallBack(res));  

});


//EDITAR

rutasProducto.route('/productos/actualizar').patch((req, res) => {
  
  console.log('alguien hizo post en la ruta /productos/actualizar');
  editarProducto(req.body, genericCallBack(res));

});


//ELIMINAR

rutasProducto.route('/productos/eliminar').delete((req, res) => {

    console.log('alguien hizo delete  en la ruta /productos/eliminar');
  eliminarProducto(req.body, genericCallBack(res));

});


export default rutasProducto;
