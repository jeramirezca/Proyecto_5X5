import React from "react";

const Tabla = () => {
  return (
    <div className="content-general">
      <main className="max-width">
        <h1>Listado de Productos</h1>
        <div>              <div>
                                <label className ="semi-bold label-form">Usuario</label>
                                <input type="text" placeholder ="Ingrese el usuario" className="form-control"/>
                           </div>
                           <div className="mt-20 prueba2">
                                <label className ="semi-bold label-form">Contraseña</label>
                                <input type="text" placeholder ="Ingrese la contraseña" className="form-control"/>
                            </div>
                            <div className="mt-20 prueba2">
                                <label className ="semi-bold label-form">Contraseña</label>
                                <input type="text" placeholder ="Ingrese la contraseña" className="form-control"/>
                            </div>
                            <div className="mt-20 prueba2">
                                <label className ="semi-bold label-form">Contraseña</label>
                                <input type="text" placeholder ="Ingrese la contraseña" className="form-control"/>
                            </div>
                            <div className="mt-20 prueba2">
                                <label className ="semi-bold label-form">Contraseña</label>
                                <input type="text" placeholder ="Ingrese la contraseña" className="form-control"/>
                            </div>
                            <div className="mt-20 prueba2">
                                <label className ="semi-bold label-form">Contraseña</label>
                                <input type="text" placeholder ="Ingrese la contraseña" className="form-control"/>
                            </div>

                            </div>





        
        <div className="prueba">
          <div className="top-button">
            <button className="mr-10">
                <svg
                className ="icon-s" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" y="0px"
                 viewBox="0 0 512 512"  
                 xmlSpace="preserve">
                <g>
                  <g>
                    <path d="M310,190c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S315.52,190,310,190z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M500.281,443.719l-133.48-133.48C388.546,277.485,400,239.555,400,200C400,89.72,310.28,0,200,0S0,89.72,0,200
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
                    <path d="M200,40c-88.225,0-160,71.775-160,160s71.775,160,160,160s160-71.775,160-160S288.225,40,200,40z M200,340
                      c-77.196,0-140-62.804-140-140S122.804,60,200,60s140,62.804,140,140S277.196,340,200,340z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M312.065,157.073c-8.611-22.412-23.604-41.574-43.36-55.413C248.479,87.49,224.721,80,200,80c-5.522,0-10,4.478-10,10
                      c0,5.522,4.478,10,10,10c41.099,0,78.631,25.818,93.396,64.247c1.528,3.976,5.317,6.416,9.337,6.416
                      c1.192,0,2.405-0.215,3.584-0.668C311.472,168.014,314.046,162.229,312.065,157.073z"/>
                  </g>
                </g>
                </svg>
            </button>
            <button className="mr-10">Agregar</button>
          </div>
          <div className="table-body">
          <table className="stickytable table">
            <thead>
              <tr>
                <th className="h-r">No.</th>
                <th>COD PRODUCTO</th>
                <th>CANTIDAD</th>
                <th>PRECIO UNITARIO</th>
                <th>TOTAL</th>
                <th>
                  <span>Ver</span>
                </th>
                <th>
                  <span>Editar</span>
                </th>
                <th className="h-l">
                  <span>Eliminar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>cod1</td>
                <td>1</td>
                <td>5000</td>
                <td>5000</td>
                <td>
                  <button>
                      <svg 
                          className ="icon-s"
                          version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 216.416 216.416" xmlSpace="preserve">
                          <g>
                            <path className="icon-color" d="M215.912,105.503c-0.073-0.188-0.153-0.373-0.24-0.555c-9.597-19.932-24.533-36.792-43.191-48.758
                              c-19.171-12.295-41.396-18.793-64.271-18.793c-22.875,0-45.101,6.499-64.272,18.795c-18.59,11.922-33.484,28.704-43.085,48.54
                              c-1.076,2.061-1.156,4.553-0.11,6.726c9.596,19.935,24.532,36.798,43.192,48.766c19.172,12.297,41.398,18.796,64.275,18.796
                              c22.876,0,45.102-6.499,64.273-18.795c18.66-11.967,33.595-28.829,43.192-48.762C216.573,109.596,216.657,107.435,215.912,105.503z
                              M108.21,164.019c-38.583,0-74.42-21.789-92.312-55.812C33.79,74.184,69.627,52.396,108.21,52.396
                              c38.582,0,74.42,21.79,92.312,55.812C182.629,142.228,146.791,164.019,108.21,164.019z"/>
                            <path className="icon-color" d="M108.209,75.291c-18.15,0-32.917,14.767-32.917,32.917s14.767,32.917,32.917,32.917
                              s32.917-14.767,32.917-32.917S126.359,75.291,108.209,75.291z M108.209,126.125c-9.879,0-17.917-8.038-17.917-17.917
                              s8.038-17.917,17.917-17.917s17.917,8.038,17.917,17.917S118.088,126.125,108.209,126.125z"/>
                          </g>

                        </svg>            
                  </button>
                </td>
                <td>
                  <button>
                      <svg
                        className ="icon-s" 
                        height="401pt" 
                        viewBox="0 -1 401.52289 401" 
                        width="401pt" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/>
                        <path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/>
                        </svg>
                  </button>
                </td>
                <td>
                  <button>
                      <svg
                          className ="icon-s" 
                          height="427pt" 
                          viewBox="-40 0 427 427.00131" 
                          width="427pt" 
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
                          <path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
                          <path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/>
                          <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
                      </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>cod1</td>
                <td>1</td>
                <td>5000</td>
                <td>5000</td>
                <td>
                  <button>Ver</button>
                </td>
                <td>
                  <button>Editar</button>
                </td>
                <td>
                  <button>Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>cod1</td>
                <td>1</td>
                <td>5000</td>
                <td>5000</td>
                <td>
                  <button>Ver</button>
                </td>
                <td>
                  <button>Editar</button>
                </td>
                <td>
                <button>Eliminar</button>                     
                </td>
              </tr>
            </tbody>
          </table>
        </div>
          <div className="separate-button">
          <button className="mr-10"> Guardar</button>
          <button>Cancelar</button>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Tabla;