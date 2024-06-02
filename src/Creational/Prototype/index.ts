interface IDatabase {
    save(key: string, value: string): void;
    load(key: string): Array<any>;
    clone(): Database;
}

class Database implements IDatabase {
    private data:Array<any> = []

    constructor() {
        this.data = [];
    }

    save(data:any): void {
        console.log(`Saving to  database`);
        this.data  = data;
    }

    load(): Array<any> {
        console.log(`Loading from  database `);
        return this.data;
    }

    clone(): Database {
        const newDataBase = new Database();
        Object.assign(newDataBase.data, this.data);
        return newDataBase;
    }
}

export default  Database ;