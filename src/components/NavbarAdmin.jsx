import React from 'react'

const NavbarAdmin = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">FitFusion</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/adminhome">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Packages
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/addpackage">Add</a></li>
                                    <li><a class="dropdown-item" href="/viewpackage">View</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Trainers
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/addtrainer">Add</a></li>
                                    <li><a class="dropdown-item" href="/viewtrainer">View</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarAdmin