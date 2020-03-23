import RedisModel from "./model/RedisModel";
import RedisDatabase from "./database/RedisDatabase";
import ModelHandler from "./handler/ModelHandler";
import RedisCrud from "./crud/RedisCrud";
import {Data} from './model/RedisModel'

export {
    RedisModel as RedisModel,
    ModelHandler as ModelHandler,
    RedisCrud as RedisCrud,
    Data as Data
}

export default RedisDatabase;
