import React from "react";
import "./galeria.css";
import galeriaImg from '../../assets/viagem.avif';
import imagem1 from '../../assets/hotel1.jpg';
import imagem2 from '../../assets/hotel2.jpg';
import imagem3 from '../../assets/hotel3.jpg';

const hoteis = [
    { cod: 1, nome: "Hotel Chinzanso Tokyo", texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", img: imagem1 },
    { cod: 2, nome: "Pousada Villa D'Biagy", texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", img: imagem2 },
    { cod: 3, nome: "Natal Dunnas Hotel.", texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", img: imagem3 }
]

function Galeria(props) {

    const cardHoteis = hoteis.map((hotel) => {
        return (
            <div className="containerImg" key={hotel.cod}>
                <img src={hotel.img} alt="Imagem de uma viagem" />
                <h4>{hotel.nome}</h4>
                <p>{hotel.texto}</p>
            </div>
        );
    });
    return (
        <section className="galeria">
            <figure className="fundoGaleria">
                <h1>{props.titulo}</h1>
                <img src={galeriaImg} alt="Imagem de uma viagem" />
            </figure>
            <div className="container">
                {cardHoteis}
            </div>
        </section>
    )
}


export default Galeria;