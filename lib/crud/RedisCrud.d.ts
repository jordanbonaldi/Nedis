import Crud from './Crud';
import RedisClientOverride from "../database/RedisClientOverride";
import RedisModel, { Data } from "../model/RedisModel";
export default class RedisCrud implements Crud {
    private client;
    private model;
    /**
     *
     * @param client
     * @param model
     */
    constructor(client: RedisClientOverride, model: RedisModel);
    select(): Promise<void>;
    /**
     *
     * @param id
     * @param data
     */
    create<T>(id: string, data: Data): Promise<T & Data>;
    /**
     *
     * @param id
     */
    delete(id: string): Promise<boolean>;
    /**
     *
     * @param id
     */
    read<T>(id: string): Promise<T & Data>;
    /**
     *
     * @param id
     * @param data
     */
    update<T>(id: string, data: Data): Promise<T & Data>;
    getAll<T>(id: string): Promise<T[] & Data>;
}
