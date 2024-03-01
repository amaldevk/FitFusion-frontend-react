import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserNavbar from './UserNavbar'

const MyPackage = () => {

    const [data,setData] = useState([])
    const [input,setInput] = useState(
        {
            "userId":sessionStorage.getItem("userId")
        }
    )

    const getData = ()=>{
        console.log(input)
        axios.post("http://localhost:3006/api/subscription/mysubscription",input).then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])

    

  return (
    <div>

        <UserNavbar/>

        <br />
        <br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {
                            data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div class="card border-success mb-3">
                                    <div class="card-header bg-transparent border-success"></div>
                                    <div class="card-body text-success">
                                        
                                        <p class="card-text">Package Name : {value.packageId.packageName}</p>
                                        <p class="card-text">Package Name : {value.packageId.price}</p>
                                        <p class="card-text">Package Name : {value.packageId.duration}</p>
                                        <p class="card-text">Package Name : {value.packageId.description}</p>
                                        <p class="card-text">Subscription Date : {value.subscriptionDate}</p>
                                        
                                    </div>
                                    <div class="card-footer bg-transparent border-success"></div>
                                    </div>
            
                                    </div>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyPackage