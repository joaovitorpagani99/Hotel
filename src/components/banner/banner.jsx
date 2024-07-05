import React from 'react';
import './banner.css';
import bannerImage from '../../assets/hotel.jpg';

function Banner() {
    return (
        <section >
            <div className='card'>
                <h1>Preços para Associados: economize</h1>
                <p>Associados do Hoteis.com™ Rewards economizam, em média, 15% em milhares de hotéis no mundo todo.</p>
                <button>Ver ofertas</button>
            </div>
            <img src={bannerImage} alt="hotel" />
        </section>
    );
}

export default Banner;