"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RedisCrud_1 = require("../crud/RedisCrud");
exports.default = new (/** @class */ (function () {
    function ModelHandler() {
        this.models = new Map();
    }
    ModelHandler.prototype.setDatabaseConnector = function (client) {
        this.client = client;
    };
    /**
     *
     * @param models
     */
    ModelHandler.prototype.addModel = function () {
        var _this = this;
        var models = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            models[_i] = arguments[_i];
        }
        if (this.client == null)
            return;
        models.forEach(function (model) {
            return _this.models.set(model, new RedisCrud_1.default(_this.client, model));
        });
    };
    /**
     *
     * @param model
     */
    ModelHandler.prototype.getModel = function (model) {
        var crud = this.models.get(model);
        if (crud == null) {
            this.addModel(model);
            return this.models.get(model);
        }
        return crud;
    };
    return ModelHandler;
}()));
