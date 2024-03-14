const mongoose  = require("mongoose");
const User = require("../Models/UserModel")

const Item = new mongoose.model('Item',{
    itemname: String,
    price:  String,
    itempic: String,
    description:String,
    type:String,
    reviews:[{
        content:{type:String,require:true},
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        username:{type:String,required:true},
        createdAt: { type: Date, default: Date.now }
    }],
    Rating: { type: Number, default: 3 }
    
})

module.exports = Item;