import React from "react";
import "./galeria.css";
import galeriaImg from '../../assets/viagem.avif';
import imagem1 from '../../assets/hotel1.jpg';
import imagem2 from '../../assets/hotel2.jpg';
import imagem3 from '../../assets/hotel3.jpg';

function Galeria() {
    return (
        <section className="galeria">
            <figure className="fundoGaleria">
                <h1>Hoteis perdeitos para 2024</h1>
                <img src={galeriaImg} alt="Imagem de uma viagem" />
            </figure>
            <div className="container">
                <div className="containerImg">
                    <img src={imagem1} alt="Imagem de uma viagem" />
                    <h4>Hotel Chinzanso Tokyo</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </div>
                <div className="containerImg">
                    <img src={imagem2} alt="Imagem de uma viagem" />
                    <h4>Hotel Chinzanso Tokyo</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </div>
                <div className="containerImg">
                    <img src={imagem3} alt="Imagem de uma viagem" />
                    <h4>Hotel Chinzanso Tokyo</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </div>
            </div>

        </section>
    )
}


export default Galeria;