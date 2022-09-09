import Information from './Information';
import Json from './Json';
import Lang from './Lang';
import Log from './Log';
import Table from './Table';
declare const _default: {
    Information: {
        new (info?: string[][]): Information;
    };
    Json: typeof Json;
    Lang: {
        new (name?: string, obj?: Object): Lang;
    };
    Log: typeof Log;
    Table: {
        new (table?: never[]): Table;
    };
};
export = _default;
