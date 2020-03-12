"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ModelHandler_1 = require("../handler/ModelHandler");
var redis = require('redis');
var RedisClientOverride_1 = require("./RedisClientOverride");
var RedisDatabase = /** @class */ (function (_super) {
    __extends(RedisDatabase, _super);
    function RedisDatabase(host, password, keepalive) {
        if (keepalive === void 0) { keepalive = true; }
        return _super.call(this, redis.createClient({
            host: host,
            password: password,
            socket_keepalive: keepalive
        })) || this;
    }
    RedisDatabase.prototype.connect = function () {
        var _this = this;
        return new Promise(function (resolve) { return _this.client.on('connect', resolve); }).then(function () {
            ModelHandler_1.default.setDatabaseConnector(_this);
            return _this;
        });
    };
    RedisDatabase.prototype.closeConnection = function () {
        var _this = this;
        return new Promise(function (resolve) { return _this.client.quit(resolve); });
    };
    return RedisDatabase;
}(RedisClientOverride_1.default));
exports.RedisDatabase = RedisDatabase;
exports.default = RedisDatabase;
