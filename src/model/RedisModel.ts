import Crud from "../crud/Crud";
import ModelHandler from "../handler/ModelHandler";

export interface Data {}

export default abstract class RedisModel implements Crud{
    public databaseId: number;
    public folder: string;

    protected constructor(databaseId: number, folder: string) {
        this.databaseId = databaseId;
        this.folder = folder;
    }

    create<T>(id: string, data: Data): Promise<T & Data> {
        return ModelHandler.getModel(this).create(`${this.folder}:${id}`, data);
    }

    delete(id: string): Promise<boolean> {
        return ModelHandler.getModel(this).delete(`${this.folder}:${id}`);
    }

    read<T>(id: string): Promise<T & Data> {
        return ModelHandler.getModel(this).read(`${this.folder}:${id}`);
    }

    update<T>(id: string, data: T): Promise<T> {
        return ModelHandler.getModel(this).update(`${this.folder}:${id}`, data);
    }

    getAll<T>(): Promise<T[] & Data> {
        return ModelHandler.getModel(this).getAll(`${this.folder}`);
    }
}