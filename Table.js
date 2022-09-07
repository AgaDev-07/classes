module['exports'] = class Table {
  #table;
  #tableString;
  constructor(table = []) {
    this.#table = table;
  }
  addData(...data) {
    this.#table.push([...data]);
    return this;
  }
  #loadTable() {
    let length = [0];
    for (let i = 0; i < this.#table.length; i++)
      for (let e = 0; e < this.#table[i].length; e++) {
        const element = this.#table[i][e];
        if (element.length > (length[e]||0)) length[e] = element.length;
      }
    this.#tableString = this.#table
      .map(value => [value[0].setLength(length), value[1]])
      .map(value => value.join(' '))
      .join('\n');
  }
  getTable(){
    this.#loadTable();
    return this.#tableString;
  }
};
