import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const navigate = useNavigate()
    const [input, setInput] = new useState(
        {
            username: String,
            password: String
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3005/api/member/login", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully signed in")
                    sessionStorage.setItem("username", response.data.username)
                    navigate("/addpackage")
                    setInput(
                        {
                            username: String,
                            password: String
                        }
                    )
                } else {
                    alert("Something went wrong")
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