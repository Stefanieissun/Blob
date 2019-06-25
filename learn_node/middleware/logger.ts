import { Request } from "express";
import { Response } from "_@types_express-serve-static-core@4.16.7@@types/express-serve-static-core";

function log(req:Request,res:Response,next:Function){
  console.log('logging....');
  next();
}

export =log;
