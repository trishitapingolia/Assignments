const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

//Schema for creating material
const materialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    technology: {
        type: String,
        required: true
    },
    colors:[
        {
            type: String,
            required: true
        }
    ],
    pricePerGram:{
        type: Number,
        required: true
    },
    applicationTypes:[{
        type: String,
        required: true
    }],
    imageUrl:{
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: "MaterialModel"
    }
});

mongoose.model("MaterialModel", materialSchema);