import mongoose from "mongoose";

const destinationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    country:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
},{timestamps:true});

export default mongoose.model("Destination",destinationSchema);