const mongoose=require('mongoose')
//fonction de connexion avec base de donne 
const dbconnect=async()=>{
    try {   
        await mongoose.connect(process.env.DBURL)
console.log("data base is connected")
        
    } catch (error) {
        console.log(error)
    }
    
}
module.exports=dbconnect
