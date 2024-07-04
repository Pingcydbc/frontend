import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
        <div class="d-lg-flex flex-row bg-light rounded-3 mx-2 p-3 my-3" data-aos="zoom-in-left">
            <div class="col">
                <h1 class="text-start fs-2 ">Chayodom Service</h1>
                <ul>
                    <li class="text-start"><a>รับซ่อม PC Nootbook</a></li>
                    <li class="text-start"><a>รับลงโปรแกรม Windows office Adobe</a></li>
                    <li class="text-start" id="software"><a>ขายอุปกรณ์ต่างๆ PC Nootbook Ssd HDD Ram CPU CasePC Monitor</a></li>
                </ul>
            </div>
            <div class="col" >
                <img src="/img/fix1.jpg" class="img-thumbnail border-0 rounded-5" alt="..."></img>
            </div>
        </div>
    </div>
  );
}
