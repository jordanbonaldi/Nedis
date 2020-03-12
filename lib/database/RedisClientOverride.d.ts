interface RedisClient {
    /**
     *
     * @param key
     * @param value
     * @param callback
     */
    set(key: string, value: string, callback: any): void;
    /**
     *
     * @param key
     * @param callback
     */
    get(key: string, callback: any): void;
    /**
     *
     * @param key
     * @param callback
     */
    del(key: string, callback: any): void;
    /**
     *
     * @param id
     * @param callback
     */
    select(id: number, callback: any): void;
    /**
     *
     * @param key
     * @param callback
     */
    keys(key: string, callback: any): void;
    /**
     *
     * @param event
     * @param callback
     */
    on(event: string, callback: any): void;
    /**
     *
     * @param callback
     */
    quit(callback: any): void;
}
export declare abstract class RedisClientOverride {
    protected client: RedisClient;
    /**
     *
     * @param client
     */
    protected constructor(client: any);
    /**
     *
     * @param id
     */
    select(id: number): Promise<void>;
    /**
     *
     * @param key
     * @param value
     */
    set<T>(key: string, value: string): Promise<T>;
    /**
     *
     * @param key
     */
    get<T>(key: string): Promise<T>;
    /**
     *
     * @param key
     */
    delete<T>(key: string): Promise<boolean>;
    /**
     *
     * @param key
     */
    getAll<T>(key: string): Promise<T[]>;
}
export default RedisClientOverride;
