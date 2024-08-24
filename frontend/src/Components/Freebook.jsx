import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from "../../public/list.json";
import Cards from './Cards';

function Freebook() {

  const [book, setbook] = useState([])

  useEffect(()=>{
    const showbook = async()=>{   //--fn banaya then usko niche call kiya
      try {
        const res = await axios.get("http://localhost:3000/book");  //--ye hamari banai hui API he jo backend se aa rhi he.
        const data = res.data.filter((elem,i)=>elem.catagory==="Free");
        setbook(data)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    showbook();
  },[]);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
  return (
    <>
     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>

        <div>
        <Slider {...settings}>
        {
            book.map((elem)=>{
                return (
                    <Cards item={elem} key={elem.id}/>
                )
            })
        }
        </Slider>
        </div>
        </div>
    </>
  )
}

export default Freebook