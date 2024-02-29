import React from 'react'
import NavbarAdmin from './NavbarAdmin'

const AdminHomepage = () => {
    return (
        <div>
            <NavbarAdmin/>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <img src="https://images.pexels.com/photos/9180717/pexels-photo-9180717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="img-fluid" alt="..." />
                            </div>
                        </div><br></br>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExampleCaptions" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://images.pexels.com/photos/3757941/pexels-photo-3757941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5><a href="/approval" type="button" class="btn btn-primary">View Users</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br></br>
                    <center><i><b><h3><div class="text-bg-warning p-3">PACKAGES</div></h3></b></i></center>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div class="card text-center">
                                    <h5 class="card-title">NEW PACKAGES</h5>
                                    <a href="/addpackage" class="btn btn-primary">ADD</a>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div class="card text-center">
                                    <h5 class="card-title">VIEW PACKAGES</h5>
                                    <a href="/viewpackage" class="btn btn-primary">VIEW</a>
                            </div>
                            </div>
                            <center><i><b><h3><div class="text-bg-warning p-3">TRAINERS</div></h3></b></i></center>
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card text-center">
                                    <h5 class="card-title">NEW TRAINERS</h5>
                                    <a href="/addtrainer" class="btn btn-primary">ADD</a>
                            </div>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div class="card text-center">
                                            <h5 class="card-title">VIEW TRAINERS</h5>
                                            <a href="/viewtrainer" class="btn btn-primary">VIEW</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default AdminHomepage