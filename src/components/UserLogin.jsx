import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const navigate = useNavigate()
    const [input, setInput] = new useState(
        {
            username: "",
            password: ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3006/api/member/login", input).then(
            (response) => {
                console.log(response.data)
                const {paymentStatus } = response.data;
                if (response.data.status == "success") {
                    
                    if (paymentStatus === 'Success'){
                
                    
                    console.log(response.data.userdata._id)
                    sessionStorage.setItem("userId", response.data.userdata._id)
                    navigate("/addpackage")
                    setInput(
                        {
                            username: "",
                            password: "",
                            
                        }
                    )
                    
                    }
                    else{
                        alert("Registration Fee not paid")
                        setInput(
                            {
                                username: "",
                                password: "",
                                
                            }
                        )
                    }
                    
                    
                }

               
                else {
                    alert("Something went wrong")
                    setInput(
                        {
                            username: "",
                            password: "",
                            
                        }
                    )
                }
            }

        )
    }
    return (
        <center>
            <div class="bg-secondary p-3">
                <div>

                    <div class="card">
                        <div className="container">
                            <div className="row g-3">
                                <div class="card-body">
                                    <h2 class="card-title"><u>LOGIN</u></h2><br></br>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
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
                                                <center><Link to="/registeruser" className="nav-link">New Users register here</Link></center><br></br>
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
        </center>
    )
}

export default UserLogin