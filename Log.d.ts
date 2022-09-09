/// <reference types="node" />
import '@agacraft/functions/colors';
declare type opts = {
    useFileLog?: boolean;
    dir?: string;
    fileName?: any;
    stream?: NodeJS.WriteStream;
};
declare class Log {
    #private;
    constructor(options?: opts);
    log(...message: string[]): void;
    warn(...message: string[]): void;
    info(...message: string[]): void;
    error(...message: string[]): void;
}
export = Log;
