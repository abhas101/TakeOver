import React from 'react'
import NavBar from './components/NavBar'
import NightMode from './NightMode'
import ReactDOM from 'react-dom';
import Hero from './components/Hero';
import Filler from './components/Filler';
import TopLabel from './components/TopLabel.jsx'
import Scroll from './components/Scroll.jsx';
import DonwloadButton from './components/DonwloadButton.jsx';

const App = () => {
  return (
    <>

    <NavBar/>
    {/* <Scroll /> */}
    <TopLabel />
    {/* <NightMode /> */}
    <Hero />
    {/* <DonwloadButton /> */}
    <Filler />

    
    
    
    
    </>
  )
}

export default App
// ReactDOM.render(<App />, document.getElementById('root'));