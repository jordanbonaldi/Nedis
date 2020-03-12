"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModelHandler_1 = require("../handler/ModelHandler");
var RedisModel = /** @class */ (function () {
    function RedisModel(databaseId, folder) {
        this.databaseId = databaseId;
        this.folder = folder;
    }
    RedisModel.prototype.create = function (id, data) {
        return ModelHandler_1.default.getModel(this).create(this.folder + ":" + id, data);
    };
    RedisModel.prototype.delete = function (id) {
        return ModelHandler_1.default.getModel(this).delete(this.folder + ":" + id);
    };
    RedisModel.prototype.read = function (id) {
        return ModelHandler_1.default.getModel(this).read(this.folder + ":" + id);
    };
    RedisModel.prototype.update = function (id, data) {
        return ModelHandler_1.default.getModel(this).update(this.folder + ":" + id, data);
    };
    RedisModel.prototype.getAll = function () {
        return ModelHandler_1.default.getModel(this).getAll("" + this.folder);
    };
    return RedisModel;
}());
exports.default = RedisModel;
