import fs from 'fs';
declare class Log{
  constructor(options?: {stream?: NodeJS.WritableStream, useFileLog?: Boolean, dir?:fs.PathLike})
  log(...message: any[]): void;
  info(...message: any[]): void;
  warn(...message: any[]): void;
  error(...message: any[]): void;
}
export = Log;