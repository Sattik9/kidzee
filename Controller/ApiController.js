const apiModel=require("../Model/bannerModel");

const views=async(req,res)=>{
    try{
        const result=await apiModel.find();
        res.status(200).json({
            success:true,
            message:"data fetched successfully",
            data:result
        })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"error"
        })
    }
}

module.exports=views;