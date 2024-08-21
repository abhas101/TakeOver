import React from 'react';

 
const NightMode = () => {
    const icon = document.getElementById('nightButton2');
    const nightWrapper = document.getElementById('nightWrapper');
    const handleClick = () => {
        // Custom JavaScript logic
            
        document.querySelector("body").classList.toggle("darkMode");
        document.querySelector("body").classList.add("transition-md");
        document.getElementById('nightButton').classList.toggle("fa-toggle-on")
      };

  return (
    <>
    
   
    <div className="nightWrapper items-center flex justify-center" id = "nightWrapper" >
    <button type='button' class="text-3xl" onClick={handleClick} id="nightButton2" > <i class="fa-solid fa-toggle-off" id='nightButton'></i> </button>
    
    </div>
    
    </>
  )
};



export default NightMode





