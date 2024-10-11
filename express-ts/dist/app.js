"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
require("dotenv/config"); // โหลดไฟล์ .env เพื่อใช้ environment variables
const cors_1 = __importDefault(require("cors")); // นำเข้า cors เพื่อจัดการ cross-origin resource sharing
const express_1 = __importDefault(require("express"));
const myapi_1 = require("./lib/myapi"); // นำเข้า routing ของ API
const fruit_1 = require("./lib/fruit"); // นำเข้า routing ของผลไม้
const myRoutes_1 = require("./myRoutes"); //run อัตโนมัติ
//import { RegisterRoutes } from "./routes" runไม่อัตโนมัติ
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)(); // สร้างแอป Express
const port = Number(process.env.PORT) || 80; // กำหนดพอร์ตจาก environment variables หรือใช้พอร์ต 80 เป็นค่าเริ่มต้น
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
app.use((0, cors_1.default)()); // ใช้ CORS middleware เพื่ออนุญาตให้มีการเข้าถึงจาก origin อื่น
app.use(express_1.default.json()); // ใช้ middleware สำหรับ parse JSON
app.use(express_1.default.raw()); // ใช้ middleware สำหรับรับข้อมูลที่เป็น buffer/raw
app.use(express_1.default.urlencoded({ extended: true })); // ใช้ middleware สำหรับ parse URL-encoded data
app.use(express_1.default.static('static')); // กำหนดให้ static เป็นโฟลเดอร์สำหรับไฟล์ static
app.use('/api/myapi', myapi_1.myapiRoute); // ตั้งค่า route สำหรับ myapi
app.use('/api/fruits', fruit_1.fruitRoute); // ตั้งค่า route สำหรับ fruits
(0, myRoutes_1.RegisterRoutes)(app); // route: /hello
/** hello */
app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json", // กำหนด URL ของไฟล์ swagger.json เพื่อใช้แสดงเอกสาร API
    },
}));
// app.get('*', (req, res, next) => {
//   res.sendFile(${process.cwd()}/static/index.html)
// })
// route ด้านบนถูกคอมเมนต์ออก ถ้าใช้งานจะส่งไฟล์ index.html เป็น default สำหรับทุก route ที่ไม่มีการจับคู่
app.listen(port, () => console.log(`Application is running on port http://localhost:${port}`)); // สั่งให้แอปฟังที่พอร์ตที่กำหนดและแสดงข้อความเมื่อเซิร์ฟเวอร์เริ่มทำงาน
