const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connection succesful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats=[{
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
},
{
    from: "priya",
    to: "neha",
    msg: "ok i send you sheet",
    created_at: new Date(),
},
{
    from: "rahul",
    to: "shohan",
    msg: "kaha ho bhai",
    created_at: new Date(),
},
{
    from: "shohan",
    to: "rahul",
    msg: "ghar pr hu bhai kya baat",
    created_at: new Date(),
},
{
    from: "karan",
    to: "rahul",
    msg: "exam wagra ane wala h kya",
    created_at: new Date(),
},
{
    from: "shub",
    to: "shubham",
    msg: "nhi pata bhai kya baat",
    created_at: new Date(),
},
{
    from: "pajji",
    to: "diljit",
    msg: "sapna aya tha mujhe ki exam aane wale h",
    created_at: new Date(),
},
{
    from: "bhoot",
    to: "bhootani",
    msg: "bhai bura spana mat dekha kr",
    created_at: new Date(),
},
{
    from: "chudel",
    to: "cchand",
    msg: "chal koi nhi chhor use criket khelne chale",
    created_at: new Date(),
},
]



Chat.insertMany(allChats);
