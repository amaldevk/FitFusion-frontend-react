import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserNavbar from './UserNavbar';

const MyProfile = () => {
    const [profileData, setProfileData] = useState(null)
    const userId = sessionStorage.getItem("userId")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:3006/api/member/myprofile", { userId })
                setProfileData(response.data)
            } catch (error) {
                console.error('Error fetching user profile:', error)
            }
        };

        fetchData()
    }, [userId])

    return (
        <div>
            <UserNavbar/>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <h2>My Profile</h2>

                        <br />
                   
                    {profileData ? (

                        <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="https://cdn.shopify.com/s/files/1/1633/7705/files/full_body_gym_workout_plan_for_women_480x480.jpg?v=1689684205" class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{profileData.name}</h5>
                            <p className="card-text">Address: {profileData.address}</p>
                            <p className="card-text">Weight: {profileData.weight}</p>
                            <p className="card-text">Height: {profileData.height}</p>
                            <p className="card-text">ID Proof: {profileData.idproof}</p>
                            <p className="card-text">Email: {profileData.emailid}</p>
                            <p className="card-text">Contact Number: {profileData.contactno}</p>
                        </div>
                        </div>
                    </div>
                    </div>     
                        
                    ) : (
                        <p>Loading...</p>
                    )}


                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MyProfile





