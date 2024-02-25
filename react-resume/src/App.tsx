import { useEffect } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header } from './components/header/Header'
import { Hero } from './components/Hero/Hero'
import { Footer } from './components/Footer/Footer'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'




function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Footer></Footer>
  {/* <Preloader></Preloader> */}      
    </>
  )
}

export default App
