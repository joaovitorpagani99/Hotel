import React from 'react'
import NavBar from './components/Navbar/navbar'
import Banner from './components/banner/banner'
import Galeria from './components/galeria/galeria'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Galeria titulo="Hoteis perfeitos para 2024" />
      <Footer />
    </>
  )
}

export default App
