import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';


const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:"One Student is retrieved succesfully",
      data:result
    })  
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
