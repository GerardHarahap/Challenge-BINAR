import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail-Mobil.css";

const DetailMobil = () => {
  const [carInfo, setCarInfo] = useState({});
  const params = useParams();

  useEffect(() => {
    const getCarInfo = async () => {
      const res = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${params.carId}`, {
        headers: {
          access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
        },
      });

      const carInfo = res.data;

      setCarInfo(carInfo);
    };

    getCarInfo();
  }, []);

  return (
    <div>
      <div class="Background"></div>
      <div id="Search-Bar">
        <div class="Search container-fluid p-0">
          <div class="row g-0 align-items-center justify-content-center flex-column flex-md-row">
            <div class="col-md-11 row g-0 align-items-center justify-content-center flex-column flex-md-row border rounded p-2 Search-Wrapped">
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="cars">Nama Mobil</label>
                <input type="text" name="" id="" class="items" disabled />
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="Kategori">Choose a car:</label>
                <select name="Kapasitas" id="Kapasitas " class="items border rounded" disabled>
                  <option value="Kapasitas-1">2-4 Orang</option>
                  <option value="Kapasitas-2">4-6 Orang</option>
                  <option value="Kapasitas-3">6-8 Orang</option>
                </select>
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="Harga">Choose a car:</label>
                <select name="Harga" id="Harga" class="items border rounded" disabled>
                  <option value="Rp.1">&#60;Rp. 400.000</option>
                  <option value="Rp.2">Rp. 400.000 - Rp. 600.000</option>
                  <option value="Rp.3">&#62;Rp. 600.000</option>
                </select>
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <label for="Status">Choose a car:</label>
                <select name="Status" id="Status" class="items border rounded" disabled>
                  <option value="sudah">Disewa</option>
                  <option value="belum">Belum Disewa</option>
                </select>
              </div>
              <div class="col-md-2 row g-0 align-items-center justify-content-center flex-column p-2">
                <button class="CariMobil" type="button" disabled>
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Content container-fluid p-4">
        <div class="row row justify-content-evenly row align-items-start flex-column flex-md-row">
          <div class="col-6 p-3 border rounded">
            <h2>Tentang Paket</h2>
            <h2>Include</h2>
            <ul>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <h2>Exclude</h2>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <h2>Refund, Reschedule, Overtime</h2>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>

          <div class="col-3 p-3 border rounded">
            <img src={carInfo.image} />
            <p>{carInfo.name}</p>
            <p class="kategori">
              {carInfo.category === "small" && "2-4 orang"}
              {carInfo.category === "medium" && "4-6 orang"}
              {carInfo.category === "large" && "6-8 orang"}
            </p>
            <p>{carInfo.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMobil;
