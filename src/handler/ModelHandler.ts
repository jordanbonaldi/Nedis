import RedisModel from "../model/RedisModel";
import RedisCrud from "../crud/RedisCrud";
import RedisClientOverride from "../database/RedisClientOverride";

export default new (class ModelHandler{

    private models: Map<RedisModel, RedisCrud>;
    private client!: RedisClientOverride;

    constructor() {
        this.models = new Map<RedisModel, RedisCrud>();
    }
    
    setDatabaseConnector(client: RedisClientOverride) {
        this.client = client;
    }

    /**
     *
     * @param models
     */
    addModel(...models: RedisModel[]) {
        if (this.client == null)
            return;

        models.forEach(model =>
            this.models.set(model, new RedisCrud(this.client, model))
        );
    }

    /**
     *
     * @param model
     */
    getModel(model: RedisModel): RedisCrud {
        let crud = <RedisCrud>this.models.get(model);

        if (crud == null) {
            this.addModel(model);
            return <RedisCrud>this.models.get(model);
        }

        return crud;
    }
});