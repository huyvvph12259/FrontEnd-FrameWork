import React from 'react'
import {
  BrowserRouter,
  Link
} from 'react-router-dom'
const Header = () => {
  return (

    <header>
      {/* Header Start */}
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper">
              {/* Logo */}
              <div className="logo">
              <Link href="" to="/"><img src="assets/img/logo/logo.png" alt="" /></Link>
              </div>
              {/* Main-menu */}
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><Link href="" to="/">Home</Link></li>
                    <li><Link href="" to="/shop">Shop</Link></li>
                    <li><Link href="" to="/about" >About</Link></li>
                    <li><Link href="" to="/contact" >Contact</Link></li>

                  </ul>
                </nav>
              </div>
              {/* Header Right */}
              <div className="header-right">
                <ul>
                  <li>
                    <div className="nav-search search-switch">
                      <span className="flaticon-search" />
                    </div>
                  </li>
                  <li> <Link href="" to="/manager"><span className="flaticon-user " /><span>Manager</span></Link></li>
                  <li><a href="cart.html"><span className="flaticon-shopping-cart" /></a> </li>
                </ul>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>

  )
}

export default Header
