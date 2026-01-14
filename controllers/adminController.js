import jwt from "jsonwebtoken";

export const adminLogin=(req,res)=>{
    const{email,password}=req.body;

    if(email==="admin@gmail.com" && password==="admin123"){
        const token=jwt.sign({email,isAdmin:true},process.env.JWT_SECRET,{expiresIn:"1d"});
        return res.status(200).json({message:"Admin login successfull",token});
    }
    return res.status(401).json({message:"Invalid token"});
}