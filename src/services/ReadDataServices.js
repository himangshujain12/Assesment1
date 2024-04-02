const dataModel = require('../models/dataModel');

module.exports = async function login(req, res) {
    try {
        const id = req.params.id;
        
        const data = await dataModel.findOne({id:id} );
        
        if (data) {
            return {
                status: 200,
                message: 'Data read successfully!!',
                data: data
            };
        } else {
            return {
                status: false,
                message:"Data not Found !!"
            };
        }
    } catch (error) {
        console.log("error occurred in login service:", error.message);
        return {
            status: false,
            message: "An error occurred while reading data."
        };
    }
};
