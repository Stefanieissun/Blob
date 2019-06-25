import mongoose from 'mongoose'


mongoose.connect('mongodb://localhost/Blob').then(()=>{
  console.log('connectd mongodb')
}).catch(err=>console.error(err))

const courseScheam = new mongoose.Schema({
  name:String,
  author:String,
  tags:[String],
  date:{type:Date,default:Date.now},
  isPublish:Boolean,
})
const Course= mongoose.model('Course',courseScheam)

// async function createCourse(){

// const course=new Course({
//   name:"nodejs",
//   author:"Mosh",
//   tags:['nodejs','fronted'],
//   // date: Date.now(),
//   isPublish:true
// })
// const result =await course.save();
// console.log(result);
// }
// // createCourse();
async function getCourse(){
let result= await Course.find({author:'Mosh'},{_id:0}).limit(10).sort({name:1});
console.log(result);
}
getCourse();
