import React from 'react'
function NavBar() {
  return (
   <header>
    <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand"id="logo" href="#">
           NFT<span>.io</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Market</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Community</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>


          </ul>

        </div>
      </div>
    </nav>
  </header>
  )
}

export default NavBar
