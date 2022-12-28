import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeSection from "./component/Home-Section";
import CariMobil from "./component/Cari-Mobil";
import HasilCari from "./component/Hasil-Cari";
import DetailMobil from "./component/Detail-Mobil";
import { useState } from "react";

function App() {
  const [carName, setCarName] = useState("");
  const [carCategory, setCarCategory] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carStatus, setCarStatus] = useState("");

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route
          path="/CariMobil"
          element={<CariMobil carName={carName} carCategory={carCategory} carPrice={carPrice} carStatus={carStatus} setCarName={setCarName} setCarCategory={setCarCategory} setCarPrice={setCarPrice} setCarStatus={setCarStatus} />}
        />
        <Route path="/HasilCari" element={<HasilCari carName={carName} carCategory={carCategory} carPrice={carPrice} carStatus={carStatus} />} />
        <Route path="/DetailMobil/:carId" element={<DetailMobil />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
