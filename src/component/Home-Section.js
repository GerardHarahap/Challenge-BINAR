import React from "react";
import "./Home-Section.css";
import MobilPng from "./Component/Mobil.png";
import ImgService from "./Component/img_service.png";
import CheckServices from "./Component/CheckServices.png";
import Complete from "./Component/icon_complete.png";
import Price from "./Component/icon_price.png";
import Hours from "./Component/icon_24hrs.png";
import Professional from "./Component/icon_professional.png";
import FirstCarousel from "./Component/img_photo 1.png";
import SecondCarousel from "./Component/img_photo 2.png";
import ThirdCarousel from "./Component/img_photo 3.png";
import PrevButton from "./Component/Left button.png";
import NextButton from "./Component/Right button.png";
import { useNavigate } from "react-router-dom";
import Rate from "./Component/Rate.png";

const HomeSection = () => {
  let navigate = useNavigate();
  const handleNavigateToCariMobil = () => {
    navigate("/CariMobil");
  };
  return (
    <>
      {/* Hero Section */}
      <div id="Hero">
        <div class="Header container-fluid p-0">
          <div class="row g-0 align-items-center justify-content-center flex-column flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5 Explanation">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <button onClick={handleNavigateToCariMobil} class="MulaiSewa" type="button">
                Mulai Sewa Mobil
              </button>
            </div>

            <div class="col-md-6">
              <img class="LogoMobil img-fluid" src={MobilPng} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* End of Hero  */}
      {/* our services Section */}
      <div id="OurServices">
        <div class="OurServices container-fluid p-0">
          <div class="ImgServices row g-0 align-items-center justify-content-center flex-column flex-md-row">
            <div class="col-md-6 p-5">
              <img class="ServicesImg img-fluid" src={ImgService} alt="" />
            </div>
            <div class="DescServices col-md-6 p-5 mt-lg-5 d-flex flex-column">
              <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
              <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
              <ul>
                <li>
                  <img src={CheckServices} alt="" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                </li>
                <li>
                  <img src={CheckServices} alt="" /> Sewa Mobil Lepas Kunci di Bali 24 Jam
                </li>
                <li>
                  <img src={CheckServices} alt="" /> Sewa Mobil Jangka Panjang Bulanan
                </li>
                <li>
                  <img src={CheckServices} alt="" /> Gratis Antar - Jemput Mobil di Bandara
                </li>
                <li>
                  <img src={CheckServices} alt="" /> Layanan Airport Transfer / Drop In Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* // End of Our Serivces  */}
      {/* // Why Us */}

      <div class="WhyUs container-fluid" id="WhyUs">
        <div class="text-center mx-auto text-md-start mx-md-5">
          <h1 class="">Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div class="row g-2 justify-content-evenly flex-column flex-md-row align-items-stretch">
          <div class="WhyUsItems col-10 col-md-2 p-3 border rounded-3 mx-auto mx-md-0">
            <div>
              <img src={Complete} alt="" />
            </div>
            <h1>Mobil Lengkap</h1>
            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
          </div>
          <div class="WhyUsItems col-10 col-md-2 p-3 border rounded-3 mx-auto mx-md-0">
            <div>
              <img src={Price} alt="" />
            </div>
            <h1>Harga Murah</h1>
            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
          </div>
          <div class="WhyUsItems col-10 col-md-2 p-3 border rounded-3 mx-auto mx-md-0">
            <div>
              <img src={Hours} alt="" />
            </div>
            <h1>Layanan 24 Jam</h1>
            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
          </div>
          <div class="WhyUsItems col-10 col-md-2 p-3 border rounded-3 mx-auto mx-md-0">
            <div>
              <img src={Professional} alt="" />
            </div>
            <h1>Sopir Profesional</h1>
            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
          </div>
        </div>
      </div>
      {/* // End of Why us  */}
      {/* // Testimonial Section */}
      <div class="Testi text-center p-3 mt-3 " id="Testi">
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div id="carouselExampleControls" class="carousel container-fluid" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active row align-items-stretch flex-column flex-md-row">
            <div class="card col-md-10 flex-column flex-md-row align-items-center justify-content-center">
              <div class="img-wrapper col-md-5 p-2">
                <img src={FirstCarousel} class="d-block w-100" alt="..." />
              </div>
              <div class="card-body">
                <img src={Rate} alt="" />
                <h5 class="card-title">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </h5>
                <p class="card-text">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          <div class="carousel-item row align-items-stretch flex-column flex-md-row">
            <div class="card col-md-10 flex-column flex-md-row align-items-center justify-content-center">
              <div class="img-wrapper col-md-5 p-2">
                <img src={SecondCarousel} class="d-block w-100" alt="..." />
              </div>
              <div class="card-body">
                <img src={Rate} alt="" />
                <h5 class="card-title">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </h5>
                <p class="card-text">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          <div class="carousel-item row align-items-stretch flex-column flex-md-row">
            <div class="card col-md-10 flex-column flex-md-row align-items-center justify-content-center">
              <div class="img-wrapper col-md-5 p-2">
                <img src={ThirdCarousel} class="d-block w-100" alt="..." />
              </div>
              <div class="card-body">
                <img src={Rate} alt="" />
                <h5 class="card-title">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </h5>
                <p class="card-text">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center text-center position-relative">
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="" aria-hidden="true">
            <img src={PrevButton} alt="" />
          </span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="" aria-hidden="true">
            <img src={NextButton} alt="" />
          </span>
          <span class="visually-hidden"></span>
        </button>
      </div>
      {/* // End of Testimoni  */}
      {/* // CTA Section */}
      <div id="CTA">
        <div class="CTA container p-0 rounded-3 col-11 col-md-9">
          <div class="row g-0 align-items-center justify-content-center flex-column">
            <div class="col-md-10 p-5 text-center align-items-center justify-content-center">
              <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button onClick={handleNavigateToCariMobil} class="ButtonCTA" type="button">
                Mulai Sewa Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // End of CTA  */}
      {/* // Accordion Section */}
      <div id="Accordion">
        <div class="Accordion container rounded-3 p-2 mt-3">
          <div class="row g-0 justify-content-center flex-column flex-md-row">
            <div class="col-md-6 text-xs-center text-md-start">
              <h2 class>Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div class="accordion accordion-flush col-md-6" id="accordionFlushExample">
              <div class="accordion-item border rounded">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi temporibus, cum enim natus ad!</div>
                </div>
              </div>
              <div class="accordion-item mt-3 border rounded">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi officia! Qui ipsa est odio.</div>
                </div>
              </div>
              <div class="accordion-item mt-3 border rounded">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vel, numquam pariatur autem assumenda suscipit?</div>
                </div>
              </div>
              <div class="accordion-item mt-3 border rounded">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veniam rerum saepe corporis facilis laborum.</div>
                </div>
              </div>
              <div class="accordion-item mt-3 border rounded">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis obcaecati possimus quae repudiandae nemo?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // End of accordion */}
    </>
  );
};

export default HomeSection;
