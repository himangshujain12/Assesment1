const joi = require('joi')

const params = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(10).required(),
    age:joi.number().required(),
    city: joi.string().required(),
})

const validateUpdateParams=(req,res,next)=>{
    console.log("req data+++++++++++++++++=");
    const {error}=params.validate(req.body)
    console.log(error);
    if(error){
        return res.status(400).json({error:error.message})
    }
    next()
}

module.exports=validateUpdateParams