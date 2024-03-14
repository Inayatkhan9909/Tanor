const Item = require("../Models/ItemsModel");
const cloudinary = require("../utils/Cloudinary");

const createItem = async (req, res) => {
    try {

        const { itemname, price,image ,type,  description } = req.body;
         
        if (itemname != "" && price != "" && type != "" && description != "") {
    
            if (image !== "") {
                const uploadResult = await cloudinary.uploader.upload(image, {
                    folder: "Tanor menu",
                });
                itempic = uploadResult.secure_url;
                if (uploadResult) {

                    const newitem = new Item({ itemname, price,type, itempic, description })
                    const item = await newitem.save();
                    if (newitem) {
                        res.json({ message: "Item Added",item});
                    }
                    else {
                        res.json({ message: "item not save due to some error" });
                    }
                }
                else {
                    res.json({ message: "Cloudinary Error" });
                }

            }
            else {
                res.json({ message: "image required" });
            }

        }
        else {
            res.json({ message: "All fields required" });
        }

    }
    catch (error) {
        console.log(error)
    }
}

const getItems = async (req,res)=>{
    try {

        const items = await Item.find()
        if(items)
        {
            res.json(items);
        }
        else{
            res.json({message:"No item avalible now"});
        }
        
    } 
    catch (error) {
        console.log(error)
        res.json({message:"something went wrong"});
    }
}


module.exports = { createItem,getItems }
