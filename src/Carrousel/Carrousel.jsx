import React from 'react'
import './Carrousel.css'

function Carrousel() {
  return (
  <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
    <div className="carousel-indicators d-flex justify-content-center flex-column ">
      <div>
         <h5 className="frase mb-5">Entrénate para sentirte cómodo en lo incómodo.</h5>
      </div>
     <div>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

    </div>
    <div className="carousel-inner">

      <div className="carousel-item active">

        <img src="https://img.freepik.com/foto-gratis/silueta-persona-pie-cima-colina-hermoso-cielo-colorido-manana_181624-24501.jpg?w=740&t=st=1651271200~exp=1651271800~hmac=b394ede5954ece9b5373487f3232a952c743c8c90a7eb5b7f8d353d19ed22098" className="d-block w-100" alt="..."/>

      </div>
      <div className="carousel-item">
        <img src="https://www.ferraraporter.com/wp-content/uploads/2020/11/Sin-ti%CC%81tulo-3.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://www.jetstar.com/_/media/inspiration-hub/article-images/18pre-oct/magazine-images/tasmania_hikingtrails.jpg?rev=47c17e3fec4f49199c6d7c9d3d64c2d6&w=1050&rc=1&cw=1050&ch=590&cx=55&cy=0&hash=19AC4DB57332C98A00FF4504929B129AC56F5666" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carrousel
