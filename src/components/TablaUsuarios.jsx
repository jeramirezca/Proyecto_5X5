import "styles/estiloTable.css";
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { obtenerUsuarios, editarUsuario } from 'util/api';
import PrivateComponent from "./PrivateComponent";

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      await obtenerUsuarios(
        (respuesta) => {
          console.log("usuarios del sistema", respuesta.data);
          setUsuarios(respuesta.data);
        },
        (err) => {
          console.log(err);
        });
        setEjecutarConsulta(false);
    }
    fetchUsuarios();
  }, [ejecutarConsulta]);

  return (
    <div className='content-general  margen-out'>
      <div className='max-width'>
        <h2 className='color-label'>
          Listado de Usuarios
        </h2>
      </div>
      <TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  );
};

const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

  useEffect(() => {
    setUsuariosFiltrados(
      listaUsuarios.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaUsuarios]);

  return (
    <div>
      <div className="top-button">
        <input
          className="buscador"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder='Buscar'
        />
        <button className="mr-10 apuntador button-icon" onClick={() => {
          let buscador = document.querySelector(".buscador");
          buscador.classList.toggle("activo");
        }}>
          <svg
            className="icon-s"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve">
            <g>
              <g>
                <path className="icon-color3" d="M310,190c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S315.52,190,310,190z" />
              </g>
            </g>
            <g>
              <g>
                <path className="icon-color3" d="M500.281,443.719l-133.48-133.48C388.546,277.485,400,239.555,400,200C400,89.72,310.28,0,200,0S0,89.72,0,200
                        s89.72,200,200,200c39.556,0,77.486-11.455,110.239-33.198l36.895,36.895c0.005,0.005,0.01,0.01,0.016,0.016l96.568,96.568
                        C451.276,507.838,461.319,512,472,512c10.681,0,20.724-4.162,28.278-11.716C507.837,492.731,512,482.687,512,472
                        S507.837,451.269,500.281,443.719z M305.536,345.727c0,0.001-0.001,0.001-0.002,0.002C274.667,368.149,238.175,380,200,380
                        c-99.252,0-180-80.748-180-180S100.748,20,200,20s180,80.748,180,180c0,38.175-11.851,74.667-34.272,105.535
                        C334.511,320.988,320.989,334.511,305.536,345.727z M326.516,354.793c10.35-8.467,19.811-17.928,28.277-28.277l28.371,28.371
                        c-8.628,10.183-18.094,19.65-28.277,28.277L326.516,354.793z M486.139,486.139c-3.78,3.78-8.801,5.861-14.139,5.861
                        s-10.359-2.081-14.139-5.861l-88.795-88.795c10.127-8.691,19.587-18.15,28.277-28.277l88.798,88.798
                        C489.919,461.639,492,466.658,492,472C492,477.342,489.919,482.361,486.139,486.139z"/>
              </g>
            </g>
            <g>
              <g>
                <path className="icon-color3" d="M200,40c-88.225,0-160,71.775-160,160s71.775,160,160,160s160-71.775,160-160S288.225,40,200,40z M200,340
                        c-77.196,0-140-62.804-140-140S122.804,60,200,60s140,62.804,140,140S277.196,340,200,340z"/>
              </g>
            </g>
            <g>
              <g>
                <path className="icon-color3" d="M312.065,157.073c-8.611-22.412-23.604-41.574-43.36-55.413C248.479,87.49,224.721,80,200,80c-5.522,0-10,4.478-10,10
                        c0,5.522,4.478,10,10,10c41.099,0,78.631,25.818,93.396,64.247c1.528,3.976,5.317,6.416,9.337,6.416
                        c1.192,0,2.405-0.215,3.584-0.668C311.472,168.014,314.046,162.229,312.065,157.073z"/>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div >
        <table className="stickytable table">
          <thead>
            <tr>
              <th className="h-r">NOMBRE</th>
              <th>USUARIO</th>
              <th>E-MAIL</th>
              <th>ROL</th>
              <th>ESTADO</th>
              <th className="h-l">
                EDITAR
              </th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map((usuario) => {
              return (
                <FilaUsuario
                  key={nanoid()}
                  usuario={usuario}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FilaUsuario = ({ usuario, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
    alias: usuario.alias,
    nickname: usuario.nickname,
    email: usuario.email,
  });

  const actualizarUsuario = async () => {
    //enviar la info al backend
    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/usuarios/${usuario._id}`,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("token")}` },
      data: { ...infoNuevoUsuario },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Usuario modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando el usuario');
        console.error(error);
      });
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              className='campoEdicion'
              type='text'
              value={infoNuevoUsuario.alias}
              onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, alias: e.target.value })}
            />
          </td>
          <td>{usuario.nickname}</td>
          <td> {usuario.email}</td>
          <td>
            <RolesUsuario usuario={usuario} />
          </td>
          <td>
            <EstadosUsuario usuario={usuario} />
          </td>
        </>
      ) : (
        <>
          <td>{usuario.alias}</td>
          <td>{usuario.nickname}</td>
          <td> {usuario.email}</td>
          <td>{usuario.rol}</td>
          <td>{usuario.estado}</td>
        </>
      )}
      <PrivateComponent roleList={"Administrador"}>
        <td>
          <div className=''>
            {edit ? (<>
              <Tooltip title='Confirmar Edición' arrow>
                <i
                  onClick={() => actualizarUsuario()}
                  className='fas fa-check confirmarEdicion separar'
                />
              </Tooltip>
              <Tooltip title='Cancelar edición' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-ban cancelarEdicion'
                />
              </Tooltip>
            </>
            ) : (
              <Tooltip title='Editar usuario' arrow>
                <a className="apuntador" onClick={() => setEdit(!edit)}>
                  <svg
                    className="icon-s"
                    height="401pt"
                    viewBox="0 -1 401.52289 401"
                    width="401pt"
                    xmlns="http://www.w3.org/2000/svg">
                    <path className="icon-color2" d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
                    <path className="icon-color2" d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" />
                  </svg>
                </a>
              </Tooltip>
            )}
          </div>
        </td>
      </PrivateComponent>
    </tr>
  );
};

