const dataModel=require('../models/dataModel')
 module.exports=async function login (req,res){
    try {
        
       const id=req.params.id
       const dataToUpdate=req.body
         data=await dataModel.findOneAndUpdate({id:id},
            {$set:dataToUpdate},{new:true})
         console.log("data------",data);
    if(data){
        return{
            status:200,
            message:'Data Updated Succesfully!!'
        }
    } else{
        return{
            status:false,
            message:"Failed to Update the data!!"
        }
    }
    } catch (error) {
       console.log("error occured in UpdateDataServices",error.message); 
    }
}
