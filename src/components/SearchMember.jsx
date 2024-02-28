import axios from 'axios'
import React, { useState } from 'react'

const SearchMember = () => {
    const [input, setInput] = useState({ name: "" });
    const [output, setOutput] = useState([]);

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    const readValues = () => {
        axios.post("http://localhost:3006/api/member/search", input)
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setOutput(response.data);
                } else {
                    setOutput([]);
                    alert("No data found for the member.");
                    setInput(
                        {
                            name: ""
                        }
                    )
                }
            })
            
    }

    return (
        <div>
            <div className="container">
                <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Search Member</h2>
                <br />
                <br />
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                        <div className="row g-3">
                            <div className="col-12">
                                <label htmlFor="" className="form-label"><b>Member Name</b></label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-success" onClick={readValues}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Member Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Height</th>
                                    <th scope="col">ID Proof</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {output.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.address}</td>
                                        <td>{value.weight}</td>
                                        <td>{value.height}</td>
                                        <td>{value.idproof}</td>
                                        <td>{value.emailid}</td>
                                        <td>{value.contactno}</td>
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

export default SearchMember;
