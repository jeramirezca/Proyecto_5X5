import React, { useEffect, useState, useRef } from 'react';
import icon_menu from 'media/icons/icon_menu.svg';
import icon_inicio from 'media/icons/icon_inicio.svg';
import icon_productos from 'media/icons/icon_productos.svg';
import icon_usuarios from 'media/icons/icon_usuarios.svg';
import icon_ventas from 'media/icons/icon_ventas.svg';
import icon_salir from 'media/icons/icon_salir.svg';
import CajaSidebar from './CajaSidebar';
import nombreLogo from "media/nombreLogo.png";

const Sidebar = () => {
    return (
        <div className="barra_lateral">
            <div className="logo_barra">
                <div className="logo">
                    <img className="logo_v" alt="logo softplace"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQzLjU3OCA0My41NzkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwwKSI+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTQuMzQ3LDguNDcyYzAtMS4xMTYsMC45MDgtMi4wMjQsMi4wMjQtMi4wMjRoMTEuMjE1YzEuMTE2LDAsMi4wMjMsMC45MDgsMi4wMjMsMi4wMjRjMCwwLjU1MywwLjQ0OSwxLDEsMSAgICBjMC41NTMsMCwxLTAuNDQ3LDEtMWMwLTIuMjE5LTEuODA1LTQuMDI0LTQuMDIzLTQuMDI0SDE2LjM3MWMtMi4yMTksMC00LjAyNCwxLjgwNi00LjAyNCw0LjAyNGMwLDAuNTUzLDAuNDQ4LDEsMSwxICAgIEMxMy44OTksOS40NzIsMTQuMzQ3LDkuMDIzLDE0LjM0Nyw4LjQ3MnoiIGZpbGw9IiNmZWZlZmUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC42NjUsMzkuMTNjMC41NTIsMCwxLTAuNDQ2LDEtMVYxMC40ODhjMC0wLjU1My0wLjQ0OC0xLTEtMUg0LjAyNEMxLjgwNSw5LjQ4OCwwLDExLjI5MiwwLDEzLjUxMXYyMS41OTUgICAgYzAsMi4yMTksMS44MDUsNC4wMjMsNC4wMjQsNC4wMjNMNC42NjUsMzkuMTNMNC42NjUsMzkuMTN6IiBmaWxsPSIjZmVmZWZlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTguMTIxLDEwLjQ4OFYzOC4xM2MwLDAuNTU0LDAuNDQ4LDEsMSwxSDM0LjUxYzAuNTUzLDAsMS0wLjQ0NiwxLTFWMTAuNDg4YzAtMC41NTMtMC40NDctMS0xLTFIOS4xMjEgICAgQzguNTY5LDkuNDg4LDguMTIxLDkuOTM1LDguMTIxLDEwLjQ4OHoiIGZpbGw9IiNmZWZlZmUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMzkuNTU1LDkuNDg4aC0wLjU4OGMtMC41NTIsMC0xLDAuNDQ3LTEsMVYzOC4xM2MwLDAuNTU0LDAuNDQ4LDEsMSwxaDAuNTg4YzIuMjE5LDAsNC4wMjMtMS44MDYsNC4wMjMtNC4wMjRWMTMuNTEyICAgIEM0My41NzgsMTEuMjkyLDQxLjc3MSw5LjQ4OCwzOS41NTUsOS40ODh6IiBmaWxsPSIjZmVmZWZlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                    <img className="nombre_logo" src={nombreLogo} alt="Softplace" />
                </div>
                <img src={icon_menu} id="simbolo_menu" alt="icono menu" onClick={() => {
                    let barra_lateral = document.querySelector(".barra_lateral");
                    barra_lateral.classList.toggle("activo");
                }} />
            </div>
            <ul className="nav_lista">
                <CajaSidebar nombre='Inicio' icono={icon_inicio} link="/inicio" />
                <CajaSidebar nombre='Ventas' icono={icon_ventas} link="/ventas" />
                <CajaSidebar nombre='Productos' icono={icon_productos} link="/productos" />
                <CajaSidebar nombre='Usuarios' icono={icon_usuarios} link="/usuarios" />
                <CajaSidebar nombre='Cerrar sesión' icono={icon_salir} link="/" />
            </ul>
        </div>
    );
}

export default Sidebar