import config from 'config'//获取配置信息
import express  from 'express'
import router  from './router/course'
import debug from 'debug'
import helmet from 'helmet'
import morgan from 'morgan'
const app = express();
const startupDebugger = debug('app:start');
const dbDebugger = debug('app:db');
app.use(express.json());//接受post请求传递的json数据
app.use(express.urlencoded());//
app.use(helmet());//http 安全
app.use(express.static('./public/'));//静态资源
// app.use(log);
if(process.env.NODE_ENV==='development'){
  startupDebugger('Morgan is running');
app.use(morgan('tiny',{buffer:true,immediate:false}));
}
console.log(config.get('name'));

//Db work
dbDebugger('Connected to the database');//export DEBUG=app:db

app.use('/api/course',router);
// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`listening on port ${PORT}`));
