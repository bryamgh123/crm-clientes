const mongoose = require("mongoose")

const config = require("../config/index");

const DBconnection = async()=> {
    try{
        await mongoose.connect(config.mongoUri)
        console.log('BD is conected')
    }catch(error){
        console.log(error);
        throw new Error('Failed to initialize databse')
    }
}

module.exports = DBconnection;