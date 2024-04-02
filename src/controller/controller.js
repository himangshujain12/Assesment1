const createData=require('../services/CreateDataServices')
const readData=require('../services/ReadDataServices')
const updateData=require('../services/UpdateDataServices')
const deleteData=require('../services/DeleteDataServices')

exports.createData=async function (req,res){
    const response=await createData(req,res)
    console.log("response ------",response);
    res.send(response)
}
exports.readData=async function (req,res){
    const response= await readData(req,res)
    console.log("response ------",response);
    res.send(response)
}
exports.updateData=async function (req,res){
    const response= await updateData(req,res)
    console.log("response ------",response);
    res.send(response)
}
exports.deleteData=async function (req,res){
    const response= await deleteData(req,res)
    console.log("response ------",response);
    res.send(response)
}

