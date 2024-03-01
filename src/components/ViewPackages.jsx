import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarAdmin from './NavbarAdmin'
import { Link } from 'react-router-dom'

const ViewPackages = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      // Fetch registered members when the component mounts
      fetchPackages()
    }, [])
  
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:3006/api/packages/viewpackage')
        setData(response.data)
      } catch (error) {
        console.error('Error fetching registered members:', error)
        // Handle error, maybe show an error message to the user
      }
    }
  
    const handleDelete = async (id) => {
      try {
        await axios.post('http://localhost:3006/api/packages/deletepackage', { id })
        // Assuming you want to refresh the list after updating a member's payment status
        fetchPackages()
      } catch (error) {
        console.error('Error updating payment status:', error)
        // Handle error, maybe show an error message to the user
      }
    }
    return (
        <div>

            <NavbarAdmin/>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Package Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>


                            {data.map(packages => (
                    <tr key={packages._id}>
                    <td>{packages.packageName}</td>
                    <td>{packages.price}</td>
                    <td>{packages.duration}</td>
                    
                    {/* Render other member details */}
                    <td>{packages.description}</td>
                    <td>
                        <button className="btn btn-danger mx-2" onClick={()=> handleDelete(packages._id)}>Delete</button>
                    </td>
                    </tr>
                ))}


                                 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default ViewPackages


 