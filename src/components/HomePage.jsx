import React from 'react'
import NavbarHome from './NavbarHome'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <NavbarHome />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img height={400} src="https://healthsolutions.fitbit.com/wp-content/uploads/Gym.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img height={400} src="https://images.ctfassets.net/ipjoepkmtnha/7qhgn8NfNZjCvUFOCq7Nsm/3f763414f1165d7ea1324f86a8bc309f/home-gym-hero_3_darken.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img height={400} src="https://truefitness.com/wp-content/uploads/2020/04/NEW_4_Strength_Header-1-1800x981-1.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card">
                                    <img height={300} src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/11/bigstock-European-Caucasian-Athletic-Ma-237054937.jpg?fit=1600%2C1461&ssl=1" className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card text-center mb-3">
                                    <div className="card-body">
                                        <img height={130} src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/356881067/original/1ba8114c0b3bc4d0f5c8987b97b2ced51e528487/transform-your-lifestyle-inc-custom-nutrition-gym-plans-discipline-guidance.jpg" className="card-img-top" alt="..." />
                                        <h5 className="card-title"><b>New User</b></h5>
                                        <Link to="/registeruser" className="btn btn-primary">Register</Link>
                                        <h5 className="card-title"><b>Existing User</b></h5>
                                        <Link to="/userlogin" className="btn btn-primary">Log In</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card">
                                    <img height={300} src="https://cdn.shopify.com/s/files/1/1633/7705/files/full_body_gym_workout_plan_for_women_480x480.jpg?v=1689684205" className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row g-3">
                        <center><b><h1>Packages</h1></b></center>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card text-bg-warning mb-3">
                                    <div className="card-header">Basic</div>
                                    <div className="card-body">
                                        <h5 className="card-title">30 days</h5>
                                        <p className="card-text">500/-</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card text-bg-warning mb-3" >
                                    <div className="card-header">Bronze</div>
                                    <div className="card-body">
                                        <h5 className="card-title">60 days</h5>
                                        <p className="card-text">1000/-</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card text-bg-warning mb-3" >
                                    <div className="card-header">Silver</div>
                                    <div className="card-body">
                                        <h5 className="card-title">90 days</h5>
                                        <p className="card-text">1500/-</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card text-bg-warning mb-3" >
                                    <div className="card-header">Gold</div>
                                    <div className="card-body">
                                        <h5 className="card-title">120 days</h5>
                                        <p className="card-text">2000/-</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card text-bg-warning mb-3" >
                                    <div className="card-header">Platinum</div>
                                    <div className="card-body">
                                        <h5 className="card-title">180 days</h5>
                                        <p className="card-text">3000/-</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card text-bg-warning mb-3" >
                                    <div className="card-header">Diamond</div>
                                    <div className="card-body">
                                        <h5 className="card-title">360 days</h5>
                                        <p className="card-text">6000/-</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
