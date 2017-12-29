"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
app.use(ctx => {
    ctx.body = 'Hello Koa';
});
app.listen(3000);
console.log('app start at 3000');
//# sourceMappingURL=app.js.map