import React from "react";
import Banner from "../components/banner/banner";
import Galeria from "../components/galeria/galeria";
import Footer from "../components/footer/footer";

function Home() {
    return (
        <main>
            <Banner />
            <Galeria titulo="Hoteis perfeitos para 2024" />
            <Footer />
        </main>
    );
}

export default Home;