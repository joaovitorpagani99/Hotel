import React from "react";
import './Navbar.css';

function NavBar(props) {

    function handleClick() {
        alert('Você  entrou!');
    }

    return (
        <header>
            <h3>{props.titulo}</h3>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/cadastro">Cadastro</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/Contato">Contato</a></li>
                </ul>
                <button onClick={handleClick}>Entrar</button>
            </nav>
        </header>

    )
}


export default NavBar;