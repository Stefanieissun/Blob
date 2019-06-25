import express from 'express'
import joi from 'joi'
import {validation}  from '../tool/tool'
const courese=[{id:1,name:'Math'},{id:2,name:'Chinese'},
    {id:3,name:'history'},{id:4,name:'English'}
];
const router=express.Router();

router.get('/',(req,res)=>{
  res.send(courese);
})
router.get('/:id',(req,res)=>{
  let dataSchema={
    id:joi.string().required(),
  };
  validation(req.params,dataSchema,res);
  let data=courese.find(x=>x.id===Number(req.params.id));
  if(!data)res.status(404).send('NO data');
  res.send(data);
})

router.post('/',(req,res)=>{
  let dataSchema = {
    name:joi.string().required().min(2),
  };
  if(!validation(req.body,dataSchema,res)) {return;}
  const data = {
    id:courese.length+1,
    name:req.body.name,
  }
  courese.push(data);
  res.send(data);
})
router.put('/:id',(req,res)=>{

  const dataSchema = {
    name:joi.string().required().min(2),
  }
  if(!validation(req.body,dataSchema,res)) {return;}
  let index = courese.findIndex(x=>x.id===Number(req.params.id));
  if(index===-1){res.status(400).send('no data');return;}
  courese[index].name=req.body.name;
  res.send(courese[index]);
})

router.delete('/:id',(req,res)=>{
  const dataSchema = {
    id:joi.string().required().min(1),
  }
  if(!validation(req.body,dataSchema,res)) {return;}
  let index = courese.findIndex(x=>x.id===Number(req.params.id));
  if(index===-1){res.status(400).send('找不到数据');return;}
  courese.splice(index,1);
  res.send('删除成功');
})

export default  router;
