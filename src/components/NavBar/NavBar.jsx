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
          <span>Trekking Explorer</span>
       </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <nav className="ms-auto">
              <NavLink  to="/" className={({isActive})=> isActive ? 'Grey' : 'White'}>Home</NavLink>
              <NavLink  to="/categoria/mochilas" className={({isActive})=> isActive ? 'Grey' : 'White'}>Mochilas</NavLink>
              <NavLink  to="/categoria/zapatillas" className={({isActive})=> isActive ? 'Grey' : 'White'}>Zapatillas</NavLink>
             <NavLink   to='/cart' className={({isActive})=> isActive ? 'White' : 'Grey'}>
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
