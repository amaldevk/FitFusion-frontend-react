import React from 'react'
import { Link } from 'react-router-dom'

const NavbarHome = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <img src="https://static.vecteezy.com/system/resources/previews/011/336/914/original/gym-and-fitness-logo-png.png" alt='bootstrap' width="75" height="50"/>
                        <Link className="navbar-brand" to="#"><b>FitFusion</b></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sign in
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/adminlogin">Admin Login</Link></li>
                                        <li><Link className="dropdown-item" to="/userlogin">User Login</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Contact</Link>
                                </li>

                            </ul>
                        </div>
                </div>
            </nav>
    </div>
  )
}

export default NavbarHome
