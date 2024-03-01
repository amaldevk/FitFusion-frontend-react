import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

function RegisteredApproval() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    // Fetch registered members when the component mounts
    fetchRegisteredMembers()
  }, [])

  const fetchRegisteredMembers = async () => {
    try {
      const response = await axios.get('http://localhost:3006/api/admin/viewregistered')
      setMembers(response.data)
    } catch (error) {
      console.error('Error fetching registered members:', error)
      // Handle error, maybe show an error message to the user
    }
  }

  const handleUpdatePaymentStatus = async (id, updatedData) => {
    try {
      await axios.post('http://localhost:3006/api/admin/update', { id, ...updatedData })
      // Assuming you want to refresh the list after updating a member's payment status
      fetchRegisteredMembers();
    } catch (error) {
      console.error('Error updating payment status:', error)
      // Handle error, maybe show an error message to the user
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.post('http://localhost:3006/api/admin/delete', { id })
      // Assuming you want to refresh the list after updating a member's payment status
      fetchRegisteredMembers();
    } catch (error) {
      console.error('Error updating payment status:', error)
      // Handle error, maybe show an error message to the user
    }
  }

  return (
    <div>

      <NavbarAdmin/>
      <br />

        <div className="container ">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    
                <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Registered Members</h2>
                <table class="table table-bordered">
                <thead>
                <tr>
                    <th>User Name</th>
                    <th>Name</th>
                    <th>Email</th>
                    {/* Add more table headings for other member details */}
                    <th>Payment Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {members.map(member => (
                    <tr key={member._id}>
                    <td>{member.username}</td>
                    <td>{member.name}</td>
                    <td>{member.emailid}</td>
                    {/* Render other member details */}
                    <td>{member.paymentStatus}</td>
                    <td>
                        <button className="btn btn-info mx-2" onClick={() => handleUpdatePaymentStatus(member._id, { paymentStatus: 'Success' })}>
                        Approve
                        </button> 
                        <button className="btn btn-danger mx-2" onClick={()=> handleDelete(member._id)}>Delete</button>
                    </td>
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

export default RegisteredApproval;


