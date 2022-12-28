import React, { useEffect, useState } from "react";
import "./Hasil-Cari.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HasilCari = (props) => {
  const [hasilCars, setHasilCars] = useState([]);

  useEffect(() => {
    console.log(props);
    console.log("hit api");

    const getCars = async () => {
      const res = await axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car", {
        headers: {
          access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
        },
        params: {
          name: props.carName,
          category: props.carCategory,
          // minPrice: (() => {
          //   if (props.carPrice === "murah") {
          //     return 0;
          //   }
          //   if (props.carPrice === "sedang") {
          //     return 400000;
          //   }
          //   if (props.carPrice === "mahal") {
          //     return 600000;
          //   }
          // })(),
          // maxPrice: (() => {
          //   if (props.carPrice === "murah") {
          //     return 400000;
          //   }
          //   if (props.carPrice === "sedang") {
          //     return 600000;
          //   }
          // })(),
          // isRented: props.carStatus,
        },
      });

      const cars = res.data.cars;

      setHasilCars(cars);

      console.log("hasil cari mobil === " + props.carName);
      console.log(cars);
    };

    getCars();
  }, []);

  let navigate = useNavigate();
  const handleNavigateToCariMobil = (id) => {
    navigate(`/DetailMobil/${id}`);
  };
  return (
    <>
      <div class="Background"></div>
      <div id="Search-Bar">
        <div class="Search container-fluid p-0">
          <div class="row g-0 align-items-center justify-content-center flex-column flex-md-row">
            <div class="col-md-11 row g-0 align-items-center justify-content-center flex-column flex-md-row border rounded p-2 Search-Wrapped">
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="cars">Nama Mobil</label>
                <input type="text" name="" id="" />
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="Kategori">Choose a car:</label>
                <select name="Kapasitas" id="Kapasitas " class="border rounded">
                  <option value="Kapasitas-1">2-4 Orang</option>
                  <option value="Kapasitas-2">4-6 Orang</option>
                  <option value="Kapasitas-3">6-8 Orang</option>
                </select>
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="Harga">Choose a car:</label>
                <select name="Harga" id="Harga" class="border rounded">
                  <option value="Rp.1">&#60;Rp. 400.000</option>
                  <option value="Rp.2">Rp. 400.000 - Rp. 600.000</option>
                  <option value="Rp.3">&#62;Rp. 600.000</option>
                </select>
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="Status">Choose a car:</label>
                <select name="Status" id="Status" class="border rounded">
                  <option value="sudah">Disewa</option>
                  <option value="belum">Belum Disewa</option>
                </select>
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <button class="CariMobil" type="button">
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Hasil container-fluid">
        <div class="row g-2 flex-column flex-md-row justify-content-evenly align-items-stretch mt-2">
          {hasilCars.map((car) => {
            return (
              <div class="HasilItems col-12 col-md-2 p-3 border rounded-3 ">
                <img src={car.image} />
                <div>{car.name}</div>
                <div>Rp {car.price} / hari</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                <div class="ButtonPilihMobil">
                  <button onClick={() => handleNavigateToCariMobil(car.id)} class="PilihMobil" type="button">
                    Pilih Mobil
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HasilCari;
