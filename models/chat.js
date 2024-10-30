const mongoose =require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        reuired:true,
    },
    to:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        maxLenght:50,
    },
    created_at:{
        type:Date,
        required:true,
    }
});

const Chat = mongoose.model("chat",chatSchema);
module.exports=Chat;