const redis = require('redis');

interface RedisClient{

    /**
     *
     * @param key
     * @param value
     * @param callback
     */
    set(key: string, value: string, callback: any): void,

    /**
     *
     * @param key
     * @param callback
     */
    get(key: string, callback: any): void,

    /**
     *
     * @param key
     * @param callback
     */
    del(key: string, callback: any): void,

    /**
     *
     * @param id
     * @param callback
     */
    select(id: number, callback: any): void,

    /**
     *
     * @param key
     * @param callback
     */
    keys(key: string, callback: any): void,

    /**
     *
     * @param event
     * @param callback
     */
    on(event: string, callback: any): void,

    /**
     *
     * @param callback
     */
    quit(callback: any): void;
}

export abstract class RedisClientOverride{

    protected client: RedisClient;

    /**
     *
     * @param client
     */
    protected constructor(client: any) {
        this.client = client;
    }

    /**
     *
     * @param id
     */
    select(id: number): Promise<void> {
        return new Promise<void>((resolve: any) => this.client.select(id, resolve));
    }

    /**
     *
     * @param key
     * @param value
     */
    set<T>(key: string, value: string): Promise<T> {
        return new Promise<T>((resolve: any) =>
            this.client.set(key, value, () => resolve(JSON.parse(value)))
        );
    }

    /**
     *
     * @param key
     */
    get<T>(key: string): Promise<T> {
        return new Promise<T>((resolve: any) =>
            this.client.get(key, (err: any, value: string) => resolve(JSON.parse(value)))
        );
    }

    /**
     *
     * @param key
     */
    delete<T>(key: string): Promise<boolean> {
        return new Promise<boolean>((resolve: any) =>
            this.client.del(key, (err: any) => resolve(!err))
        );
    }

    /**
     *
     * @param key
     */
    getAll<T>(key: string): Promise<{value: string, data: T}[]> {
        return new Promise<{value: string, data: T}[]>((resolve: any) =>
            this.client.keys(`${key}:*`,
                (err: any, value: any) => resolve(Promise.all(value.map((k: string) =>
                    this.get(k).then((data) => {
                        let splittedValues: string[] = k.split(':');
                        return {
                            value: splittedValues[splittedValues.length - 1],
                            data: data
                        }
                    })
                ))
            )
        ));
    }
}

export default RedisClientOverride;