const dataModel=require('../models/dataModel')
 module.exports=async function login (req,res){
    try {
        
       const id=req.params.id
         data=await dataModel.findOneAndDelete({id:id})
           
         console.log("data------",data);
    if(data){
        return{
            status:200,
            message:'Data deleted Succesfully!!'
        }
    } else{
        return{
            status:false,
            message:"Data not Found !!"
        }
    }
    } catch (error) {
       console.log("error occured in deleteDataServices",error.message); 
    }
}
