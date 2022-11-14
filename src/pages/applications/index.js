import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "swiper/css";
import "swiper/css/navigation";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const EcomIndex = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        navigation={false} 
        modules={[Navigation, Autoplay]} 
        className="mySwiper"
      >
          <SwiperSlide>
            <div className='bg-[url("./images/bojack-0.png")] h-[240px] lg:h-[596px] bg-cover bg-center w-full bg-no-repeat'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("./images/bojack-0.png")] h-[240px] lg:h-[596px] bg-cover bg-center w-full bg-no-repeat'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("./images/bojack-0.png")] h-[240px] lg:h-[596px] bg-cover bg-center w-full bg-no-repeat'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("./images/bojack-0.png")] h-[240px] lg:h-[596px] bg-cover bg-center w-full bg-no-repeat'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("./images/bojack-0.png")] h-[240px] lg:h-[596px] bg-cover bg-center w-full bg-no-repeat'></div>
          </SwiperSlide>
      </Swiper>

      <div className='mx-4 my-4'>
        <div className='category-index'>
          <label className='text-lg font-semibold'>Category</label>
          <div className='list-category-index'>
            
            <Swiper
              navigation={false} 
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 5,
                },
              }}
              className="category-slider"
            >
              <SwiperSlide>
                <div class="max-w-sm rounded overflow-hidden">
                  <img class="w-1/4" src="./logo192.png" alt="Sunset in the mountains" />
                  <label className='text-xs md:text-sm'>Food</label>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-w-sm rounded overflow-hidden">
                  <img class="w-1/4" src="./logo192.png" alt="Sunset in the mountains" />
                  <label className='text-xs md:text-sm'>Electronics</label>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-w-sm rounded overflow-hidden">
                  <img class="w-1/4" src="./logo192.png" alt="Sunset in the mountains" />
                  <label className='text-xs md:text-sm'>Man</label>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-w-sm rounded overflow-hidden">
                  <img class="w-1/4" src="./logo192.png" alt="Sunset in the mountains" />
                  <label className='text-xs md:text-sm'>Woman</label>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-w-sm rounded overflow-hidden">
                  <img class="w-1/4" src="./logo192.png" alt="Sunset in the mountains" />
                  <label className='text-xs md:text-sm'>Kids</label>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </div>

        <div className='view-rand-prod-one mt-8'>
              <div className='top-rand flex justify-between items-center'>
                <label className='text-lg font-semibold'>Food</label>
                <a href={() => false} className='text-[11px]'>See All <FontAwesomeIcon icon={faArrowRight}/> </a>
              </div>
              <div className='body-rand'>
                <Swiper
                  slidesPerView={"auto"}
                  navigation={false} 
                  modules={[Navigation]}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 5,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 5,
                    },
                  }}
                  className="product-one-slider"
                >
                  <SwiperSlide>
                    <div class="max-w-sm rounded overflow-hidden">
                      <img class="w-1/4" src="./logo192.png" alt="Sunset in the mountains" />
                      <label className='text-xs md:text-sm'>Food</label>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="max-w-sm rounded overflow-hidden">
                      <img class="w-1/4" src="./logo192.png" alt="Sunset in the mountains" />
                      <label className='text-xs md:text-sm'>Electronics</label>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="max-w-sm rounded overflow-hidden">
                      <img class="w-1/4" src="./logo192.png" alt="Sunset in the mountains" />
                      <label className='text-xs md:text-sm'>Man</label>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="max-w-sm rounded overflow-hidden">
                      <img class="w-1/4" src="./logo192.png" alt="Sunset in the mountains" />
                      <label className='text-xs md:text-sm'>Woman</label>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="max-w-sm rounded overflow-hidden">
                      <img class="w-1/4" src="./logo192.png" alt="Sunset in the mountains" />
                      <label className='text-xs md:text-sm'>Kids</label>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
        </div>

      </div>
    </>
  )
}

export default EcomIndex