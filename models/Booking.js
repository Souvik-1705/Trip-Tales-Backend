import mongoose from "mongoose";

const bookingSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    destination:{type:mongoose.Schema.Types.ObjectId,ref:"Destination",required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    travellers:{type:Number,required:true},
    travelDate:{type:Date,required:true},
    status:{
        type:String,
        enum:["pending","confirm","rejected"],
        default:"pending",
    }
},{timestamps:true});

export default mongoose.model("Booking",bookingSchema);