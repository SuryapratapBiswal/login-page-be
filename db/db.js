import mongoose from "mongoose";

export const Connection = async(USERNAME,PASSWORD)=>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-lxoe49v-shard-00-00.drhu3fd.mongodb.net:27017,ac-lxoe49v-shard-00-01.drhu3fd.mongodb.net:27017,ac-lxoe49v-shard-00-02.drhu3fd.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-ganep4-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        });
        console.log("Database connection Sucessfully")
    } catch (error) {
        console.log(`Error while connecting with database: ${error.message}`)
    }
}

export default Connection