// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer class="py-5" id="footer">
          <div class="row">
            <div class="col-4 px-5">
              <h5>About</h5>
              <p class="fw-light ">วิทยาลัยเทคนิคเชียงใหม่ <br></br>เลขที่ 9 ถ.เวียงแก้ว ต.ศรีภูมิ อ.เมืองเชียงใหม่จ.เชียงใหม่ 50200 <br></br>โทร. 053-217-708-9<br></br>นักศึกษาแผนกสารสนเทศ สาขาวิชานักพัฒนาซอฟต์แวร์</p>
            </div>
      
            <div class="col-2">
              <h5>Partner</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="https://www.facebook.com/JmcComputer/" class="nav-link p-0 text-muted">JMC Computer</a></li>
                <li class="nav-item mb-2"><a href="https://www.goodspeedcomputer.com" class="nav-link p-0 text-muted">Goodspeed</a></li>
                <li class="nav-item mb-2"><a href="https://www.facebook.com/ChiangmaiCDR/?locale=th_TH" class="nav-link p-0 text-muted">Chiangmai CDR</a></li>
                <li class="nav-item mb-2"><a href="https://www.facebook.com/pssupply.cnx" class="nav-link p-0 text-muted">PS Supply</a></li>
                <li class="nav-item mb-2"><a href="https://www.facebook.com/p/AK-Computer-100083038396856/?paipv=0&eav=AfYSZax2GXPyiygytk5d5V1Ayvn9lrWhYJUzT7BIe_gM-IW1q1BEidUqD7UGGRN-kM8&_rdr" class="nav-link p-0 text-muted">A.K. Computer</a></li>
              </ul>
            </div>
      
            <div class="col-2">
                <h5>Shotcut</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Home</a></li>
                  <li class="nav-item mb-2"><a href="/Service" class="nav-link p-0 text-muted">Service</a></li>
                  <li class="nav-item mb-2"><a href="/About" class="nav-link p-0 text-muted">About</a></li>
                  <li class="nav-item mb-2"><a href="/Contact" class="nav-link p-0 text-muted">Contact</a></li>
                </ul>
              </div>
      
            <div class="col-4">
              <form>
                <h5 class="text-uppercase">contact</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="https://www.facebook.com" class="nav-link p-0 text-muted">Facebook</a></li>
                  <li class="nav-item mb-2"><a href="https://www.instagram.com" class="nav-link p-0 text-muted">Instagram</a></li>
                  <li class="nav-item mb-2"><a href="https://github.com" class="nav-link p-0 text-muted">Github</a></li>
                  <li class="nav-item mb-2"><a href="https://vercel.com" class="nav-link p-0 text-muted">vercel</a></li>
                </ul>
              </form>
            </div>
          </div>
      
          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top border-dark border-3 px-5">
            <p>© 2024 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
  );
};

export default Footer;
