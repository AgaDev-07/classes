"use strict";
module.exports = class Table {
    #table;
    #tableString;
    constructor(table = []) {
        this.#table = table;
        this.#tableString = '';
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
                if (element.length > (length[e] || 0))
                    length[e] = element.length;
            }
        this.#tableString = this.#table.map((row) => {
            let string = ' | ';
            for (let i = 0; i < row.length; i++) {
                const element = row[i];
                string += `${element}${' '.repeat(length[i] - element.length)} | `;
            }
            return string;
        }).join('\n');
    }
    getTable() {
        this.#loadTable();
        return this.#tableString;
    }
    print() {
        this.#loadTable();
        console.log(this.#tableString);
        return this;
    }
};
