import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import '../styles/Navbar.css';
import Tanor from '../assets/Screenshot_2024-03-04_191016-removebg-preview.png'
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
    const [showItems, setshowItems] = useState(false)
    const toggledropdown = () => {
        setshowItems(!showItems)
    }
    return (
        <div className='Navbarcontainer'>

            <div className="title">
                <Link to='/'><img src={Tanor} alt="no" /></Link>
            </div>
            <div className="dropdown" onClick={toggledropdown}>
                <HiBars3 size={25} />
            </div>

            <div className={`${showItems ? 'itemsdropdown' : 'items'}`}>
                <ul>

                    <li>
                        <Link to='/Menu'>Menu</Link>

                    </li>
                    <li>
                        <Link to='/Order'>Online Order</Link>

                    </li>
                    <li>
                        <Link to='/Reservaton'>Reservation</Link>

                    </li>
                    <li>
                        <Link to='/Profile'><CgProfile size={30} /></Link>

                    </li>
                    <li>
                        <Link to='/Register' className='Register'>Register</Link>

                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar