"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const { Client } = pg_1.default;
const client = new Client();
await client.connect();
const res = await client.query('SELECT * FROM links');
console.log(res);
await client.end();
//# sourceMappingURL=linksModel.js.map