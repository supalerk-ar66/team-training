// src/app.ts
import "dotenv/config"  // โหลดไฟล์ .env เพื่อใช้ environment variables
import cors from "cors"  // นำเข้า cors เพื่อจัดการ cross-origin resource sharing
import express, { Express, Request, Response, NextFunction } from 'express'
import { myapiRoute } from './lib/myapi'  // นำเข้า routing ของ API
import { fruitRoute } from "./lib/fruit"  // นำเข้า routing ของผลไม้
import { RegisterRoutes } from "./myRoutes" //run อัตโนมัติ
//import { RegisterRoutes } from "./routes" runไม่อัตโนมัติ
import swaggerUi from "swagger-ui-express"
const app: Express = express()  // สร้างแอป Express
const port = Number(process.env.PORT) || 80  // กำหนดพอร์ตจาก environment variables หรือใช้พอร์ต 80 เป็นค่าเริ่มต้น

/*
let apikey="123456789"
app.use((req:Request,res:Response,next:NextFunction)=>{
  console.log("Middleware")
  if(req.headers.apikey!==apikey ){
    return res.status(401).json({error:"Unauthorized"})
  }
  next()
})
*/
// Middleware ด้านบนถูกคอมเมนต์ออก ถ้าใช้งานจะตรวจสอบ API key ใน headers

app.use(cors())  // ใช้ CORS middleware เพื่ออนุญาตให้มีการเข้าถึงจาก origin อื่น
app.use(express.json())  // ใช้ middleware สำหรับ parse JSON
app.use(express.raw())  // ใช้ middleware สำหรับรับข้อมูลที่เป็น buffer/raw
app.use(express.urlencoded({ extended: true }))  // ใช้ middleware สำหรับ parse URL-encoded data
app.use(express.static('static'))  // กำหนดให้ static เป็นโฟลเดอร์สำหรับไฟล์ static
app.use('/api/myapi', myapiRoute)  // ตั้งค่า route สำหรับ myapi
app.use('/api/fruits', fruitRoute)  // ตั้งค่า route สำหรับ fruits
RegisterRoutes(app) // route: /hello

/** hello */
app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",  // กำหนด URL ของไฟล์ swagger.json เพื่อใช้แสดงเอกสาร API
    },
  })
)

// app.get('*', (req, res, next) => {
//   res.sendFile(${process.cwd()}/static/index.html)
// })
// route ด้านบนถูกคอมเมนต์ออก ถ้าใช้งานจะส่งไฟล์ index.html เป็น default สำหรับทุก route ที่ไม่มีการจับคู่

app.listen(port, () => console.log(`Application is running on port http://localhost:${port}`))  // สั่งให้แอปฟังที่พอร์ตที่กำหนดและแสดงข้อความเมื่อเซิร์ฟเวอร์เริ่มทำงาน