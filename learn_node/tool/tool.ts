import joi from 'joi'
import { Response } from 'express';

interface check{
  [index:string]:joi.Schema
}
export function validation(data:object,schema:check,res:Response){
  let checkData = joi.validate(data,schema);
  if(checkData.error){res.status(400).send(checkData.error.message);return false;}
  return true;
 }
