import React from 'react'
import { Link } from 'react-router-dom/dist'

const UserNavbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img src="https://static.vecteezy.com/system/resources/previews/011/336/914/original/gym-and-fitness-logo-png.png" alt='bootstrap' width="75" height="50" />
                    <Link className="navbar-brand" to="#"><b>FitFusion</b></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/mypackage">My Package</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserNavbar