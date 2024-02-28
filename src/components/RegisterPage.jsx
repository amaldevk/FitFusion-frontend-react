import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    const [input, setInput] = new useState(
        {
            "name": "",
            "address": "",
            "dateofbirth": "",
            "age": "",
            "contactno": "",
            "emailid": "",
            "gender": "",
            "bloodgroup": "",
            "height": "",
            "weight": "",
            "idproof": "",
            "username": "",
            "password": "",
            "paymentStatus": "pending"
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readvalues = () => {
        axios.post("http://localhost:3006/api/member/signup", input).then(
            (response) => {
                if (response.data.status == "success") {
                    alert("Registered successfully")
                    setInput(
                        {
                            "name": "",
                            "address": "",
                            "dateofbirth": "",
                            "age": "",
                            "contactno": "",
                            "emailid": "",
                            "gender": "",
                            "bloodgroup": "",
                            "height": "",
                            "weight": "",
                            "idproof": "",
                            "username": "",
                            "password": "",
                            "paymentStatus": "pending"
                        }
                    )
                } else {
                    alert("something went wrong")
                }
            }
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name='address' value={input.address} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" name="dateofbirth" id="" className="form-control" value={input.dateofbirth} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name='age' value={input.age} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Contact Number</label>
                                <input type="text" className="form-control" name='contactno' value={input.contactno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='emailid' value={input.emailid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender" id="" className="form-control" value={input.gender} onChange={inputHandler}>
                                    <option value="">Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood Group</label>
                                <select name="bloodgroup" id="" className="form-control" value={input.bloodgroup} onChange={inputHandler}>
                                    <option value="">Select your blood group</option>
                                    <option value="a+">A+</option>
                                    <option value="a-">A-</option>
                                    <option value="b+">B+</option>
                                    <option value="b-">B-</option>
                                    <option value="ab+">AB+</option>
                                    <option value="ab-">AB-</option>
                                    <option value="o+">O+</option>
                                    <option value="o-">O-</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">height</label>
                                <input type="text" className="form-control" name='height' value={input.height} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">weight</label>
                                <input type="text" className="form-control" name='weight' value={input.weight} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Aadhar Number</label>
                                <input type="text" className="form-control" name='idproof' value={input.idproof} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" name='username' value={input.username} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Payment Status</label>
                                <input class="form-control" type="text" name='paymentStatus' value={input.paymentStatus} onChange={inputHandler} placeholder="pending" aria-label="Disabled input example" disabled/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readvalues}>Register</button>
                                <Link to="/" className="nav-link">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
