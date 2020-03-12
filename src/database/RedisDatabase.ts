import ModelHandler from "../handler/ModelHandler";

const redis = require('redis');
import Database from './Database';
import RedisClientOverride from "./RedisClientOverride";

export class RedisDatabase extends RedisClientOverride implements Database{

    public constructor(host: string, password: string, keepalive: boolean|null = true) {
        super(redis.createClient({
            host: host,
            password: password,
            socket_keepalive: keepalive
        }));
    }

    public connect(): Promise<unknown> {
        return new Promise<RedisDatabase & Database>(
            (resolve: any) => this.client.on('connect', resolve)
        ).then((value: unknown) => ModelHandler.setDatabaseConnector(this));
    }

    public closeConnection(): Promise<void> {
        return new Promise<void>((resolve: any) => this.client.quit(resolve));
    }
}

export default RedisDatabase;