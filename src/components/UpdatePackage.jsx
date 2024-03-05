
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserNavbar from './UserNavbar';

// const UpdatePackage = () => {
//     const [userId, setUserId] = useState('');
//     const [currentPackageId, setCurrentPackageId] = useState('');
//     const [newPackageId, setNewPackageId] = useState('');
//     const [packages, setPackages] = useState([]);
//     const [message, setMessage] = useState('');

//     useEffect(() => {
        
//         const userIdFromSession = sessionStorage.getItem('userId');
//         setUserId(userIdFromSession);

//         // Fetch the user's current package
//         axios.get(`http://localhost:3006/api/subscription/current/${userIdFromSession}`)
//             .then(response => {
//                 setCurrentPackageId(response.data.packageId);
//             })
//             .catch(error => {
//                 console.error('Error fetching current package:', error);
//             });

//         // Fetch all available packages
//         axios.get('http://localhost:3006/api/packages/viewpackage')
//             .then(response => {
//                 setPackages(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching packages:', error);
//             });
//     }, []);

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Send a request to update the user's package
//         axios.post('http://localhost:3006/api/subscription/update', { userId, newPackageId })
//             .then(response => {
//                 setMessage(response.data.message);
//             })
//             .catch(error => {
//                 console.error('Error updating package:', error);
//             });
//     };

//     return (
//         <div>
//             <UserNavbar/>
//             <br />
//             <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Update Package</h2>
            
//             <div className="container">
//                 <div className="row">
//                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

//                     <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Current Package ID: {currentPackageId}</label>
//                 </div>
//                 <br />
//                 <div>
//                     <label htmlFor="newPackage">Select New Package:</label>
//                     <select id="newPackage" value={newPackageId} onChange={(e) => setNewPackageId(e.target.value)}>
//                         <option value="">Select Package</option>
//                         {packages.map(pkg => (
//                             <option key={pkg._id} value={pkg._id}>{pkg.packageName}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <br />
//                 <button className="btn btn-success">Update</button>
//             </form>
//             {message && <p>{message}</p>}

//                     </div>
//                 </div>
//             </div>

            
//         </div>
//     );
// };

// export default UpdatePackage;













