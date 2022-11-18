import React from "react";
import Footer from "./footer/footer";
import LandingPage from "./landingPage/landingPage";
import Navbar from "./navbar/navbar";
import Service from "./service/service"

const Home =() =>{
    return (
        <>
        <div className="atas">
        <Navbar/>
        <LandingPage/>
        </div>
        <Service/>
        <Footer/>
        </>
    )
}

export default Home