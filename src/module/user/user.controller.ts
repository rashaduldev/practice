import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";

const createStudent = async (req: Request, res: Response ,next:NextFunction) => {
  try {
    const { password, student } = req.body;    
    // console.log("Request Body:", req.body);

    const result = await userServices.createStudentintoDb(student,password);

    res.status(200).json({
      success: true,    
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
   next(err);
  }
};

export const userControllers={
    createStudent,
}