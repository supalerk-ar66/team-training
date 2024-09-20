"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
let apikey = "123456789";
app.use((req, res, next) => {
    console.log("Middleware");
    if (req.headers.apikey !== apikey) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
});
app.get('/hello', (req, res) => {
    res.send("Hello 2");
});
app.get('/', (req, res) => {
    res.send("Hello Express");
});
app.listen(port, () => console.log(`Application is running on port ${port}`));
