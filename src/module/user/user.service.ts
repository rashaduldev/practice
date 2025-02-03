import config from '../../config/config';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import {User} from './user.model'
const createStudentintoDb=async (studentData:Student,password:string)=>{
    const userData:Partial<TUser>={};
    // console.log("user data=",userData);
    
    userData.password = password || (config.default_password as string);

    userData.role='student';
    userData.id='203010101';
    // console.log("user data=",userData);
    
    // create a user
    const newUser=await User.create(userData);
    if (Object.keys(newUser).length) {
        studentData.id=newUser.id;
        studentData.user=newUser._id;
        const newStudent=await StudentModel.create(studentData);
        return newStudent;
    }
}

export const userServices={
    createStudentintoDb,
}