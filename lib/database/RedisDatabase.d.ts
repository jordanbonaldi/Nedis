import Database from './Database';
import RedisClientOverride from "./RedisClientOverride";
export declare class RedisDatabase extends RedisClientOverride implements Database {
    constructor(host: string, password: string, keepalive?: boolean | null);
    connect(): Promise<RedisDatabase & Database>;
    closeConnection(): Promise<void>;
}
export default RedisDatabase;
