import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config/config";

const userSchema=new Schema<TUser>({
    id:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    needPasswordChange:{
        type:Boolean,
        default:true,
    },
    role:{
        type:String,
        enum:['admin', 'faculty', 'student'],
    },
    status:{
        type:String,
        enum:['in-progress', 'blocked'],
        default:'in-progress',
    },
    isDeleted:{
        type:Boolean,
        default:false,
    },
},
{
    timestamps:true,
}
);

userSchema.pre('save', async function(next){
    const user=this;
    user.password=await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)
    );
    next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
  });
  

export const User=model<TUser>('users',userSchema)