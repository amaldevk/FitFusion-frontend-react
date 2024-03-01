import React from 'react'
import NavbarHome from './NavbarHome'

const ContactPage = () => {
    return (
        <div>
            <NavbarHome />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-3">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img height={200} src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/356881067/original/1ba8114c0b3bc4d0f5c8987b97b2ced51e528487/transform-your-lifestyle-inc-custom-nutrition-gym-plans-discipline-guidance.jpg" class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Address</h4>
                                        <p class="card-text">FitFusion Fitness Centre</p>
                                        <p class="card-text">Mookkannoor</p>
                                        <p class="card-text">Angamaly</p>
                                        <p class="card-text">Kerala 683577</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <table class="table">
                                            <tbody>
                                                <tr> 
                                                    <td><img height={25} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKTnmeQ1AJmTs3rbitMBX-SE2FDHCbhA44A&usqp=CAU" class="card-img-top" alt="..."/></td>
                                                    <td>+91 9638527410</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div class="card">
                                    <div class="card-body">
                                        <table class="table">
                                            <tbody>
                                                <tr> 
                                                    <td><img height={25} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOFu6UrtXrvrjiWtRgCTI6vjJBpnRyv1kUA&usqp=CAU" class="card-img-top" alt="..."/></td>
                                                    <td>fitfusion@gmail.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div class="card">
                                    <div class="card-body">
                                        <table class="table">
                                            <tbody>
                                                <tr> 
                                                    <td><img height={25} src="https://icon-library.com/images/whatsapp-icon-android/whatsapp-icon-android-2.jpg" class="card-img-top" alt="..."/></td>
                                                    <td>https://wa.me/9638527410</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
