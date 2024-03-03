import React, { useEffect, useState } from 'react'
import UserNavbar from './UserNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
const UserHomepage = () => {
        const [packages, setPackages] = useState([]);
        const userId = sessionStorage.getItem('userId');
    
        useEffect(() => {
            const fetchPackages = async () => {
                try {
                    const response = await axios.get('http://localhost:3006/api/packages/viewpackage');
                    setPackages(response.data);
                } catch (error) {
                    console.error('Error fetching packages:', error);
                }
            };
    
            fetchPackages();
        }, []);
    
        const handleSelectPackage = async (packageId) => {
            try {
                await axios.post('http://localhost:3006/api/subscription/select', { userId, packageId });
                alert('Package selected successfully');
            } catch (error) {
                console.error('Error selecting package:', error);
            }
        };

    
  return (
    <div>
        <UserNavbar/>
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
                                <div className="card">
                                    <img height={300} src="https://cdn.shopify.com/s/files/1/1633/7705/files/full_body_gym_workout_plan_for_women_480x480.jpg?v=1689684205" className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row g-3">
                        <center><b><h1>Packages</h1></b></center>
                        {packages.map(value => (
                                    <div key={value._id} className="col-md-4 mb-3">
                                        <div className="card">
                                            <div className="card-body">
                                                
                                                <img src="https://media.istockphoto.com/id/506479162/vector/silhouettes-athletes-bodybuilding.jpg?s=612x612&w=0&k=20&c=8pt9sBeFfzqr24nEQVc3WdTwx7qulZohy3ZTSD_PaMM=" class="card-img-top" alt="..." />
                                                <h5 className="card-title">{value.packageName}</h5>
                                                <p className="card-text">{value.description}</p>
                                                <h5 className="card-title">{value.duration}</h5>
                                                <h5 className="card-title">{value.price}</h5>
                                                {/* Add more details about the package as needed */}
                                                <button onClick={() => handleSelectPackage(value._id)} className="btn btn-primary">Select</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default UserHomepage

