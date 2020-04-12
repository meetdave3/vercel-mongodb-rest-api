"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var db_1 = require("./_utils/db");
var auth_1 = require("./_utils/auth");
exports["default"] = (function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var body, headers, authorization, collectionName, databaseConnection, collection, _a, _b, _c, _d, filter, document_1, _e, _f, _g, document_2, _h, _j, _k, filter, _l, _m, _o, e_1;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                body = req.body;
                headers = req.headers;
                authorization = headers.authorization;
                // First, check if the API request is authorized
                if ((!authorization || authorization.indexOf('Basic ') === -1) ||
                    auth_1["default"](authorization) === false) {
                    return [2 /*return*/, res.status(401).json({ message: 'Unauthorized' })];
                }
                collectionName = body.collectionName;
                if (!collectionName) {
                    return [2 /*return*/, res.status(400).json({ message: 'Please provide a valid collection name' })];
                }
                _p.label = 1;
            case 1:
                _p.trys.push([1, 13, , 14]);
                return [4 /*yield*/, db_1["default"]()];
            case 2:
                databaseConnection = _p.sent();
                collection = databaseConnection.collection(collectionName);
                _a = req.method;
                switch (_a) {
                    case 'GET': return [3 /*break*/, 3];
                    case 'PUT': return [3 /*break*/, 5];
                    case 'POST': return [3 /*break*/, 7];
                    case 'DELETE': return [3 /*break*/, 9];
                }
                return [3 /*break*/, 11];
            case 3:
                _c = (_b = res.status(200)).json;
                _d = {};
                return [4 /*yield*/, collection.find({}).toArray()];
            case 4: return [2 /*return*/, _c.apply(_b, [(_d.data = _p.sent(), _d)])];
            case 5:
                filter = body.filter, document_1 = body.document;
                _f = (_e = res.status(200)).json;
                _g = {};
                return [4 /*yield*/, collection.updateOne(filter, { $set: document_1 }, { upsert: true })];
            case 6: return [2 /*return*/, _f.apply(_e, [(_g.data = _p.sent(), _g)])];
            case 7:
                document_2 = body.document;
                _j = (_h = res.status(200)).json;
                _k = {};
                return [4 /*yield*/, collection.insertOne(document_2)];
            case 8: return [2 /*return*/, _j.apply(_h, [(_k.data = _p.sent(), _k)])];
            case 9:
                filter = body.filter;
                _m = (_l = res.status(200)).json;
                _o = {};
                return [4 /*yield*/, collection.deleteOne(filter)];
            case 10: return [2 /*return*/, _m.apply(_l, [(_o.data = _p.sent(), _o)])];
            case 11: return [2 /*return*/, res.status(400).json({ message: 'HTTP Method not supported' })];
            case 12: return [3 /*break*/, 14];
            case 13:
                e_1 = _p.sent();
                console.error(e_1);
                res.status(500).json({ message: 'Internal Sever Error' });
                return [3 /*break*/, 14];
            case 14: return [2 /*return*/];
        }
    });
}); });
