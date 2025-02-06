import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFoundRoute=(req:Request,res:Response,next:NextFunction)=>{
    res.status(httpStatus.NOT_FOUND).json({
        success:false,
        message:"Api not found",
    })
}

export default notFoundRoute;