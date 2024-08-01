import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/slide1.png" className="d-block w-100 " alt="Slide 1" />
            </div>
            {/* <div className="carousel-item">
              <img src="/img/slide2.png" className="d-block w-100 " alt="Slide 2" />
            </div> */}
            <div className="carousel-item">
              <img src="/img/slide3.png" className="d-block w-100 " alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="/img/slide4.png" className="d-block w-100 " alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row d-flex align-items-stretch">
          <div className="col-md-4 mb-4 d-flex">
            <div className="card flex-fill">
              <img src="/img/card1.jpg" className="card-img-top fixed-img" alt="Card 1" />
              <div className="card-body d-flex flex-column">
                <p className="card-text flex-grow-1">
                ASUS ZenBoook 14 OLED UM3420YA-KM537WS <br />
                    AMD RYZEN 5 7530U (2.0 up to 4.5 GHz)<br />
                    DDR4-RAM 16 GB,SSD M.2 NVMe 512 GB<br />
                    AMD Radeon RX VEGA 7<br />
                    OLED ขนาด 14.0“ ปรับ 2880*1800(2.8K)<br />
                    Windows 11 Home 64 bit แท้ อัพเดทได้<br />
                    - งานกราฟฟิก ตัดคลิป แต่งรูปสบาย เล่นเกมไม่หนักไปไหว<br />
                    - สภาพสวย พับแล้วบาง นน.เบาพกพาสะดวกครับ<br />
                    - มีประกัน JIB ถึงเดือน 06/2026 <br />
                    - ราคา 19,900 บาท<br />
                </p>
                {/* <a href="#" className="btn btn-primary mt-auto">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="card flex-fill">
              <img src="/img/card2.jpg" className="card-img-top fixed-img" alt="Card 2" />
              <div className="card-body d-flex flex-column">
                <p className="card-text flex-grow-1">
                  GeForce RTX2060 12 GB(GDDR6)/192 bit “PNY”
                  <br />
                  - ต้องต่อไฟ 8 Pin จาก PSU เพิ่ม (แนะนำ 600W Full ขึ้นไปครับ)
                  <br />
                  - มีประกันศูนย์ถึง 03/2025
                  <br />
                  - ราคา 5,990 บาท
                </p>
                {/* <a href="#" className="btn btn-primary mt-auto">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="card flex-fill">
              <img src="/img/card3.jpg" className="card-img-top fixed-img" alt="Card 3" />
              <div className="card-body d-flex flex-column">
                <p className="card-text flex-grow-1">
                งานประกอบใหม่ บ่ายนี้ … น้องส่งสเปคพร้อมงบมาให้<br />
“ ขอบคุณ มากๆครับ ”<br />
Intel CORE i5-13500 (2.5 up to 4.8 GHz)<br />
Mainboard GIGABYTE H610M K DDR4<br />
DDR4-RAM 32 GB(16G*2)/3200 ADATA XPG<br />
SSD M.2 NVMe PCIe Gen4 500 GB ADATA<br />
GeForce RTX 4060 8 GB(GDDR6) GIGABYTE EAGLE <br />
Powersupply CoolerMaster ELITE NEX 700W 80+<br />
Case Tsunami COOLMAN 190-4 KK ABLAZE<br />
- เน้นเล่นเกมส์ CS2 เป็นหลัก และเกมอื่นในสตรีมครับ<br />
- ของใหม่รับประกัน 3 ปี ยกเว้น Case ประกัน 1 ปี<br />
- ราคา 29,000 บาท
                </p>
                {/* <a href="#" className="btn btn-primary mt-auto">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
