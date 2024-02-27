import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTrainers = () => {
    const [data,setData] = new useState([])
    const getData=()=>{
        axios.get("http://localhost:3006/api/trainer/viewtrainers").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Phone no</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.gender}</td>
                                            <td>{value.phnno}</td>
                                            <td>{value.address}</td>
                                            <td>{value.experience}</td>
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

export default ViewTrainers