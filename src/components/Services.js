import React from 'react'
import "./service.css"
export default function Servives() {
    return (
        <div className="services-contanier">
            <h1 className="heading">Services</h1>
            <div className="cards">
                <div className="card">
                    <div className="image-container">
                        <img src="https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0" alt="" />
                    </div>
                    <div className="text-container">
                        <h3 className="card-name">Card Name</h3>
                        <div className="price">
                            <small className="priceSmall"><s>$5.99</s></small>
                            &nbsp; $3.99
                        </div>
                        <div className="ul">
                            <ul>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                            </ul> 
                        </div>
                        <button className="cta">Buy Now</button>
                    </div>
                </div>

                <div className="card">
                    <div className="image-container">
                        <img src="https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0" alt="" />
                    </div>
                    <div className="text-container">
                        <h3 className="card-name">Card Name</h3>
                        <div className="price">
                            <small className="priceSmall"><s>$15.99</s></small>
                            &nbsp; $9.99
                        </div>
                        <div className="ul">
                            <ul>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                            </ul> 
                        </div>
                        <button className="cta">Buy Now</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src="https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0" alt="" />
                    </div>
                    <div className="text-container">
                        <h3 className="card-name">Card Name</h3>
                        <div className="price">
                            <small className="priceSmall"><s>$5.99</s></small>
                            &nbsp; $3.99
                        </div>
                        <div className="ul">
                            <ul>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                                <li>Best Service we Can Give To You</li>
                            </ul> 
                        </div>
                        <button className="cta">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
