"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redis = require('redis');
var RedisClientOverride = /** @class */ (function () {
    /**
     *
     * @param client
     */
    function RedisClientOverride(client) {
        this.client = client;
    }
    /**
     *
     * @param id
     */
    RedisClientOverride.prototype.select = function (id) {
        var _this = this;
        return new Promise(function (resolve) { return _this.client.select(id, resolve); });
    };
    /**
     *
     * @param key
     * @param value
     */
    RedisClientOverride.prototype.set = function (key, value) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.client.set(key, value, function () { return resolve(JSON.parse(value)); });
        });
    };
    /**
     *
     * @param key
     */
    RedisClientOverride.prototype.get = function (key) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.client.get(key, function (err, value) { return resolve(JSON.parse(value)); });
        });
    };
    /**
     *
     * @param key
     */
    RedisClientOverride.prototype.delete = function (key) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.client.del(key, function (err) { return resolve(!err); });
        });
    };
    /**
     *
     * @param key
     */
    RedisClientOverride.prototype.getAll = function (key) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.client.keys(key + ":*", function (err, value) { return resolve(Promise.all(value.map(function (k) { return _this.get(k); }))); });
        });
    };
    return RedisClientOverride;
}());
exports.RedisClientOverride = RedisClientOverride;
exports.default = RedisClientOverride;
