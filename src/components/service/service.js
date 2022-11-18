

import React from "react";

const Service =()=>{
    return(
        <>
        <div className="kedua" id="Service">
            <div className="row">
                <div className="col-lg-6 myservice">
                    <img className="mx-auto d-block" src="assets/img_service.png" alt="service"/>
                </div>
                <div className="col-lg-6">
                    <div className="box">
                        <h1 style={{fontWeight: "bold"}}>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                        <br/>
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <div className="list-check">
                            <img src="assets/Group_53.png" alt="check" style={{float: "left",marginRight: "20px"}}/>
                            <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        </div>
                        <div className="list-check">
                            <img src="assets/Group_53.png" alt="check" style={{float: "left",marginRight: "20px"}}/>
                            <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        </div>
                        <div className="list-check">
                            <img src="assets/Group_53.png" alt="check" style={{float: "left",marginRight: "20px"}}/>
                            <p>Sewa Mobil Jangka Panjang Bulanan</p>
                        </div>
                        <div className="list-check">
                            <img src="assets/Group_53.png" alt="check" style={{float: "left",marginRight: "20px"}}/>
                            <p>Gratis Antar - Jemput Mobil di Bandara</p>
                        </div>
                        <div className="list-check">
                            <img src="assets/Group_53.png" alt="check" style={{float: "left",marginRight: "20px"}}/>
                            <p>Layanan Airport Transfer / Drop In Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ketiga" id="whyUS">
            <h1>Why US?</h1>
            <br/>
            <p className="why">Mengapa harus pilih Binar Car Rental?</p>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card my-3" style={{width:"1fr"}}>
                        <div className="card-body">
                            <img src="assets/icon_complete.png" width="30" alt="" style={{marginBottom: "20px"}}/>
                            <h5 className="card-title">Mobil Lengkap</h5>
                            <p className="card-text">Tersedia banyak pilihan mobil kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card my-3" style={{width:"1fr"}}>
                        <div className="card-body">
                            <img src="assets/icon_price.png" width="30" alt="" style={{marginBottom: "20px"}}/>
                            <h5 className="card-title">Harga Murah</h5>
                            <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card my-3" style={{width:"1fr"}}>
                        <div className="card-body">
                            <img src="assets/icon_24hrs.png" width="30" alt="" style={{marginBottom: "20px"}}/>
                            <h5 className="card-title">Layanan 24 jam</h5>
                            <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card my-3" style={{width:"1fr"}}>
                        <div className="card-body">
                            <img src="assets/icon_professional.png" width="30" alt="" style={{marginBottom: "20px"}}/>
                            <h5 className="card-title">Sopir Profesional</h5>
                            <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="keempat" id="testimonial">
            <h2>Testimonial</h2>
            <br/>
            <p>Berbagai review positif dari para pelanggan kami</p>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div id="carouselExampleControls" className="carousel slide mx-auto" style={{maxWidth: "80%"}} data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{backgroundColor:"aliceblue !important", color:"black",textAlign:"left"}}>
                            <div className="row mx-4 my-5">
                                <div className="col-xl-2 m-auto">
                                    <img src="assets/photo1-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                                </div>
                                <div className="col-xl-10">
                                    <div className="carousel-img">
                                        <img src="assets/Rate.png" className="testimonial-rating" alt="Rating"/>
                                    </div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p className="testimonial-name">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{backgroundColor:"aliceblue !important", color:"black",textAlign:"left"}}>
                            <div className="row mx-4 my-5">
                                <div className="col-xl-2 m-auto">
                                    <img src="assets/photo2-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                                </div>
                                <div className="col-xl-10">
                                    <div className="carousel-img">
                                        <img src="assets/Rate.png" className="testimonial-rating" alt="Rating"/>
                                    </div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                    <p className="testimonial-name">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item bg-aliceblue" style={{backgroundColor:"aliceblue !important", color:"black",textAlign:"left"}}>
                            <div className="row mx-4 my-5">
                                <div className="col-xl-2 m-auto">
                                    <img src="assets/photo1-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                                </div>
                                <div className="col-xl-10">
                                    <div className="carousel-img">
                                        <img src="assets/Rate.png" className="testimonial-rating" alt="Rating"/>
                                    </div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                    <p className="testimonial-name">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" className="testimonial-media">&#8249;</a>
                        <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" className="testimonial-media">&#8250;</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="kelima">
            <div className="card">
                <div className="card-body">
                    <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua. </p>
                    <br/>
                    <button type="button" className="btn btn-success" style={{fontWeight: "bold"}}>Mulai Sewa Mobil</button>
                </div>
            </div>
        </div>
        <div className="keenam" id="FAQ">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <h3>Frequently Asked Question</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="accordion" id="accordionSection">
                        <div className="accordion-item mb-3" style={{border: "1px solid #d4d4d4", borderRadius:"4px"}}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            Apa saja syarat yang dibutuhkan?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionSection">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first items accordion body.</div>
                        </div>
                        </div>
                        <div className="accordion-item mb-3"  style={{border: "1px solid #d4d4d4", borderRadius:"4px"}}>
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                Berapa hari minimal sewa mobil lepas kunci?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionSection">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first items accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3" style={{border: "1px solid #d4d4d4", borderRadius:"4px"}}>
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionSection">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first items accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3" style={{border: "1px solid #d4d4d4", borderRadius:"4px"}}>
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                Apakah Ada biaya antar-jemput?
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionSection">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first items accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3" style={{border: "1px solid #d4d4d4", borderRadius:"4px"}}>
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                Bagaimana jika terjadi kecelakaan?
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionSection">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first items accordion body.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Service;