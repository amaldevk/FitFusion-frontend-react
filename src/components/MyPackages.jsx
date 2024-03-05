import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserNavbar from './UserNavbar';

const MyPackages = () => {
    const [selectedPackages, setSelectedPackages] = useState([]);
    const userId = sessionStorage.getItem('userId');

    useEffect(() => {
        const fetchSelectedPackages = async () => {
            try {
                const response = await axios.post('http://localhost:3006/api/subscription/selected', { userId },{headers:{token:sessionStorage.getItem("token")}});
                setSelectedPackages(response.data);
            } catch (error) {
                console.error('Error fetching selected packages:', error);
            }
        };

        if (userId) {
            fetchSelectedPackages();
        }
    }, [userId]);

    return (
        <div>
            <UserNavbar/>
            <br />
            <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Selected Packages</h2>
            <div className="container row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">


                <div className="row">
                {selectedPackages.map(subscription => (
                    <div key={subscription._id} className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{subscription.packageId.packageName}</h5>
                                <h6 className="card-title">Price : {subscription.packageId.price}</h6>
                                <h6 className="card-title">Duration : {subscription.packageId.duration}</h6>
                                <h6 className="card-title">Description : {subscription.packageId.description}</h6>
                                <h6 className="card-title">Subscription Date : {subscription.subscriptionDate}</h6>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>

                </div>
            </div>
            
        </div>
    );
};

export default MyPackages;