const Customer = require("../models/Customer");

const getCustomer = async (req, res) => {
    try{

        const customer =  await Customer.find()

       return res.status(202).json({
            ok: true,
            message: "",
            customer
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const createCustomer = async (req, res) => {
    try{
        const { name, email, company, phone } = req.body;

        const newProduct =  new Customer({name, email, company, phone})

        const customerSaved =  await newProduct.save()

       return res.status(202).json({
            ok: true,
            message: "Cliente Customer guardado",
            customer: customerSaved
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const updateCustomer = async (req, res) => {
    try{
        const { id, name, email, company, phone } = req.body;

        const userExist = await Customer.exists({_id: id})

        if(!userExist) return res.status(404).json({
            ok: false,
            message: "No existe el cliente"
       })

       const customerUpdated = await Customer.findByIdAndUpdate(
        id,
        {
            $set: {name, email, company, phone}
        },
       {new: true}
       );

       return res.status(202).json({
            ok: true,
            message: "cliente actualizado",
            customer: customerUpdated
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

const deleteCustomer = async (req, res) => {
    try{
        const { id } = req.body;

        const userExist = await Customer.exists({_id: id})

        if(!userExist) return res.status(404).json({
            ok: false,
            message: "No existe el Cliente"
       })

       const customerDeleted = await Customer.deleteOne({_id:id})

       return res.status(200).json({
            ok: true,
            message: "Customero Elimindo",
            customer: {_id: id, ...customerDeleted}
       })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Ocurrio un error"
       })
    }
};

module.exports = {getCustomer, createCustomer, updateCustomer, deleteCustomer}
