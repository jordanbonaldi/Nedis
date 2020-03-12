import Crud from "../crud/Crud";
export interface Data {
}
export default abstract class RedisModel implements Crud {
    databaseId: number;
    folder: string;
    protected constructor(databaseId: number, folder: string);
    create<T>(id: string, data: Data): Promise<T & Data>;
    delete(id: string): Promise<boolean>;
    read<T>(id: string): Promise<T & Data>;
    update<T>(id: string, data: T): Promise<T>;
    getAll<T>(): Promise<T[] & Data>;
}
