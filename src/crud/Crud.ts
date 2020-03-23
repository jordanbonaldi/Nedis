import RedisClientOverride from "../database/RedisClientOverride";

export default interface Crud {

    /**
     *
     * @param id
     * @param data
     */
    create<T>(id: string, data: T): Promise<T>;

    /**
     *
     * @param id
     */
    read<T>(id: string): Promise<T>;

    /**
     *
     * @param id
     * @param data
     */
    update<T>(id: string, data: T): Promise<T>;

    /**
     *
     * @param id
     */
    delete(id: string): Promise<boolean>;

    /**
     *
     * @param id
     */
    getAll<T>(id: string): Promise<{value: string, data: T[]}[]>;
}