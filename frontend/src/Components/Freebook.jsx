import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from "../../public/list.json";
import Cards from './Cards';


function Freebook() {

   const handleViewPDF = (pdfUrl) => {
    // window.open(pdfUrl, '_blank');
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank'; // This will open the PDF in a new tab
    document.body.appendChild(link);
    link.click();

    // Remove the link after clicking
    document.body.removeChild(link);
};
  
  const handleDownloadPDF = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'AbhiBooks';
    // link.setAttribute('download', 'book.pdf'); // Yahan "book.pdf" ko apni file ka naam dein
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  const [book, setbook] = useState([])

  useEffect(()=>{
    const showbook = async()=>{   //--fn banaya then usko niche call kiya
      try {
        const res = await axios.get("https://abhibooks-backend.onrender.com/book");  //--ye hamari banai hui API he jo backend se aa rhi he.
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
               initialSlide: 1,
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
          Providing students with free access to a diverse selection of online courses, empowering them to develop new skills and expand their knowledge. Our mission is to remove financial obstacles and create equal learning opportunities for everyone.
          </p>
        </div>

        <div>
        <Slider {...settings}>
        {
            book.map((elem)=>{
                return (
                  <>
                  <div className='mb-4'> 

                    <Cards item={elem} key={elem.id}/>
                    <div className='flex justify-around border m-2 rounded-md shadow-md p-3'>
                    <button onClick={() => handleDownloadPDF(elem.address)} className='border-black border-b-2 dark:border-white' >Download</button>
                    <button onClick={() => handleViewPDF(elem.address)} className='border-black border-b-2 dark:border-white' >View</button>
                    </div>

                    </div>
                    </>
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
