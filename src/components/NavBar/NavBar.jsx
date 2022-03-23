import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
   <header>
    <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand"id="logo" href="#">
           Electronic<span>.io</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre Nosotros</a>
            </li>
            <li className="nav-item mt-2 ps-2">
              <CartWidget/>
             </li>
           </ul>

        </div>
      </div>
    </nav>
  </header>
  )
}

export default NavBar
