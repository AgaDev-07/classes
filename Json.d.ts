import '@agacraft/extension/Object';
import '@agacraft/extension/Array';
declare class Json<T = {}> {
    #private;
    constructor(obj?: T);
    toObject(): T;
    toString(): string;
    compare(Json: Json<Object>): Boolean;
    copy(): Json<T>;
    toFile(path: string): void;
}
export = Json;
