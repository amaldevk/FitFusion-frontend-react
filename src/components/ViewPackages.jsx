import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarAdmin from './NavbarAdmin'
import { Link } from 'react-router-dom'

const ViewPackages = () => {
    const [data, setData] = useState([])
    const getData = () => {
        axios.get("http://localhost:3006/api/packages/viewpackage").then(
            (response) => {
                setData(response.data)
            }
        )
    }
    useEffect(() => { getData() }, [])
    return (
        <div>

            <NavbarAdmin/>
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
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value.packageName}</th>
                                            <td>{value.price}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.description}</td>
                                            <td><a href="#" className="btn btn-danger">Delete</a></td>
                                        </tr>
                                        }
                                    )
                                }   
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default ViewPackages