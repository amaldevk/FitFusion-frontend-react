import React from 'react'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">FitFusion</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/adminhome">Home</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Packages
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/addpackage">Add</Link></li>
                                    <li><Link class="dropdown-item" to="/viewpackage">View</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Trainers
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/addtrainer">Add</Link></li>
                                    <li><Link class="dropdown-item" to="/viewtrainer">View</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/memberdue">Due</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/viewhistory">History</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/searchmember">Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Log out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarAdmin