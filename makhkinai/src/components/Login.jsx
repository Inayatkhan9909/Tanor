import React, { useState } from 'react';
import tkrimg_1 from "../assets/pulao_tkr anm1.webp";
import tkrimg_2 from "../assets/rosh tkr anm2.webp";
import tkrimg_3 from "../assets/green polao tkr anm3.webp";
import { ToastContainer, toast } from 'react-toastify';
import "../styles/Form.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    username: "",
    password: ""

  })

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setformData({ ...formData, [name]: value });
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  }
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2000/user/login", formData);

      if (response.data.message === "logged in successfully") {
        localStorage.setItem('token', response.data.token);
        toast.success(response.data.message)
        navigate("/")
      }
      else {
        toast.error(response.data.message)
      }

    }
    catch (error) {
      console.log(error)
      toast.error("Something went wrong");
    }
  }



  return (
    <>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className='Page_container'>



        <div className="sideshow_form">
          <img className='img1' src={tkrimg_1} width={300} alt="Yes" />
          <img className='img2' src={tkrimg_2} width={300} alt="Yes" />
          <img className='img3' src={tkrimg_3} width={300} alt="Yes" />

          <div className="ball1"></div>
          <div className="ball2"></div>
          <div className="ball3"></div>
        </div>

        <div className="form_container">
          <h1>Login!</h1>

          <form onSubmit={handleSubmit}>


            <input type="text"
              name='username'
              placeholder='Username'
              onChange={handleChange}
            />

            <input type="password"
              name='password'
              placeholder='Password'
              onChange={handleChange}
            />

            <button type='submit'>login</button>


          </form >
        </div>

      </div>

    </>
  )
}

export default Login