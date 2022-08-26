const afs = require('@agacraft/fs');
require('@agacraft/extensions/Object');
require('@agacraft/extensions/Array');

class Json {
  #object;
  constructor(obj = {}) {
    if (typeof obj == 'object') this.#object = JSON.parse(JSON.stringify(obj));
    else throw TypeError(`"${obj}" not is a json valid`);
  }
  toObject() {
    return this.#object;
  }
  toString() {
    return JSON.stringify(this.#object, null, 2);
  }
  compare(Json) {
    return Json.toObject().compare(this.#object)
  }
  copy() {
    return new Json(this.toObject());
  }
  toFile(path) {
    afs.file(`${path}.json`, this.toString());
  }
}
module['exports'] = Json;
