import Booking from "../models/Booking.js";

export const createBooking=async(req,res)=>{
    try {
        const booking=new Booking({...req.body,user:req.user.id});
        const savedBooking=await booking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(500).json({messgae:error.message});
    }
};

export const getBookings=async(req,res)=>{
    try {
        const bookings=await Booking.find().populate("destination");
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const getMyBookings=async(req,res)=>{
    try {
        const bookings=await Booking.find({user:req.user.id}).populate("destination");
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const confirmBooking=async(req,res)=>{
    try {
        const booking=await Booking.findByIdAndUpdate(req.params.id,{status:"confirmed"},{new:true});
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const rejectBooking=async(req,res)=>{
    try {
        const booking=await Booking.findByIdAndUpdate(req.params.id,{status:"rejected"},{new:true});
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteBooking=async(req,res)=>{
    try {
        const booking=await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Booking Deleted"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}