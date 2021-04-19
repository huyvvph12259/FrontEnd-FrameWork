import React from 'react'
import { Link } from 'react-router-dom'

const NavAdmin = () => {
    return (
        
            <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                        <div className="nav">
                            
                            <Link to="/manager"><a className="nav-link" href="">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                            Product
                            </a></Link>
                            <Link to="/manager/category">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
                            Category
                            </a>
                            </Link>
                        </div>
                        </div>
                        
                    </nav>
        </div>
    )
}

export default NavAdmin
