const joi = require('joi')

const params = joi.string().alphanum().required();
const validateReadParams=(req,res,next)=>{
    console.log("req data+++++++++++++++++=",req.params.id);
    const {error}=params.validate(req.params.id)
    console.log(error);
    if(error){
        return res.status(400).json({error:error.message})
    }
    next()
}

module.exports=validateReadParams