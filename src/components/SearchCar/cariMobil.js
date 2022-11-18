import React, { useState } from "react";

const CariMobil =()=>{
  const [driver, setDriver] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [capacity, setCapacity] = useState("")
  const datetime = date+"T"+time

  console.log(driver, datetime,capacity)
  
   const test =()=>{
    
    class App {
        constructor() {
          this.clearButton = document.getElementById("clear-btn");
          this.loadButton = document.getElementById("load-btn");
          this.carContainerElement = document.getElementById("cars-container");
          this.penumpang = document.getElementById("penumpang");
          this.tgl = document.getElementById("date");
          this.jam = document.getElementById("time");
          this.driver= document.getElementById("driver");
        }
      
        async init() {
          await this.load();
      
          // Register click listener
          this.clearButton.onclick = this.clear;
          this.loadButton.onclick = this.run;
        }
      
        run = () => {
          Car.list.forEach((car) => {
            let datetime = this.tgl.value +"T"+this.jam.value
            let formDate = Date.parse(datetime)
            let waktu = Date.parse(car.availableAt)
            let kapasitas = this.penumpang.value
            let driver = this.driver.value
            if (driver ==="true"){
              driver = true
            }else{
              driver = false
            }
            if(car.available === driver && car.capacity >=kapasitas && waktu>=formDate){
              const node = document.createElement("div");
              node.innerHTML = car.render();
              this.carContainerElement.appendChild(node);
            }
            
          });
        };
      
        async load() {
          const cars = await Binar.listCars();
          Car.init(cars);
        }
      
        clear = () => {
          let child = this.carContainerElement.firstElementChild;
      
          while (child) {
            child.remove();
            child = this.carContainerElement.firstElementChild;
          }
        };
      }
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    class Binar {
      static populateCars = (cars) => {
        return cars.map((car) => {
          const isPositive = getRandomInt(0, 1) === 1;
          const timeAt = new Date();
          const mutator = getRandomInt(1000000, 100000000);
          const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
    
          return {
            ...car,
            availableAt,
          };
        })
      }
    
      static async listCars(filterer) {
        let cars;
        let cachedCarsString = localStorage.getItem("CARS");
    
        if (cachedCarsString) {
          const cacheCars = JSON.parse(cachedCarsString);
          cars = this.populateCars(cacheCars);
        } else {
          const response = await fetch(
            "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
          );
          const body = await response.json();
          cars = this.populateCars(body)
    
          localStorage.setItem("CARS", JSON.stringify(cars));
        }
    
        if (filterer instanceof Function) return cars.filter(filterer);
    
        return cars;
      }
    }
    class Car {
        static list = [];
      
        static init(cars) {
          this.list = cars.map((i) => new this(i));
        }
      
        constructor({
          id,
          plate,
          manufacture,
          model,
          image,
          rentPerDay,
          capacity,
          description,
          transmission,
          available,
          type,
          year,
          options,
          specs,
          availableAt,
        }) {
          this.id = id;
          this.plate = plate;
          this.manufacture = manufacture;
          this.model = model;
          this.image = image;
          this.rentPerDay = rentPerDay;
          this.capacity = capacity;
          this.description = description;
          this.transmission = transmission;
          this.available = available;
          this.type = type;
          this.year = year;
          this.options = options;
          this.specs = specs;
          this.availableAt = availableAt;
        }
      
        render() {
          let data = `
          <div class="col-lg-4 col-md-4 col-sm-12 m-2">
            <div class="card" style="width: 18.8rem;">
                <img src="${this.image}" class="card-img-top img-fluid" alt="${this.manufacture}" style="height: 190px; object-fit: cover" />
                <div class="card-body">
                    <p class="card-title" style="font-family: 'Helvetica'; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; height: 20px;">${this.manufacture} ${this.model}</p>
                    <p class="fw-bold" style="font-family: 'Helvetica'; font-style: normal; font-weight: 700; font-size: 16px; line-height: 24px; height: 24px;">Rp ${this.rentPerDay} / hari</p>
                    <p class="card-text" style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px; height: 60px; margin-bottom: 29px;">${this.description}</p>
                    <div class="row my-0 py-0">
                      <div class="col-md-1">
                        <img src="./images/fi_users.png" style="width: 25px; height: 25px">
                      </div>
                      <div class="col-md-11">
                        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px; margin-top: 5px;">&nbsp;&nbsp;&nbsp;${this.capacity} Orang</p>
                      </div>
                    </div>
                    <div class="row my-0 py-0">
                      <div class="col-md-1">
                        <img src="./images/fi_settings.png" style="width: 25px; height: 25px">
                      </div>
                      <div class="col-md-11">
                        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px; margin-top: 5px;">&nbsp;&nbsp;&nbsp;${this.transmission}</p>
                      </div>
                    </div>
                    <div class="row my-0 py-0">
                      <div class="col-md-1">
                        <img src="./images/fi_calendar.png" style="width: 25px; height: 25px">
                      </div>
                      <div class="col-md-11">
                        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px; margin-top: 5px;">&nbsp;&nbsp;&nbsp;${this.year}</p>
                      </div>
                    </div>
                    <a href="#" class="btn btn-success text-white w-100 mt-2 fw-bold mt-4" style="font-size: 14px">Pilih Mobil</a>
                </div>
            </div>
          </div>
        `
          return  data;
        }
      }
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      
      // Coba olah data ini hehe :)
      console.log(params);
      
      /*
       * Contoh penggunaan DOM di dalam class
       * */
      const app = new App();
      
      app.init().then(app.run);  
   }    
    return(
        <>
            `<div className="form" style={{margin : "40px"}}>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <p>Tipe Driver</p>
                                <select className="form-select" name="Driver" id="driver" onChange={(e)=> setDriver(e.target.value)}>
                                    <option value="true">Dengan Sopir</option>
                                    <option value="false">Tanpa Sopir (Lepas Konci)</option>
                                </select>
                            </div>
                            <div className="col">
                                <p>Tanggal</p>
                                <input className="form-control" type="date" name="date" id="date" onChange={(e)=> setDate(e.target.value)}/>
                            </div>
                            <div className="col">
                                <p>Waktu</p>
                                <input className="form-control" type="time" name="time" id="time" onChange={(e)=> setTime(e.target.value)}/>
                            </div>
                            <div className="col" style={{zIndex: 2000}}>
                                <p>Jumlah Penumpang (Optional)</p>
                                <input className="form-control" type="text" name="penumpang" id="penumpang" onChange={(e)=> setCapacity(e.target.value)}/>
                            </div>
                            <div className="col" style={{zIndex: 2000}}>
                                <div className="mb-1">
                                    <button id="load-btn" className="btn btn-success" onClick={test} style={{width: "100%"}}>Cari Mobil</button>
                                </div>
                                <div className="mt-1">
                                    <button id="clear-btn" className="btn btn-outline-success" style={{width: "100%"}}>Reset</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{minHeight:"100px"}}>
                <div className="row">
                    <div className="row row-cols-auto justify-content-left" id="cars-container" style={{marginTop: "0", paddingTop: "0"}}></div>
                </div>
            </div>
        </>
    )
}

export default CariMobil