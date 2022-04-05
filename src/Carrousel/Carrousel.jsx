import React from 'react'
import { images } from '../helpers/getFetch'
import './Carrousel.css'

function Carrousel() {
  return (
  <main id="main">
    <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={images.image1} alt="hawaii1"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={images.image2} alt="hawaii2"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={images.image3} alt="hawaii3"/>
        </div>
      </div>
      <div class="overlay">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 offset-md-6 text-center text-md-start">
              <h1>Platzi Conf Hawaii</h1>
              <p class="d-none d-md-block">Platzi Conf llega por primera vez a Hawaii! Un evento
                para compartir con nuestra comunidad el conocimiento y experiencia
                de los expertos que estan creando el futuro de internet
                . Ven a conocer a miembros del Team Platzi, a
                otros estudiantes de Platzi y a los oradores
                de primer nivel que tenemos para ti. Te esperamos!</p>
              <a href="#" class="btn btn-outline-light">Quiero ser orador</a>
              <button type="button" class="btn btn-platzi" data-toggle="modal" data-target="#modal">Comprar
                tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Carrousel
