/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("cors");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usersRouter = void 0;
const tslib_1 = __webpack_require__(1);
const usersRouter = tslib_1.__importStar(__webpack_require__(6));
exports.usersRouter = usersRouter;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __webpack_require__(2);
const controllers_1 = __webpack_require__(7);
const router = (0, express_1.Router)();
const apiURL = '/api/v1';
// const apiURL = process.env.API_URL;
router.get(`${apiURL}/users`, controllers_1.userController.getUsers);
router.get(`${apiURL}/users/:id`, controllers_1.userController.getUserById);
router.post(`${apiURL}/users`, controllers_1.userController.addUser);
router.put(`${apiURL}/users/:id`, controllers_1.userController.updateUser);
router.delete(`${apiURL}/users/:id`, controllers_1.userController.deleteUser);
exports["default"] = router;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userController = void 0;
const tslib_1 = __webpack_require__(1);
const userController = tslib_1.__importStar(__webpack_require__(8));
exports.userController = userController;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUserById = exports.getUsers = void 0;
const tslib_1 = __webpack_require__(1);
const bcrypt_1 = __webpack_require__(9);
const models_1 = __webpack_require__(10);
const getUsers = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield models_1.userSchema
        .find()
        .select('-passwordHash')
        .then((users) => {
        res.status(200).send(users);
    })
        .catch((error) => {
        const response = {
            message: 'Users are empty',
            error
        };
        res.status(400).json(response);
    });
});
exports.getUsers = getUsers;
const getUserById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield models_1.userSchema
        .findById(req.params.id)
        .select('-passwordHash')
        .then((user) => {
        res.status(200).send(user);
    })
        .catch((error) => {
        const response = {
            message: 'userSchema is empty',
            error
        };
        res.status(400).json(response);
    });
});
exports.getUserById = getUserById;
const addUser = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = {
        name: body.name,
        email: body.email,
        passwordHash: bcrypt_1.bcrypt.hashSync(body.password, 10),
        phone: body.phone,
        isAdmin: body.isAdmin,
        street: body.street,
        apartment: body.apartment,
        city: body.city,
        zip: body.zip,
        country: body.country
    };
    yield new models_1.userSchema(user)
        .save()
        .then((user) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const users = yield models_1.userSchema.find();
        res.status(201).send({ user, users });
    }))
        .catch((error) => {
        const response = {
            message: 'The userSchema cannot be created',
            error
        };
        res.status(400).json(response);
    });
});
exports.addUser = addUser;
const updateUser = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { params: { id }, body } = req;
    yield models_1.userSchema
        .findByIdAndUpdate({ _id: id }, body)
        .then((updatedUser) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const users = yield models_1.userSchema.find();
        res.status(200).send({ user: updatedUser, users });
    }))
        .catch((error) => {
        const response = {
            message: 'The userSchema cannot be updated',
            error
        };
        res.status(400).json(response);
    });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield models_1.userSchema
        .findByIdAndRemove(req.params.id)
        .then(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const users = yield models_1.userSchema.find();
        const response = {
            message: 'The user is deleted',
            users
        };
        res.status(200).json(response);
    }))
        .catch((error) => {
        const response = {
            message: 'The user is not deleted',
            error
        };
        res.status(400).json(response);
    });
});
exports.deleteUser = deleteUser;


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userSchema = void 0;
const tslib_1 = __webpack_require__(1);
const user_1 = tslib_1.__importDefault(__webpack_require__(11));
exports.userSchema = user_1.default;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const mongoose_1 = __webpack_require__(3);
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    phone: { type: String, required: true },
    apartment: { type: String, default: '' },
    street: { type: String, default: '' },
    city: { type: String, default: '' },
    zip: { type: String, default: '' },
    country: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false },
    profilePhoto: { type: { data: Buffer, contentType: String } },
    dateCreated: { type: Date, default: null },
    dateModified: { type: Date, default: Date.now }
}, { timestamps: true });
userSchema.virtual('id').get(function () {
    return this._id;
});
userSchema.set('toJSON', {
    virtuals: true
});
exports["default"] = (0, mongoose_1.model)('User', userSchema);


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("path");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const express_1 = tslib_1.__importDefault(__webpack_require__(2));
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(3));
const cors_1 = tslib_1.__importDefault(__webpack_require__(4));
const routes_1 = __webpack_require__(5);
const path = tslib_1.__importStar(__webpack_require__(12));
const app = (0, express_1.default)();
const port = 3000;
const connectionString = 'mongodb+srv://gowtham04raj:123asd123@clustereshop.stwfpfw.mongodb.net/?retryWrites=true';
const dbName = 'eshop-database';
// const port: string | number = process.env.PORT;
// const connectionString: string = process.env.CONNECTION_STRING;
// const dbName: string = process.env.DB_NAME;
const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: dbName
};
app.use((0, cors_1.default)());
app.use(routes_1.usersRouter.default);
app.use('/assets', express_1.default.static(path.join(__dirname, 'assets')));
// MongoDB Connection
mongoose_1.default
    .connect(connectionString, connectionOptions)
    .then(() => {
    const server = app.listen(port, () => console.log(`Server running on http://localhost:${port}/api/v1`));
    server.on('error', console.error);
})
    .catch((error) => {
    throw error;
});

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map