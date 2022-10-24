"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const tslib_1 = require("tslib");
const changeValue = (value) => (target, propertyKey) => {
    console.log(target);
    console.log(propertyKey);
};
class Context {
    constructor() {
        this.context = {};
    }
    toString(value) {
        console.log(value);
    }
}
tslib_1.__decorate([
    changeValue(100)
], Context.prototype, "context", void 0);
exports.Context = Context;
const banana = new Context();
banana.context.runner.os = "Linux";
//# sourceMappingURL=context.js.map