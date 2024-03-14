import React, { useState } from 'react'
import "./AddItems.css"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../components/Loader';

const AddItem = () => {

  const [itemname, setItemname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, settype] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({
    itemname: "",
    imageUrl: "",
    description: "",
    price: "",
    type:""

  });


  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  const formData = new FormData()

  formData.append("itemname", itemname)
  formData.append("description", description)
  formData.append("price", price)
  formData.append("image", image)
  formData.append("type", type)



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);


      const response = await axios.post("http://localhost:2000/item/create", formData)
      if (response.data.message === "Item Added") {
        toast.success(response.data.message);
        setItem(response.data.item)
        setItemname("");
        setDescription("");
        setPrice("");
        settype("");
        setImage(null);

      } else {
        toast.error(response.data.message);
      }

    }
    catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
    finally {
      setLoading(false);
    }


  }


  return (

    <>

      <div className='ItemContainer'>
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

        <div className="title">
          <h1>Add Item</h1>
        </div>

        <div className="item_form_container">


          <form onSubmit={handleSubmit}>

            <div className="itemfield">
              <label htmlFor="itemname">Item Name :</label>
              <input type="text"
                name='itemname'
                placeholder='Enter Item Name'
                value={itemname}
                onChange={(e) => {
                  setItemname(e.target.value);
                }}

              />
            </div>

            <div className="itemfield">
              <label htmlFor="price">Price :</label>
              <input type="text"
                name='price'
                placeholder='Enter Price'
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>

            <div className="itemfield">
              <label htmlFor="descritpion">Item details :</label>
              <textarea value={description} onChange={(e) => {
                setDescription(e.target.value);
              }}
                name="description" id="" cols="30" rows="10"></textarea>
            </div>



            <div className="itemfield">
              <div class="containerrr">
                <label for="types">type :</label>
                <input list="type"  name="type" id="types"
                onChange={(e) => {
                  settype(e.target.value)}}
                  value={type}
                 
                /> 

                <datalist id="type">
                  <option value="Appetizers"> </option>
                  <option value="Tikka"> </option>
                  <option value="Biryani"> </option>
                  <option value="Chapli Kabab"> </option>
                  <option value="Chinese Cornor"> </option>
                  <option value="Dessert"> </option>
                  <option value="Drinks"> </option>
                  <option value="Dum Pukht"> </option>
                  <option value="Hot Plate"> </option>
                  <option value="Karahi Special"> </option>
                  <option value="Naan / Roti"> </option>
                  <option value="Mughlai Section"> </option>
                  <option value="Rice"> </option>
                  <option value="Sea food"> </option>
                  <option value="Soup"> </option>
                  <option value="Salad"> </option>
                </datalist>
              </div>
            </div>


            <div className="itemfield">
              <label htmlFor="image">Image :</label>
              <input type="file"
                name='image'
                onChange={handleImage}

              />
            </div>



            <div className='submit_btn'>
              <button type='submit' onClick={handleSubmit} disabled={loading}>Add</button>
              {loading && <Loader />}
            </div>

          </form>
        </div>

      </div>

    </>
  )
}

export default AddItem