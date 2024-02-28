import axios from 'axios'
import React, { useState } from 'react'

const AddPackages = () => {
    const [input,setInput] = new useState(
        {
            "packageName":"",
            "price":"",
            "duration":"",
            "description":""
        }
    )

    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3005/api/packages/addpackage",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {

                    alert("New Package Added")
                    setInput(
                        {
                            "packageName":"",
                            "price":"",
                            "duration":"",
                            "description":""
                        }
                    )
                    
                } else {

                    alert("Error in Adding Package")
                    setInput(
                        {
                            "packageName":"",
                            "price":"",
                            "duration":"",
                            "description":""
                        }
                    )
                    
                }
            }
        )
        
    }

  return (
    <div>
        <br />
        <br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Package Name</label>
                            <input type="text" className="form-control" name="packageName" value={input.packageName} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name="price" value={input.price} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" className="form-control" name="duration" value={input.duration} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValues}>ADD</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPackages

