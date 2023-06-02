import mongoose from 'mongoose'
const MongoUri ="mongodb+srv://sameer:Qwerty%401234@cluster0.9chcpsg.mongodb.net/"
const connectDB = async() => {
    try{
        const conn = await mongoose.connect(MongoUri)
        console.log("Connnected to mongodb")
    }
    catch(error){
        console.log(error);
    }
}
export default connectDB;