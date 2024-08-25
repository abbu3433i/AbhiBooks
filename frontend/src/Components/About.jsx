import React from 'react'
import owner from "../../public/ownere.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Navbar';
import Footer from './Footer';


function About() {
    const logos = [
        // Add your logo images here
        "https://cdn2.free-power-point-templates.com/articles/wp-content/uploads/2021/09/fedex-logo-presentation-slide.png",
        "https://slidemodel.com/wp-content/uploads/21773-01-logo-presentation-powerpoint-template-16x9-1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVo8AWrwOp-wq2ezOgW8vQMEndMWqIvD07ag&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeq__Jga97RjYYICNVas3D2_xvNOKrbBXUg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO01QGaSE3j9YzDGiLRsiMXBJlH-hgI9Sgrg&s", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPn6q14XcT4Xd24hfMk7m5VAPu3P4YmNN5Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_70Nx8purXRH6XwIFl-qKIB6QslbK2aVpw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvhW5sKYBYyJjRwDRSNMU-nQ2f72TvAbIBA&s",
        // Add more logos as needed
      ];
    
      const settings = {
        infinite: true,
        speed: 3000, // Adjust speed for sliding (in milliseconds)
        slidesToShow: 5, // Number of logos to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: true,
        // rtl: true
      };

      const setting = {
        infinite: true,
        speed: 5000, // Adjust speed for sliding (in milliseconds)
        slidesToShow: 5, // Number of logos to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: true,
        rtl: true
      };
  return (
    <>
    <Navbar/>

          <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-14'>
          
          <div className="py-10 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Our Partnership</h2>
      <Slider {...settings} className="overflow-hidden cursor-pointer">
        {logos.map((logo, index) => (
          <div key={index} className="px-4">
            <img src={logo} alt='' className="mx-auto h-24 w-auto object-contain" />
          </div>
        ))}
      </Slider>

      <Slider {...setting} className="overflow-hidden cursor-pointer">
        {logos.map((logo, index) => (
          <div key={index} className="px-4">
            <img src={logo} alt={`Logo ${index}`} className="mx-auto h-24 w-auto object-contain" />
          </div>
        ))}
      </Slider>
    </div>


    <section class="text-center py-12 px-4">
        <h2 class="text-2xl font-bold">Owner</h2>
        <p class="mt-4 text-gray-700 dark:text-white max-w-2xl mx-auto flex flex-col justify-center items-center">
        Empowering students through accessible, high-quality digital books, fostering knowledge, and promoting lifelong learning in a support.

          <img src={owner} className='h-[200px] w-[200px] rounded-full object-cover  pt-3' alt="" />
         <span className=' text-xl font-bold text-pink-500 dark:text-white '>Abhishek Gour</span> 
        </p>
        <div class="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div class="transition transform hover:scale-110">
            <h3 class="text-xl font-bold" >85+</h3>
            <p class="text-gray-700 dark:text-white">Projects</p>
          </div>
          <div class="transition transform hover:scale-110">
            <h3 class="text-xl font-bold" >25+</h3>
            <p class="text-gray-700 dark:text-white">Years of Experience</p>
          </div>
        </div>
      </section>


{/* //////////////// */}

<div className='flex flex-col md:flex-row'>

        <div className="w-full md:order-1 md:w-1/2 ">
          <div className="space-y-8">
          <div className="sm:text-center lg:text-left space-y-2 md:p-8">
                    <h2 className="my-6 text-2xl tracking-tight font-extrabold dark:text-white text-gray-900 sm:text-3xl md:text-4xl dark:textw">
                    About AbhiBooks
                    </h2>
                    <p>
                    Welcome to AbhiBookstore! We are dedicated to bringing you the best books from a wide variety of genres. Whether you're looking for the latest bestseller or a classic novel, we have something for everyone.
                    </p>
                    <p>
                    Our mission is to make reading accessible and enjoyable for all. We believe that books have the power to transform lives, and we're here to help you find the perfect book for any occasion.
                    </p>
                    <p>
                    Thank you for choosing AbhiBookstore. Happy reading!
                    </p>
                </div>
          </div>
          
        </div>

        <div className="w-full  md:w-1/2 flex items-center justify-center align-middle">
          <img
            src="https://watermark.lovepik.com/photo/50091/3704.jpg_wh1200.jpg"
            className="md:w-[500px] md:h-[400px] md:ml-12  w-[500px] h-[400px] object-contain hover:scale-105 duration-300"
            alt=""
          />
        </div>

        </div>




    </div>

    <Footer/>
    </>
  )
}

export default About



