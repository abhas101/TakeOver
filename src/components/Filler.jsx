import React from 'react'
import Car2 from '../assets/car2.png'

const Filler = () => {

    const text1 = document.getElementById('text');

    window.onscroll = () => {
        const scrollPosition = window.scrollY;
        text1.style.top = `${100-scrollPosition}px`;
    };

  return (
    <>
    <div className="filler">

        <div className="items mt-44 md:mt-20 p-10 flex justify-between items-center relative ">
            {/* <img src={Car2} alt="car2" className="mt-10 w-1/5 ml-72 " /> */}
            {/* <p className='font-hero text-8xl left-auto right-auto absolute' id="text">Coming Soon</p> */}
        </div>

    </div>
    
    
    </>
  )
}

export default Filler
