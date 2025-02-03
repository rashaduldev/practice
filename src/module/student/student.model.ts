import { Schema, model } from 'mongoose';
import { Student } from './student.interface';


// const userNameSchema = new Schema<UserName>({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   middleName: {
//     type: String,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
// });

// const guardianSchema = new Schema<Guardian>({
//   fatherName: {
//     type: String,
//     required: true,
//   },
//   fatherOccupation: {
//     type: String,
//     required: true,
//   },
//   fatherContactNo: {
//     type: String,
//     required: true,
//   },
//   motherName: {
//     type: String,
//     required: true,
//   },
//   motherOccupation: {
//     type: String,
//     required: true,
//   },
//   motherContactNo: {
//     type: String,
//     required: true,
//   },
// });

// const localGuradianSchema = new Schema<LocalGuardian>({
//   name: {
//     type: String,
//     required: true,
//   },
//   occupation: {
//     type: String,
//     required: true,
//   },
//   contactNo: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
// });

const studentSchema = new Schema<Student>({
  id: { type: String },
  // name: {type: String},
  name:{type:{
    firstName: { type: String},
    middleName: { type: String},
    lastName: { type: String},
  }  },
  user:{
    type:Schema.Types.ObjectId,
    required: [true,'User id is required'],
    unique: true,
    ref:'User'
  },
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloogGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {type: {
    fatherName: String,
    fatherOccupation: String,
    fatherContactNo: String,
    motherName:String,
    motherOccupation: String,
    motherContactNo: String
  }, required: true},
  localGuardian: {type: {
    name: String,
      occupation: String,
      contactNo: String,
      address: String,
  }, required: true},
  profileImg: { type: String },
});

export const StudentModel = model<Student>('Student', studentSchema);
