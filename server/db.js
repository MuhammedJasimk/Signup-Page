const mongoose = require('mongoose')


module.exports=()=>{

    try {
        mongoose.connect(process.env.DB)
        console.log("Database connected");
    } catch (error) {
        console.log(error);
        console.log("Database connection failed");
    }

    
}
