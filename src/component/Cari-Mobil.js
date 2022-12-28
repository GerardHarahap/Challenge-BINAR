import React, { useState } from "react";
import "./Cari-Mobil.css";
import MobilPng from "./Component/Mobil.png";
import { useNavigate } from "react-router-dom";

const CariMobil = (props) => {
  let navigate = useNavigate();
  const handleNavigateToHasilCari = () => {
    navigate("/HasilCari");
  };
  return (
    <>
      <div id="Hero">
        <div class="Header container-fluid p-0">
          <div class="row g-0 align-items-center justify-content-center flex-column flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5 Explanation">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </div>

            <div class="col-md-6">
              <img class="LogoMobil img-fluid" src={MobilPng} />
            </div>
          </div>
        </div>
      </div>

      <div id="Search-Bar">
        <div class="Search container-fluid p-0">
          <div class="row g-0 align-items-center justify-content-center flex-column flex-md-row">
            <div class="col-md-11 row g-0 align-items-center justify-content-center flex-column flex-md-row border rounded p-2 Search-Wrapped">
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="cars">Nama Mobil</label>
                <input type="text" placeholder="Nama mobil..." value={props.carName} onChange={(e) => props.setCarName(e.target.value)} name="" id="" />
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="Kategori">Kategori</label>
                <select
                  name="Kapasitas"
                  id="Kapasitas"
                  value={props.carCategory}
                  onChange={(e) => {
                    props.setCarCategory(e.target.value);
                  }}
                  class="border rounded"
                >
                  <option value="small">2-4 Orang</option>
                  <option value="medium">4-6 Orang</option>
                  <option value="large">6-8 Orang</option>
                </select>
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="Harga">Harga</label>
                <select
                  name="Harga"
                  id="Harga"
                  value={props.carPrice}
                  onChange={(e) => {
                    props.setCarPrice(e.target.value);
                  }}
                  class="border rounded"
                >
                  <option value="murah">&#60; Rp. 400.000</option>
                  <option value="sedang">Rp. 400.000 - Rp. 600.000</option>
                  <option value="mahal">&#62; Rp. 600.000</option>
                </select>
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="Status">Status</label>
                <select
                  name="Status"
                  id="Status"
                  value={props.carStatus}
                  onChange={(e) => {
                    props.setCarStatus(e.target.value);
                  }}
                  class="border rounded"
                >
                  <option value={true}>Disewa</option>
                  <option value={false}>Belum Disewa</option>
                </select>
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <button onClick={handleNavigateToHasilCari} class="MulaiSewa" type="button">
                  Mulai Sewa Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CariMobil;
