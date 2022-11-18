import {GoogleLogin,GoogleLogout} from "react-google-login";
import React,{useEffect} from "react";
import { gapi } from 'gapi-script';

const clientID = "1058601962901-jlr2e9kts5dt2v00iefjladio796n7e3.apps.googleusercontent.com"

const Navbar=()=>{
  var Login = false
  const onSuccess=(res)=>{
    console.log("Login Success! Current Account :", res.profileObj)
    Login = true
  }

  const onFailure=(res)=>{
      console.log("Login Failed! Res :", res)
  } 

  const onSuccessLogout=()=>{
    console.log("Logout Account Success")
}

  useEffect( () =>{
    function start(){
      gapi.client.init({
        clientID: clientID,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  } )

    return(
        <div className="container px-2" style={{zIndex:3000}}>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <a className="navbar-brand" href="/" style={{paddingLeft: "50px"}}><img src="assets/logo.png" className="img-responsive" alt="logo"/></a>
              <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BCR</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-1">
                    <li className="nav-item px-3 py-2">
                      <a className="nav-link" href="#Service">Our Services</a>
                    </li>
                    <li className="nav-item px-3 py-2">
                        <a className="nav-link" href="#whyUS">Why Us</a>
                    </li>
                    <li className="nav-item px-3 py-2">
                        <a className="nav-link" href="#testimonial">Testimonial</a>
                    </li>
                    <li className="nav-item px-3 py-2">
                        <a className="nav-link" href="#FAQ">FAQ</a>
                    </li>
                    <li className="nav-item px-3 py-2">
                        {/* <a className="nav-link active mx-auto" aria-current="page" href="/">Register</a> */}
                        {Login ? <GoogleLogout
                          clientId= {clientID}
                          buttonText={"Logout"}
                          onLogoutSuccess={onSuccessLogout}
                      />:<GoogleLogin
                          clientId={clientID}
                          buttonText="Login"
                          onSuccess={onSuccess}
                          onFailure={onFailure}
                          cookiePolicy="single_host_origin"
                        />}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            </div>
    )
}

export default Navbar;