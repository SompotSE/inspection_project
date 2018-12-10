import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={require('../img/home/1.jpg')} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={require('../img/home/2.png')} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={require('../img/home/3.png')} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <section class="shipping bgwhite p-t-20 ">
          <div class="flex-w p-l-15 p-r-15">
            <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
            <img width="20%" src={require('../img/home/T1.png')} alt="title" />
              <h7 class="m-text12 t-center">
                ใส่ใจบริการ
				</h7>

              <span class="s-text11 t-center">
                บริการทุกระดับประทับใจ
				</span>
            </div>

            <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2">
            <img width="20%" src={require('../img/home/T2.png')} alt="title" />
              <h7 class="m-text12 t-center">ช่างมีประสบการณ์</h7>
              <span class="s-text11 t-center">ดูแลโดยผู้เชียวชาญฝีมือดี</span>
            </div>

            <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
            <img width="20%" src={require('../img/home/T3.png')} alt="title" />
              <h7 class="m-text12 t-center">ปฎิบัติตามขั้นตอน</h7>
              <span class="s-text11 t-center"> มีกระบวนการจัดการและดูและที่ถูกต้องเหมาะสม	</span>
            </div>
          </div>

          <div class="sec-title p-b-52 p-l-15 p-r-15">
            <h3 class="m-text5 t-center">
              <br /><hr /><br />
              คณะผู้จัดทำ
			</h3>
          </div>
        </section>
        <section class="instagram p-t-20">
          <div class="flex-w">

            <div class="block4 wrap-pic-w">
              <img src={require('../img/home/noon.jpg')} alt="IMG-INSTAGRAM" />

              <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
                <span class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                  <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                  <span class="p-t-2">39</span>
                </span>

                <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                  <p class="s-text10 m-b-15 h-size1 of-hidden">
                    Student id : 5802041620038 <br />
                    Miss. Chirarat  Kraithong
                    KMUTNB
						</p>


                </div>
              </a>
            </div>


            <div class="block4 wrap-pic-w">
              <img src={require('../img/home/flame.jpg')} alt="IMG-INSTAGRAM" />

              <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
                <span class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                  <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                  <span class="p-t-2">39</span>
                </span>

                <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                  <p class="s-text10 m-b-15 h-size1 of-hidden">
                    Student id : 5802041610089 <br />
                    Mr. Sirasak  Sunthrontuam
                    KMUTNB
						</p>

                </div>
              </a>
            </div>


            <div class="block4 wrap-pic-w">
              <img src={require('../img/home/aun.jpg')} alt="IMG-INSTAGRAM" />

              <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
                <span class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                  <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                  <span class="p-t-2">39</span>
                </span>

                <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                  <p class="s-text10 m-b-15 h-size1 of-hidden">
                    Student id : 5802041620041 <br />
                    Mr. Chanchai  Changpuak
                    KMUTNB
						</p>
                </div>
              </a>
            </div>


            <div class="block4 wrap-pic-w">
              <img src={require('../img/home/wan.jpg')} alt="IMG-INSTAGRAM" />

              <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
                <span class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                  <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                  <span class="p-t-2">39</span>
                </span>

                <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                  <p class="s-text10 m-b-15 h-size1 of-hidden">
                    Student id : 5802041620165 <br />
                    Mr. Photpakorn  Thianma
                    KMUTNB
						</p>


                </div>
              </a>
            </div>


            <div class="block4 wrap-pic-w">
              <img src={require('../img/home/thiey.jpg')} alt="IMG-INSTAGRAM" />

              <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
                <span class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
                  <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
                  <span class="p-t-2">39</span>
                </span>

                <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
                  <p class="s-text10 m-b-15 h-size1 of-hidden">
                    Student id : 5802041620203 <br />
                    Mr. Sompot  Satongngak
                    KMUTNB
						</p>


                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
