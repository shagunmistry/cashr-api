"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Homepage_1 = __importDefault(require("./Routes/Homepage"));
const app = express_1.default();
const port = 8080 || process.env.PORT;
app.use('/homepage', Homepage_1.default);
app.get("/", (req, res) => {
    res.send("Hi!");
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map