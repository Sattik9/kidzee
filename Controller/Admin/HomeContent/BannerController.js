const userModel=require("../../../Model/bannerModel");

const listing=async(req,res)=>{
    try{
        const result=await userModel.find();
    res.render('HomeContent/Banner/listing',{
        title:"Admin login",
        data:result
    })
    }
    catch(error){
        console.log(error);
    }

}
const addListing=(req,res)=>{
    
    res.render('HomeContent/Banner/addListing',{
        title:"Admin login",
    
    })
    

}
const createListing=(req,res)=>{
    
    try{
        const result=new userModel({
            
            title:req.body.title,
            description:req.body.description
           })

           if(req.file){
            result.image=req.file.path
           }

        const data=result.save();
        data.then(()=>{
            console.log('creation is successful!');
            res.redirect("/banner/listing");
        })
    }
    catch(error){
        console.log(error);
    }
}

const editListing=async(req,res)=>{
    try{
        const result=await userModel.findById(req.params.id)
    res.render('HomeContent/Banner/editListing',{
        title:"Admin login",
        data:result
    })
    }
    catch(error){
        console.log(error);
    }
}

const updateListing=(req,res)=>{
    try{
        userModel.findByIdAndUpdate(req.body.id,req.body,{new:true})
        .then(()=>{
            res.redirect("/banner/listing");
            console.log("Update is successful!");
        })
    }
    catch(error){
        console.log(error);
    }
}

const deleteListing=(req,res)=>{
    try{
        userModel.findByIdAndDelete(req.params.id)
        .then(()=>{
            res.redirect("/banner/listing");
            console.log("Deletion is successful!");
        })
    }
    catch(error){
        console.log(error);
    }
}

module.exports={
    listing,addListing,createListing,editListing,updateListing,deleteListing
}