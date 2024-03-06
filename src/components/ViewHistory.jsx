// HistoryList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

const ViewHistory = ()=> {
    const [historyEntries, setHistoryEntries] = useState([]);

    useEffect(() => {
        async function fetchHistory() {
            try {
                const response = await axios.get('http://localhost:3006/api/history/viewhistory');
                setHistoryEntries(response.data.historyEntries);
            } catch (error) {
                console.error('Error fetching update history:', error);
            }
        }
        
        fetchHistory();
    }, []);

    return (
        <div>
            <NavbarAdmin/>
            <br />
            <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Update History</h2>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Package</th>
                        <th>Package Price</th>
                        <th>Refund</th>
                        <th>Pay to admin</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {historyEntries.map(entry => (
                        <tr key={entry._id}>
                            <td>{entry.userId.name}</td>
                            
                            <td>{entry.newPackageId.packageName}</td>
                            <td>Rs {entry.newPackageId.price}</td>
                            <td>Rs {entry.payToAdmin}</td>
                            <td>Rs {entry.refund}</td>
                            <td>{new Date(entry.updatedAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ViewHistory;
