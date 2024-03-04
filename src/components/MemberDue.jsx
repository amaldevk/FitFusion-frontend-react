import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

const MemberDue = () => {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        const fetchSubscriptionDetails = async () => {
            try {
                const response = await axios.get('http://localhost:3006/api/subscription/due');
                setSubscriptions(response.data);
            } catch (error) {
                console.error('Error fetching subscription details:', error);
            }
        };

        fetchSubscriptionDetails();
    }, []);

    return (
        <div>
            <NavbarAdmin/>
            <br />
            <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Due Details</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                    <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Package Name</th>
                        <th>Package Price</th>
                        <th>Due Amount</th>
                        <th>Remaining Days for Due</th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map(subscription => (
                        <tr key={subscription._id}>
                            <td>{subscription.name}</td>
                            <td>{subscription.emailid}</td>
                            <td>{subscription.packageName}</td>
                            <td>{subscription.packagePrice}</td>
                            <td>{subscription.dueAmount}</td>
                            <td>{subscription.remainingDaysForDue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MemberDue;
