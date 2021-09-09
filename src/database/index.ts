import { createConnection, getConnectionOptions } from "typeorm";

//createConnection();
interface IOptions {
    host: string;
}

getConnectionOptions().then((options) => {
    const newOptions = options as IOptions;
    newOptions.host = "ignite_database";
    createConnection({
        ...options,
    });
});
