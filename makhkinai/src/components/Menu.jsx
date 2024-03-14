import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { IoIosStar } from "react-icons/io";
import "../styles/Menu.css"

const Menu = () => {
    const [menu, setmenu] = useState([])

    const fetchMenu = async () => {

        try {
            const response = await axios.get("http://localhost:2000/item/getItems")
            console.log(response.data)
            setmenu(response.data);
        }
        catch
        (error) {
            toast.error("something went wrong")
        }
    }

    // Function to filter menu items by category
    const filterMenuByCategory = (category) => {
        return menu.filter(item => item.type === category);
    }

    useEffect(() => {
        fetchMenu();
    }, [])

    return (
        <>

            <div className='menucontainer'>

                <div className="title">
                    <h1>Tanor Menu</h1>
                </div>

                <div className="catagory_container">

                    <div className="catagory_type">
                        <h1> Appetizers</h1>
                    </div>
                    <div className="catagory_items">
                        {
                            filterMenuByCategory("Appetizers").map((menuItem) => (
                                <div className="item_card">
                                    <img src={menuItem.itempic} alt="yes" />
                                    <h3>{menuItem.itemname}</h3>
                                    {/* <p>{menuItem.description}</p> */}
                                    <div className='price_rating'>
                                        <span>Rs {menuItem.price}</span>
                                        <span>{menuItem.Rating} <IoIosStar /></span>
                                    </div>
                                    <button>Order</button>
                                </div>
                            ))
                        }

                    </div>


                </div>

                <div className="catagory_container">

                    <div className="catagory_type">
                        <h1> Tikka</h1>
                    </div>
                    <div className="catagory_items">
                        {
                            filterMenuByCategory("Tikka").map((menuItem) => (
                                <div className="item_card">
                                    <img src={menuItem.itempic} alt="yes" />
                                    <h3>{menuItem.itemname}</h3>
                                    {/* <p>{menuItem.description}</p> */}
                                    <div className='price_rating'>
                                        <span>Rs {menuItem.price}</span>
                                        <span>{menuItem.Rating} <IoIosStar /></span>
                                    </div>
                                    <button>Order</button>

                                </div>
                            ))
                        }

                    </div>


                </div>
                <div className="catagory_container">

                    <div className="catagory_type">
                        <h1> Biryani</h1>
                    </div>
                    <div className="catagory_items">
                        {
                            filterMenuByCategory("Biryani").map((menuItem) => (
                                <div className="item_card">
                                    <img src={menuItem.itempic} alt="yes" />
                                    <h3>{menuItem.itemname}</h3>
                                    {/* <p>{menuItem.description}</p> */}
                                    <div className='price_rating'>
                                        <span>Rs {menuItem.price}</span>
                                        <span>{menuItem.Rating} <IoIosStar /></span>
                                    </div>
                                    <button>Order</button>

                                </div>
                            ))
                        }



                    </div>


                </div>
            </div>

        </>
    )
}

export default Menu