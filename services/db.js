const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/ContactApp')

const user=mongoose.model('contacts',{
    address:String,
    id:String,
    email:String,
    username:String,
    password:String,
    name:String,
    phone:String
})
module.exports={
    user
}