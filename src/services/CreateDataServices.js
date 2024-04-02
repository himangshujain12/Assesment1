const dataModel=require('../models/dataModel')
 module.exports=async function login (req,res){
    try {
        
        console.log('req in services',req.body);
        const {username,email,password,age,city}=req.body
        const _id=username+age
         data=await dataModel.create({id:_id,age:age,username:username,email:email,password:password,city:city})
    if(data){
        return{
            status:200,
            message:'Data Saved Succesfully!!'
        }
    } else{
        return{
            status:false,
            message:"Failed to save the data!!"
        }
    }
    } catch (error) {
       console.log("error occured in createDataServices",error.message); 
    }
}
