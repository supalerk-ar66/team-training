"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myapiRoute = void 0;
const express_1 = __importDefault(require("express"));
exports.myapiRoute = express_1.default.Router();
const hello_1 = require("./hello");
exports.myapiRoute.get('/', (req, res) => {
    res.json((0, hello_1.hello)("My Express"));
});
// /api/myapi/area?width=3&height=4
exports.myapiRoute.get('/area', (req, res, next) => {
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const area = width * height;
    return res.json(area);
});
