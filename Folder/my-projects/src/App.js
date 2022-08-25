import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Middle from './Components/Middle';
import Extra from './Components/Extra';
import PlacementExample from './Components/Sidebar';
import SwipeToSlide from './Components/Swipebar';
import { Component } from 'react';
import Swipe from './Components/Swipebar';
import Appss from './Components/Swipebar';



function App() {
  return (
    <div className="App">
      <Navbar/> 
{/* <Extra/> */}


      
      <Middle/>
      <br/>
     <Footer/> 
    </div>
  );
}

export default App;
