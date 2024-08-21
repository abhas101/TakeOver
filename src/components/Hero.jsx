import React from 'react'
import CarHero from '../assets/carHero.png'

const Hero = () => {

    const takeoverText = document.getElementById('takeoverText');
    window.onscroll = () => {
        const scrollPosition = window.scrollY;
        takeoverText.style.top = `${150 - scrollPosition}px`;
    };

  return (
    <>
    <section className="wrapper  flex justify-center items-center relative">
        <section className="hero-section flex justify-center">
            <h1 class="font-hero text-9xl absolute  text-white " id='takeoverText'>Take OVER</h1>
            <img src={CarHero} alt="CAR" class="w-1/2" />
        </section>
    </section>
    
    
    </>
  )
}

export default Hero
