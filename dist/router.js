"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const linksController_js_1 = require("./controllers/linksController.js");
const router = express_1.default.Router();
const middleWare = (req, res, next) => {
    console.log(new Date(), '[Request]', req.url);
    next();
};
router.use(middleWare);
router.get('/', (req, res) => {
    res.send('Reached API');
});
router.get('/links', linksController_js_1.getLinks);
exports.default = router;
//# sourceMappingURL=router.js.map