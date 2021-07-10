import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderDataOne } from './data/SliderData';
import GlobalStyle from './globalStyle';
import Accessories from './pages/Accessories';
import Candles from './pages/Candles';
import {Router,Route, Link} from "react-router-dom";

function Home() {

  
  const [isOpen, setIsOpen]=useState(false);

  const toggle= () => {
    setIsOpen(!isOpen) 
  }
  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={ SliderDataOne}/>
       

    </>



  );
}

export default Home;