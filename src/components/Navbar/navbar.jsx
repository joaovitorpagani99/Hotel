import React from "react";
import './navbar.css';

function NavBar(props) {

    function handleClick() {
        alert('Você  entrou!');
    }

    return (
        <header>
            <h3>{props.titulo}</h3>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Hoteis</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                <button onClick={handleClick}>Entrar</button>
            </nav>
        </header>

    )
}


export default NavBar;