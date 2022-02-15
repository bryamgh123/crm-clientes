const  {Schema, model} = require("mongoose");

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
         // mayuscula
        uppercase: true,
        // borra espacios
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    company: {
        type: String,
        required: true,
    },
    phone: {
        type: Number
    }
    
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = model("Customer", CustomerSchema, "Customers");