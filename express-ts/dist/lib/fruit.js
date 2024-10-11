"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruitRoute = void 0;
const express_1 = __importDefault(require("express"));
exports.fruitRoute = express_1.default.Router();
/* C R U D
GET /api/fruits (GET array of fruit) R
GET /api/fruits/1 (GET a fruit) R
POST /api/fruits (Create fruit) C
PATCH /api/fruits/1 (Update fruit) U
DELETE /api/fruits/1 (Delete a fruit) D filter
*/
let _fruit = [
    { id: 1, name: "Apple", color: "green" },
    { id: 2, name: "Apple", color: "red" },
];
exports.fruitRoute.get('/', (req, res) => {
    res.json(_fruit);
});
exports.fruitRoute.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const afruit = _fruit.find((e) => e.id === id);
    res.json(afruit);
});
exports.fruitRoute.post('/', (req, res) => {
    const id = Date.now();
    console.log(req.body);
    const afruit = Object.assign({ id }, req.body);
    _fruit.push(afruit);
    res.status(201).json(afruit);
});
exports.fruitRoute.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const afruit = _fruit.find((e) => e.id === id);
    if (afruit) {
        _fruit = _fruit.filter(e => e.id !== id);
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
exports.fruitRoute.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const afruit = _fruit.find((e) => e.id === id);
    console.log(afruit);
    if (afruit) {
        _fruit = _fruit.filter(e => e.id !== id);
        const updatedFruit = Object.assign(Object.assign({}, afruit), req.body);
        _fruit.push(updatedFruit);
        res.status(200).json(updatedFruit);
    }
    else {
        res.sendStatus(404);
    }
});
