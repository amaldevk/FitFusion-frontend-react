import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate()
    const [input, setInput] = new useState(
        {
            "username": "",
            "password": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3006/api/admin/adminlogin", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully Signed In")
                    navigate("/adminhome")
                    console.log(response.data.username)
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("username", response.data.username)
                    setInput(
                        {   
                            username:String,
                            password:String
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
    return (
        <div><center>
            <div class="background">
            <div class="login">
                <div class="card">
                    <div className="container">
                        <div className="row g-3">
                            <div class="card-body">
                                <h2 class="card-title"><u>ADMIN LOGIN</u></h2><br></br>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="row g-3">
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <label htmlFor="" className="form-label">USERNAME</label>
                                            <input type="text" className="form-control" name="username" value={input.username} onChange={inputHandler} />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <label htmlFor="" className="form-label">PASSWORD</label>
                                            <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler} />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <button className="btn btn-primary" onClick={readValues}>LOGIN</button>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <center><Link to="/userlogin" className="nav-link">Users Click Here</Link></center><br></br>
                                            <center><Link to="/" className="nav-link">Back to Home</Link></center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </center></div>
    )
}

export default AdminLogin