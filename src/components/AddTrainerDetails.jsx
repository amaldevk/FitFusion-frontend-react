import axios from 'axios'
import React, { useState } from 'react'
import NavbarAdmin from './NavbarAdmin'
import { Link } from 'react-router-dom'

const AddTrainerDetails = () => {
    const [input,setInput] = new useState(
        {
            "name":"",
            "gender":"",
            "phnno":"",
            "address":"",
            "experience":""
        }
    )

    const InputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3006/api/trainer/addtrainer",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Trainer Added")
                    setInput(
                        {
                            "name":"",
                            "gender":"",
                            "phnno":"",
                            "address":"",
                            "experience":""
                        }
                    )
                } else {
                    alert("error in addind trainers!")
                    setInput(
                        {
                            "name":"",
                            "gender":"",
                            "phnno":"",
                            "address":"",
                            "experience":""
                        }
                    )
                }
            }
        )
    }
  return (
    <div>

        <NavbarAdmin/>
        <div className="container">
        <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Register Trainer</h2>
        <br />
        <br />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">GENDER</label>
                            <select name="gender" id="" className="form-control" value={input.gender} onChange={InputHandler}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PHNNO</label>
                            <input type="text" className="form-control" name="phnno" value={input.phnno} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ADDRESS</label>
                            <input type="text" className="form-control" name="address" value={input.address} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EXPERIENCE</label>
                            <input type="text" className="form-control" name="experience" value={input.experience} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info" onClick={readValues}>ADD</button>
                        </div>
                        <Link to="/adminhome" class="btn btn-primary">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTrainerDetails