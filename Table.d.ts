declare class Table {
  constructor(info: String[][]);
  addData(...args: String[]): Table;
  getTable(): String;
}
export = Table;
