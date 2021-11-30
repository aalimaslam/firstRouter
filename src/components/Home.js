import React from 'react'
import "./home.css"
import { useState } from 'react'

export default function Home() {
    const [firstText, setFirstText] = useState("")
    const [lastText, setLastText] = useState("")
    const [emailText, setEmailText] = useState("")
    const [titleText, setTitleText] = useState("")
    const [companyText, setCompanyText] = useState("")
    const handleFirstName = (event)=>{
        setFirstText(event.target.value)
    }
    const handleLastName = (event)=>{
        setLastText(event.target.value)
    }
    const handleEmail = (event)=>{
        setEmailText(event.target.value)
    }
    const handleTitle = (event)=>{
        setTitleText(event.target.value)
    }
    const handleCompany = (event)=>{
        setCompanyText(event.target.value)
    }
    return (
        <>
                <div className="jumbotron">
                
                <div id="black"></div>
                <video autoplay muted loop id="video-bg">
                    <source src="http://www.istockphoto.com/video_passthrough/17839538/153/17839538.mp4" type="video/mp4" />
                </video>
                
                <div className="animated fadeInDown">
                    <div className="container-fluid">
                    <div className="col-md-5 col-md-offset-1">
                        
                    <h1>Building a functional<br className="visible-lg "/> landing page for marketers</h1>
                    <hr style={{
                        width : "25%",
                        textAlign:"left",
                        margin:"30px 0",
                        border:"2.5px solid #fff"}}
                        />
                    </div>
                    

                    </div>
                </div>
                </div>

                <div className="container-fluid" id="main-wrapper">
                <div className="col-md-6 col-md-offset-1 main-content">
                    <h3>Now you have access to the data you will actually use</h3>
                    <p>
                    Bacon ipsum dolor amet ball tip boudin shoulder beef shank andouille strip steak sirloin meatloaf ground round filet mignon beef ribs chicken. Venison turducken tail, t-bone biltong beef ribs flank pork belly shankle filet mignon cow pork loin capicola cupim. </p>
                    
                    <div className="white-box">
                    <ul>
                <li><p className="">Short ribs filet mignon sausage andouille. Fatback ground round kevin, cupim turkey cow doner shank bresaola pastrami tenderloin frankfurter biltong.</p></li>
                <li><p className="">Cow tail turkey ball tip hamburger leberkas brisket. Leberkas salami beef, landjaeger capicola venison ribeye shank porchetta pastrami biltong spare ribs. </p></li>
                <li><p className="">T-bone bacon ham hock, ball tip swine cow picanha prosciutto beef sirloin short loin chicken.</p></li>
                </ul>
                    </div>
                    
                    <p className="final-cta">Download these digital industry insights and start driving stronger results for your brand today.</p>    
                </div>
                <div className="col-md-3 col-md-offset-1">
                <div className="form-container">
                    <h4>Fill out the Form Below to Get Your Digital Insights Now</h4>
                <form  method="post" name="frmContentDownload">
                    
                    <div><label htmlFor="FirstName1">First Name</label><input className="form-control" name="FirstName1" type="text" onChange={handleFirstName} value={firstText} /></div>
                    <div><label htmlFor="LastName1">Last Name</label><input className="form-control" name="LastName1" type="text" onChange={handleLastName} value={lastText} /></div>
                    <div><label htmlFor="emailAddress">Email</label><input className="form-control" name="emailAddress" type="text" onChange={handleEmail} value={emailText} /></div>
                    <div><label htmlFor="Company1">Company</label><input className="form-control" name="Company1" type="text" onChange={handleCompany} value={companyText} /></div>
                    <div><label htmlFor="Title1">Title</label><input className="form-control" name="Title1" type="text" onChange={handleTitle} value={titleText} /></div>
                    
                    <div><label htmlFor="StateProvince1">State or Province</label><select className="form-control" name="StateProvince1">
                    <option className="placeholder" disabled selected>STATE OR PROVINCE &#8609;</option>
                    <option value="AK">Alaska</option>
                    <option value="AL">Alabama</option>
                    <option value="AR">Arkansas</option>
                    <option value="AS">American Samoa</option>
                    <option value="AZ">Arizona</option>
                    <option value="CA-N">California - Northern</option>
                    <option value="CA-S">California - Southern</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DC">D.C.</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="FM">Micronesia</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="IA">Iowa</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MD">Maryland</option>
                    <option value="ME">Maine</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MO">Missouri</option>
                    <option value="MP">Marianas</option>
                    <option value="MS">Mississippi</option>
                    <option value="MT">Montana</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="NE">Nebraska</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NV">Nevada</option>
                    <option value="NY">New York</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="PW">Palau</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VA">Virginia</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="VT">Vermont</option>
                    <option value="WA">Washington</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WV">West Virginia</option>
                    <option value="WY">Wyoming</option>
                    <option value="AA">Military Americas</option>
                    <option value="AE">Military Europe/ME/Canada</option>
                    <option value="AP">Military Pacific</option>
                    <option value="AB">Alberta</option>
                    <option value="MB">Manitoba</option>
                    <option value="BC">British Columbia</option>
                    <option value="NB">New Brunswick</option>
                    <option value="NL">Newfoundland and Labrador</option>
                    <option value="NS">Nova Scotia</option>
                    <option value="NT">Northwest Territories</option>
                    <option value="NU">Nunavut</option>
                    <option value="ON">Ontario</option>
                    <option value="PE">Prince Edward Island</option>
                    <option value="QC">Quebec</option>
                    <option value="SK">Saskatchewan</option>
                    <option value="YT">Yukon Territory</option>
                    </select></div>
                    <div><label htmlFor="comments">Comments</label><input className="form-control" name="comments" type="text" value="" /></div>

                    <div><input className="btn btn-info btn-lg btn-block" type="submit" value="Submit" /></div>
                </form>
                    </div>
                </div>  
                </div>
                <footer>
                <div className="container">© 2021 Aalim aslam. All rights reserved.</div>

                </footer>
        </>
    )
}
