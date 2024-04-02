const express=require('express')
const router=express.Router()

const validateCreateParams=require('../validationSchema/createUserValidation')
const validateReadParams=require('../validationSchema/readUserValidation')
const validateUpdateParams=require('../validationSchema/updateUserValidation')
const validateDeleteParams=require('../validationSchema/deleteUserValidation')


const {createData,readData,updateData,deleteData}=require('../controller/controller')


router.post('/createData',validateCreateParams,createData)
router.get('/readData/:id',validateReadParams,readData)
router.put('/updateData/:id',validateUpdateParams,updateData)
router.delete('/deleteData/:id',validateDeleteParams,deleteData)


module.exports=router
