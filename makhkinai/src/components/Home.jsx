import React from 'react'
import '../styles/Home.css'
import Restaurantpic from '../assets/Restaurantpic.jpg'
import tkrimg_1 from "../assets/pulao_tkr anm1.webp";
import tkrimg_2 from "../assets/rosh tkr anm2.webp";
import tkrimg_3 from "../assets/green polao tkr anm3.webp";
import { TiInfoLarge } from "react-icons/ti";
import { LuMenuSquare } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Homecontainer'>

      <div className="front_image">
        <img src={Restaurantpic} alt="NO" />
      </div>

      <div className='Page_container_Home'>


        <div className="welcome_div">
          <div className='welcome_note'>
            Welcome to Tanor Restaurants
          </div>

          <div className="welcome_slogan">
            We do not cook, we create your emotions!
          </div>

          <div className="welcome_details">
            At our kitchen, we don't just cook; we craft emotions on every plate. Join us and let us create a symphony of tastes that resonates with your heart and soul.
          </div>

          <div className="show_container_home">
            <div className="menu_home_show">
              <Link to='/Menu'>Menu <LuMenuSquare className='menu-icon' /></Link>
            </div>
            <div className="about_home_show">
              <Link to='/Menu'>About <TiInfoLarge className='about-icon' /></Link>
            </div>

            <div className="order_home_show">
              <Link>order online</Link>
            </div>


          </div>

        </div>
        <div className="sideshow_form">
          <img className='img1' src={tkrimg_1} alt="Yes" />
          <img className='img2' src={tkrimg_2} alt="Yes" />
          <img className='img3' src={tkrimg_3} alt="Yes" />

          <div className="ball1"></div>
          <div className="ball2"></div>
          <div className="ball3"></div>
        </div>
      </div>



    </div>
  )
}

export default Home