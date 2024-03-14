import React, { useState } from 'react';
import tkrimg_1 from "../assets/pulao_tkr anm1.webp";
import tkrimg_2 from "../assets/rosh tkr anm2.webp";
import tkrimg_3 from "../assets/green polao tkr anm3.webp";
import "../styles/Form.css";
import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    fullname: "",
    username: "",
    email: "",
    address: "",
    contact: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post("http://localhost:2000/user/register", formData);

      if (response.data.message === "Registration successfull") {

        toast.success(response.data.message);
        navigate("/Login")
      }
      else {
        toast.error(response.data.message);

      }

    }
    catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }



  return (
    <>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />


      <div className='Page_container'>


        <div className="sideshow_form">
          <img className='img1' src={tkrimg_1}  alt="Yes" />
          <img className='img2' src={tkrimg_2}  alt="Yes" />
          <img className='img3' src={tkrimg_3}  alt="Yes" />

          <div className="ball1"></div>
          <div className="ball2"></div>
          <div className="ball3"></div>
        </div>

        <div className="form_container">
          <h1>Signup!</h1>

          <form onSubmit={handleSubmit}>

            <input type="text"
              name='fullname'
              placeholder='Fullname'
              onChange={handleChange}
            />

            <input type="text"
              name='username'
              placeholder='Username'
              onChange={handleChange}
            />

            <input type="email"
              name='email'
              placeholder='Email'
              onChange={handleChange}
            />

            <input type="text"
              name='address'
              placeholder='Address'
              onChange={handleChange}
            />

            <input type="tel"
              name='contact'
              placeholder='Contact No'
              onChange={handleChange}
            />

            <input type="password"
              name='password'
              placeholder='Password'
              onChange={handleChange}
            />


            <button type='submit'>Signup</button>


          </form>
        </div>

      </div>

    </>
  )
}

export default Register