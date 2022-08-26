declare class Json <K>{
  constructor(obj: K);
  toObject(): K;
  toString(): String;
  copy(): Json<K>;
  compare(Json:Json): Boolean;
  toFile(path: fs.PathLike): void;
}
export = Json