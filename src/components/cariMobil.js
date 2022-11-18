import React from "react";
import Navbar from "./navbar/navbar";
import Footer from"./footer/footer";
import CariMobil from "./SearchCar/cariMobil";

const SearchCar=()=>{
    return(
        <>
        <div className="atas"style={{zIndex: 3000}}>
            <Navbar/>
            <div className="row" style={{marginTop: "50px"}}>
                <br/>
                <div className="col-lg-6 col-sm-12 col-xs-12 my-3" style={{padding: "70px"}}>
                    <h1>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <br/>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <div className="col-lg-6 col-sm-12 col-xs-12 my-1" style={{textAlign: "right", marginBottom: "0 !important"}}>
                    <img className="img-car" src="assets/img_car.png" alt="mobil"/>
                </div>
            </div>
        </div>
        <CariMobil/>
        <Footer/>
        
        </>
    )
}

export default SearchCar