const mongoose = require("mongoose")

const url = "mongodb+srv://clase:g0XLjHFZ63xNzKLD@clase.pao3x.mongodb.net/test/crm-clientes";

const DBconnection = async()=> {
    try{
        await mongoose.connect(url)
        console.log('BD is conected')
    }catch(error){
        console.log(error);
        throw new Error('Failed to initialize databse')
    }
}

module.exports = DBconnection;