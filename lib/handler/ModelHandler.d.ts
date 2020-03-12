import RedisModel from "../model/RedisModel";
import RedisCrud from "../crud/RedisCrud";
import RedisClientOverride from "../database/RedisClientOverride";
declare const _default: {
    models: Map<RedisModel, RedisCrud>;
    client: RedisClientOverride;
    setDatabaseConnector(client: RedisClientOverride): void;
    /**
     *
     * @param models
     */
    addModel(...models: RedisModel[]): void;
    /**
     *
     * @param model
     */
    getModel(model: RedisModel): RedisCrud;
};
export default _default;
