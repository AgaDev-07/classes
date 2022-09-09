"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("@agacraft/fs"));
module.exports = class Lang {
    name;
    #lang;
    constructor(name = 'en_US', obj = {}) {
        this.name = name;
        this.#lang = JSON.parse(JSON.stringify(obj));
    }
    toString() {
        let lang = '';
        for (const key of Object.keys(this.#lang))
            lang += `${key}=${this.#lang[key]}\n`;
        return lang;
    }
    toObject() {
        return this.#lang;
    }
    setLang(key, value) {
        if (typeof value === 'string')
            this.#lang[key] = value;
    }
    copy() {
        return new Lang(this.name, this.#lang);
    }
    toFile(path) {
        fs_1.default.file(`${path}/${this.name}.lang`, this.toString());
    }
};
