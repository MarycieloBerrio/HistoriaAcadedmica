import React, { useState } from 'react';
import "./NavBar.css";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState("biografia");

    const handleClick = (item) => {
        setActiveItem(item);
        navigate(`/${item}`);
    };

    return (
        <div className='navbar'>
            <ul className='items'>
                <li className={activeItem === "biografia" ? "active" : ""} onClick={() => handleClick("biografia")}>Biografía</li>
                <li className={activeItem === "trayectoria" ? "active" : ""} onClick={() => handleClick("trayectoria")}>Trayectoria</li>
                <li className={activeItem === "investigacion" ? "active" : ""} onClick={() => handleClick("investigacion")}>Investigación</li>
                <li className={activeItem === "asignaturas" ? "active" : ""} onClick={() => handleClick("asignaturas")}>Asignaturas</li>
                <li>Publicaciones</li>
                <li>Evaluación docente</li>
            </ul>
        </div>
    );
};

export default NavBar;