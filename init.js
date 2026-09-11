const mongoose =  require("mongoose");
const chat =  require("./models/chat.js");


main()
.then((res) => {
    console.log("Connection Successfully");
}).catch((err) => {
    console.log(err);
});

async function main(){

     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChat = [ 
    
    {
        from: "adam",
        to: "eveea",
        msg: "hello! whatsapp gys",
        created_at: new Date(),
    },
       {
        from: "Cr7",
        to: "himani",
        msg: "hello! how are you Himani",
        created_at: new Date(),
    },
       {
        from: "rohit",
        to: "kartik",
        msg: "hello! kartik are you will go scholl today",
        created_at: new Date(),
    },
       {
        from: "amit",
        to: "sumit",
        msg: "hello! sumit where are from",
        created_at: new Date(),
    },
       {
        from: "amressh",
        to: "gagan",
        msg: "hello! gagan let s play footbal",
        created_at: new Date(),
    },
       {
        from: "vishla",
        to: "aman",
        msg: "hello! aman let us go rishiskesh",
        created_at: new Date(),
    },
       {
        from: "vansh",
        to: "rajiya",
        msg: "hello! rajiya how are you",
        created_at: new Date(),
    },
];


chat.insertMany(allChat);
