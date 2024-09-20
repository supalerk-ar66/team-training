import "dotenv/config" 
import express, { Express, Request, Response,NextFunction } from 'express'
import cors from "cors"  // import เข้ามา
import {myapiRoute} from './lib/myapi'
import {fruitRoute} from "./lib/fruit"

const app: Express = express()
const port = Number(process.env.PORT) || 3000
let apikey="1234567890"

app.use(cors()) //ต้องมีตันนี้ก่อน import cors from "cors" 
app.use(express.json())
app.use(express.raw())
app.use(express.urlencoded({extended:true}))
app.use('/api/myapi',myapiRoute)
app.use('/api/fruits',fruitRoute)

app.use((req:Request,res:Response,next:NextFunction)=>{
  console.log("Middleware")
  if(req.headers.apikey!==apikey ){
    return res.status(401).json({error:"Unauthorized"})
  }
  next()
})

app.get('/hello',(req,res)=>{
    
    res.send("Hello 2")
})
app.get('/',(req,res)=>{
    res.send("Hello Express")
})
app.listen(port, () => console.log(`Application is running on port http://localhost:${port}`))