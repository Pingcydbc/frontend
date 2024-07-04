import Head from 'next/head';


export default function Home() {
  return (
    <div>

      <div className="container-fulid">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/slide1.png" className="d-block w-100 h-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="/img/slide2.png" className="d-block w-100 h-100" alt="Slide 2" />
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
      <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img src="/img/card1.png" className="card-img-top" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text"> วันเสาร์ที่ 4 ต.ค. 2563 แผนกวิชาเทคโนโลยีสารสนเทศประชุมผู้ปกครอง ระดับ ปวส. ชั้นปีที่ 1 ปีการศึกษา 2563
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/img/card2.png" className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">วันเสาร์ที่ 3 ต.ค. 2563 แผนกวิชาเทคโนโลยีสารสนเทศประชุมผู้ปกครอง ระดับ ปวช. ชั้นปีที่ 1 ปีการศึกษา 2563</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/img/card3.png" className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">สาขาวิชาเทคโนโลยีสารสนเทศ ประถมนิเทศการออกฝึกประสบการณ์นักศึกษา ประจำปีการศึกษา 2563</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
    </div>  
    </div> 
    
  );
}
