const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        amount: {
            type: String,
            required: true,
        },
        transactionname:{
            type:String,
            required: true,
        },
        category:{
            type:String,
            required: true,
        },
        user_name:{
            type: String,
            required: true,
        },
        createdAt:{
            type: Date,
            required: true,
            default: Date.now(),
        },
    }
)

module.exports = mongoose.model("Transaction", transactionSchema);