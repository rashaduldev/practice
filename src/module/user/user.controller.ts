import  httpStatus  from 'http-status';
import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";

const createStudent = async (req: Request, res: Response ,next:NextFunction) => {
  try {
    const { password, student } = req.body;    
    // console.log("Request Body:", req.body);

    const result = await userServices.createStudentintoDb(student,password);

    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:"One Student create successfully",
      data:result
    })
  } catch (err) {
   next(err);
  }
};

export const userControllers={
    createStudent,
}