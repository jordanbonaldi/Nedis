import Crud from './Crud';
import RedisClientOverride from "../database/RedisClientOverride";
import RedisModel, {Data} from "../model/RedisModel";

export default class RedisCrud implements Crud {

    private client: RedisClientOverride;
    private model: RedisModel;

    /**
     *
     * @param client
     * @param model
     */
    public constructor(client: RedisClientOverride, model: RedisModel) {
        this.client = client;
        this.model = model;
    }

    select(): Promise<void> {
        return this.client.select(this.model.databaseId);
    }

    /**
     *
     * @param id
     * @param data
     */
    create<T>(id: string, data: Data): Promise<T & Data> {
        return this.select().then(() => this.client.set(id, JSON.stringify(data)));
    }

    /**
     *
     * @param id
     */
    delete(id: string): Promise<boolean> {
        return this.select().then(() => this.client.delete(id));
    }

    /**
     *
     * @param id
     */
    read<T>(id: string): Promise<T & Data> {
        return this.select().then(() => this.client.get(id));
    }

    /**
     *
     * @param id
     * @param data
     */
    update<T>(id: string, data: Data): Promise<T & Data> {
        return this.select().then(() => this.create(id, data))
    }

    getAll<T>(id: string): Promise<{value: string, data: T}[] & Data> {
        return this.select().then(() => this.client.getAll(id));
    }

}