import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
   <header>
    <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" >
           Trekking Explorer
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <nav className="ms-auto">
              <NavLink className="mt-2 ms-3"  to="/" className={({isActive})=> isActive ? 'Grey' : 'White'}>Home</NavLink>
              <NavLink className="mt-2 ms-3" to="/categoria/mochilas" className={({isActive})=> isActive ? 'Grey' : 'White'}>Mochilas</NavLink>
              <NavLink className="mt-2 ms-3" to="/categoria/zapatillas" className={({isActive})=> isActive ? 'Grey' : 'White'}>Zapatillas</NavLink>
             <NavLink className="mt-2 ms-3" to='/cart' className={({isActive})=> isActive ? 'White' : 'Grey'}>
               <CartWidget/>
            </NavLink>
          </nav>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default NavBar
