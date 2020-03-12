"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RedisCrud = /** @class */ (function () {
    /**
     *
     * @param client
     * @param model
     */
    function RedisCrud(client, model) {
        this.client = client;
        this.model = model;
    }
    RedisCrud.prototype.select = function () {
        return this.client.select(this.model.databaseId);
    };
    /**
     *
     * @param id
     * @param data
     */
    RedisCrud.prototype.create = function (id, data) {
        var _this = this;
        return this.select().then(function () { return _this.client.set(id, JSON.stringify(data)); });
    };
    /**
     *
     * @param id
     */
    RedisCrud.prototype.delete = function (id) {
        var _this = this;
        return this.select().then(function () { return _this.client.delete(id); });
    };
    /**
     *
     * @param id
     */
    RedisCrud.prototype.read = function (id) {
        var _this = this;
        return this.select().then(function () { return _this.client.get(id); });
    };
    /**
     *
     * @param id
     * @param data
     */
    RedisCrud.prototype.update = function (id, data) {
        var _this = this;
        return this.select().then(function () { return _this.create(id, JSON.stringify(data)); });
    };
    RedisCrud.prototype.getAll = function (id) {
        var _this = this;
        return this.select().then(function () { return _this.client.getAll(id); });
    };
    return RedisCrud;
}());
exports.default = RedisCrud;
