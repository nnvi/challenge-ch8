import React from "react";

const Footer =()=>{
    return(
        <footer>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                    <ul>
                        <li>
                            <a href="#Service">Our Service</a>
                        </li>
                        <li>
                            <a href="#whyUS">Why Us</a>
                        </li>
                        <li>
                            <a href="#testimonial">Testimonial</a>
                        </li>
                        <li>
                            <a href="#FAQ">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                    <p>Contact Us</p>
                    <div className="row-lg-12">
                        <img src="assets/icon_facebook.png" alt="facebook"/>
                        <img src="assets/icon_instagram.png" alt="instagram"/>
                        <img src="assets/icon_twitter.png" alt="Twitter"/>
                        <img src="assets/icon_mail.png" alt="mal"/>
                        <img src="assets/icon_twitch.png" alt="Twitch"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                    <p>Copyright Binar 2022</p>
                    <img src="assets/logo.png" alt="logo"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;