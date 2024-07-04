import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
        <div className="d-lg-flex flex-row bg-light rounded-3 mx-2 p-3 my-3" data-aos="zoom-in-left" style={{border:"none"}}>
            <div className="col">
                <h1 className="text-start fs-3 fw-bold">Chayodom Contact</h1>
                <ul>
                    <li className="text-start"><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                    <li className="text-start"><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                    <li className="text-start"><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                    <li className="text-start"><a href="#"><i className="fab fa-github"></i> GitHub</a></li>
                    <li className="text-start"><a href="#"><i className=""></i> Vercel</a></li>
                    <li className="text-start"><a href="#"><i className=""></i> GoDaddy</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
