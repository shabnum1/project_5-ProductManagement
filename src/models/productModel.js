const mongoose = require('mongoose');


const productSchema = new mongoose.Schema( {
    title :{
        type : String,
        required : true,
        unique : true
    },
    description :{
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    currencyId : {
        type :String,
        required : true
    },
    currencyFormat : {
        type : String,
        required : true,
        
    },
    isFreeShipping : {
        type : Boolean,
        default : false
        
    },
    
    style :{
        type: String
    },
    availableSizes :{

    },
    installments:{

    },
    deletedAt :{
        type : Date
    },
    isDeleted :{
        type : Boolean,
        default : false
    }

},{ timestamps: true });

module.exports = mongoose.model('Product', productSchema)