const RolesUsuario = ({ usuario }) => {
  const [rol, setRol] = useState(usuario.rol ?? '');
  useEffect(() => {
    const edicionUsuario = async () => {
      // informacion que se le quiere enviar para cambio 
      await editarUsuario(usuario._id, { rol },
        (response) => {
          console.log(response);
        },
        (err) => {
          console.log(err);
        }
      );
    };
    if (usuario.role !== rol) {
      edicionUsuario();
    }
  }, [rol, usuario]);
  return (
    <select className="form-control" value={rol} onChange={(e) => setRol(e.target.value)}>
      <option value='' disabled >Seleccione un estado</option>
      <option value="Administrador">Administrador</option>
      <option value="Vendedor">Vendedor</option>
      <option value="Sin rol">Sin rol</option>
    </select>
  );
};


const EstadosUsuario = ({ usuario }) => {
  const [estado, setEstado] = useState(usuario.estado ?? '');
  useEffect(() => {

    const edicionUsuario = async () => {

      // informacion que se le quiere enviar para cambio 
      await editarUsuario(usuario._id, { estado },

        (response) => {
          console.log(response);
        },
        (err) => {
          console.log(err);
        }
      );
    };

    if (usuario.estado !== estado) {

      edicionUsuario();
    }

  }, [estado, usuario]);

  return (

    <select className="form-control" value={estado} onChange={(e) => setEstado(e.target.value)}>
      <option value='' disabled >Seleccione un estado</option>
      <option value="Autorizado">Autorizado</option>
      <option value="No autorizado">No Autorizado</option>
      <option value="Pendiente">Pendiente</option>
    </select>


  );

};

export default Usuarios;
