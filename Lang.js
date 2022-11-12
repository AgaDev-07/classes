"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("../fs"));
const DEFAULT_NAME = 'en_US';
module.exports = class Lang {
    name;
    #lang;
    constructor(name = DEFAULT_NAME, obj = {}) {
        this.name = name;
        this.#lang = JSON.parse(JSON.stringify(obj));
    }
    static read(path) {
        const name = path.split(' ')?.pop()?.split('.').shift();
        const lang = new Lang(name);
        const data = fs_1.default.readFile(path).toString();
        for (const line of data.split('\n')) {
            const [key, value] = line.split('=');
            lang.setLang(key, value);
        }
        return lang;
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
    copy(name) {
        return new Lang(name, this.#lang);
    }
    toFile(path) {
        fs_1.default.file(`${path}/${this.name}.lang`, this.toString());
    }
};
