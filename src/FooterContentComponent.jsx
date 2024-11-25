import React from 'react'
import { Link } from 'react-router-dom'
const FooterContentComponent = () => {
    return (
        <div>
            {/* -------- footer content start here ---------- */}
            <div className="container-fluid">
                <div className="row bg-dark justify-content-evenly pb-3">
                    <div className="col-md-3">
                        <h5 className='text-white'>CODEWARTECK</h5>
                        <p className='text-white'>We develop innovative software solutions that empower businesses, enhance user experiences, and drive efficiency, fostering growth and success in a digital world.</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className='text-white'>Important Links</h5>
                        <div>
                            <Link to={'/home'} class="text-white text-decoration-none" >Home</Link>
                        </div>
                        <div>
                            <Link to={'/services'} class="text-white text-decoration-none" >Services</Link>
                        </div>
                        <div>
                            <Link to={'/contact'} class="text-white text-decoration-none" >Contact Us</Link>
                        </div>
                        <div>
                            <Link to={'/about'} class="text-white text-decoration-none" >About Us</Link>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <h5 className='text-white'>Address</h5>
                        <p className='text-white'>
                            CODEWARTECK <br />
                            34TH B CROSS 2ND BLOCK RAJAJINAGAR<br />
                            Bangalore -560010 <br />
                            <i class="bi bi-telephone-inbound"></i>: 6363250585
                        </p>
                    </div>
                </div>
            </div>
            {/* -------- footer content End here ---------- */}
        </div>
    )
}

export default FooterContentComponent