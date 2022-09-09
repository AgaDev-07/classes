"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("../fs"));
require("@agacraft/extension/Object");
require("@agacraft/extension/Array");
class Json {
    #object;
    constructor(obj = {}) {
        if (typeof obj == 'object')
            this.#object = JSON.parse(JSON.stringify(obj));
        else
            throw TypeError(`"${obj}" not is a json valid`);
    }
    toObject() {
        return this.#object;
    }
    toString() {
        return JSON.stringify(this.#object, null, 2);
    }
    compare(Json) {
        return Json.toObject().compare(this.#object);
    }
    copy() {
        return new Json(this.toObject());
    }
    toFile(path) {
        fs_1.default.file(`${path}.json`, this.toString());
    }
}
module.exports = Json;
