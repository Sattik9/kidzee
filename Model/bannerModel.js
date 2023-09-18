const mongoose=require('mongoose');
const schema=mongoose.Schema;

const userSchema=new schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:0
    }
},
{
    timestamps:true
})

const bannerModel=mongoose.model("banner",userSchema);
module.exports=bannerModel;