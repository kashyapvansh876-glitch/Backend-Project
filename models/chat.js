const mongoose = require("mongoose");

const chatSchema =  new mongoose.Schema({
    from: {
        type: String,
        reuired: true,

    },
    to: {
        type: String,
        reuired: true,
    },
    msg:{
        type: String,
        maxLength: 50,
    },
    created_at: {
        type: String,
        reuired: true,
    }
});

let Chat = new mongoose.model("Chat", chatSchema);


// it is use bexouse chat we are acces any where
module.exports = Chat;