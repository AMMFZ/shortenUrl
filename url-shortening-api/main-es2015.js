(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"myBody\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-12\">\n                <img src=\"../../assets/images/flogo.svg\" alt=\"logo\" />\n            </div><!-- ##.col -->\n            <div class=\"col-md-2 col-sm-4\">\n                <ul class=\"list-unstyled\">\n                    features\n                    <li><a href=\"javascript:void(0)\">link shortening</a></li>\n                    <li><a href=\"javascript:void(0)\">branded links</a></li>\n                    <li><a href=\"javascript:void(0)\">analytics</a></li>\n                </ul>\n            </div><!-- ##.col -->\n            <div class=\"col-md-2 col-sm-4\">\n              <ul class=\"list-unstyled\">\n                resourses\n                <li><a href=\"javascript:void(0)\">blog</a></li>\n                <li><a href=\"javascript:void(0)\">developers</a></li>\n                <li><a href=\"javascript:void(0)\">support</a></li>\n              </ul>\n            </div><!-- ##.col -->\n            <div class=\"col-md-2 col-sm-4\">\n              <ul class=\"list-unstyled\">\n                company\n                <li><a href=\"javascript:void(0)\">about</a></li>\n                <li><a href=\"javascript:void(0)\">our team</a></li>\n                <li><a href=\"javascript:void(0)\">careers</a></li>\n                <li><a href=\"javascript:void(0)\">contact</a></li>\n              </ul>\n            </div><!-- ##.col -->\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"social\">\n                <a href=\"javascript:void(0)\"><img src=\"../../assets/images/icon-facebook.svg\" alt=\"facebook-icon\" /></a>\n                <a href=\"javascript:void(0)\"><img src=\"../../assets/images/icon-instagram.svg\" alt=\"instagram-icon\" /></a>\n                <a href=\"javascript:void(0)\"><img src=\"../../assets/images/icon-twitter.svg\" alt=\"twitter-icon\" /></a>\n                <a href=\"javascript:void(0)\"><img src=\"../../assets/images/icon-pinterest.svg\" alt=\"pinterest-icon\" /></a>\n              </div>\n            </div><!-- ##.col -->\n        </div><!-- ##.row -->\n    </div><!-- ##.container -->\n    <div class=\"to-top\"><i class=\"fa fa-arrow-up\"></i></div>\n</div><!-- ##.footer -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-page page\">\n  <!-- header -->\n  <div class=\"header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"left-header\" @leftheader>\n            <h1>more than just shorter links</h1>\n            <p>build your brands recognition and get detailed insights in how your links are performing</p>\n            <button class=\"btn btn-success\" data-value=\"#startnow\" routerLink=\"/\">get started</button>\n          </div><!-- ##.left-header -->\n        </div><!-- ##.col-md-6 -->\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"right-header\" @rightheader>\n            <img src=\"../../assets/images/right-header.svg\" class=\"img-responsive\" alt=\"header-picture-right\" />\n          </div>\n        </div><!-- ##.col-md-6 -->\n      </div><!-- ##.row -->\n    </div><!-- ##.container -->\n  </div><!-- ##.header -->\n\n  <div class=\"features\">\n      <div class=\"feat-api\" id=\"startnow\" @featapi>\n        <div class=\"overlay\"></div>\n        <div class=\"container\">\n          <div class=\"row text-center\">\n            <div class=\"col-md-12\">\n              <form #myForm=\"ngForm\">\n                <div class=\"my-Form\">\n                  <!-- old pattern -> https?://.+ -->\n                  <input #ulink=\"ngModel\" ngModel [(ngModel)]=\"yourLink\" type=\"url\" id=\"myIn\"\n                         name=\"link\" class=\"form-control\"\n                         placeholder=\"ex: ( https:// yourlink -or- http:// your link )\"\n                         required\n                         pattern=\"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$\" />\n                  <button type=\"sybmit\" class=\"btn btn-success\" (click)=\"shortNow(myForm)\" [disabled]=\"myForm.invalid\">shorten it</button>\n                </div>\n                <p class=\"text-left error\" *ngIf=\"ulink.touched && ulink.errors?.required\">please add a right link {{error}}</p>\n                <p class=\"text-left error\" *ngIf=\"ulink.touched && ulink.errors?.pattern\">this is Not a link {{error}}</p>\n              </form>\n            </div>\n          </div>\n        </div><!-- ##.container -->\n      </div><!-- ##.feat-api -->\n      <div class=\"your-links\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"your-short\" *ngIf=\"forShowMsg\">\n                <span>{{mainLink}}</span>\n                <div class=\"here-short\">\n                  <span>{{shortLink}}</span>\n                  <button class=\"btn btn-success {{ifcopy}}\" (click)=\"copyMessage(shortLink)\">{{copy}}</button>\n                </div>\n              </div><!--  ##.your-short -->\n              <div class=\"your-short\" *ngIf=\"displayIfNot && !forShowMsg\">\n                <span style=\"color: #d73f33;text-align: center;font-weight: 600; text-transform: capitalize; margin: auto;\">{{ifNotSuccess}}</span>\n              </div><!--  ##.your-short -->\n            </div><!-- ##.col-md-12 -->\n          </div><!-- ##.row -->\n        </div><!-- ##.container -->\n      </div><!-- ##.your-links -->\n      <div class=\"feat-info\" id=\"features\">\n        <div class=\"container\" id=\"mid-feat\">\n          <div class=\"row text-center\">\n            <div class=\"col-md-12\">\n              <div class=\"feat-text\">\n                <h3>advanced statics</h3>\n                <p>track how your links are performing accross the web with our advansed statics dashboard</p>\n              </div>\n            </div>\n          </div><!-- ##.row -->\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"our-feats\" @leftfeatures>\n                <div class=\"feat-img\">\n                  <img src=\"../../assets/images/feat-one.svg\" alt=\"feat-icon\" class=\"img-responsive\" />\n                </div>\n                <h5>brand recognition</h5>\n                <p>\n                  boost your brand recognition with each click. generic links don't mean a thing.\n                  branded links help instil confidence in your content\n                </p>\n              </div>\n            </div><!-- ##.col-md-4 -->\n            <div class=\"col-md-4\">\n              <div class=\"our-feats\">\n                <div class=\"feat-img\">\n                  <img src=\"../../assets/images/feat-two.svg\" alt=\"feat-icon\" class=\"img-responsive\" />\n                </div>\n                <h5>detailed records</h5>\n                <p>\n                  gain insights into who is clicking your links, knowing when and where\n                  people angagae with your content helpsinform better decisions\n                </p>\n              </div>\n            </div><!-- ##.col-md-4 -->\n            <div class=\"col-md-4\" @rightfeatures>\n              <div class=\"our-feats\">\n                <div class=\"feat-img\">\n                  <img src=\"../../assets/images/feat-three.svg\" alt=\"feat-icon\" class=\"img-responsive\" />\n                </div>\n                <h5>fully customizable</h5>\n                <p>\n                  improve brand awareness and content discoverability through\n                  customizablelinks. supercharging audience engagement\n                </p>\n              </div>\n            </div><!-- ##.col-md-4 -->\n          </div><!-- ##.row -->\n        </div><!-- ##.container -->\n        <div class=\"row\">\n          <div class=\"col-md-12 last\" id=\"resources\">\n            <div class=\"overlay\"></div>\n            <div class=\"last-feat text-center\">\n              <div class=\"container\">\n                <h4>boots your links today</h4>\n                <button class=\"btn btn-success\" data-value=\"#startnow\" routerLink=\"/\">get started</button>\n              </div>\n            </div><!-- ##.last-feat -->\n          </div>\n        </div><!-- ##.row -->\n      </div><!-- ##.feat-info -->\n  </div><!-- ##.features -->\n</div><!-- ##.home-page -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login\">\n  <h1 class=\"text-center\" @fadeTitle>Login Now</h1>\n  <span class=\"text-center\" @fadeTitle></span>\n  <div class=\"log-form\" @fadeIn>\n    <form #logForm=\"ngForm\" (ngSubmit)=\"loginNow(logForm)\">\n      <div class=\"form-group\">\n        <label for=\"user_email\">user email</label>\n        <input #emu=\"ngModel\" ngModel [(ngModel)]=\"userEmail\" type=\"email\" name=\"uemail\" id=\"user_email\"\n        class=\"form-control\" placeholder=\"your email please\"\n        required\n        pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" />\n        <span></span>\n        <div *ngIf=\"emu.touched && emu.invalid\">\n          <p *ngIf=\"emu.errors?.required\">email is required</p>\n          <p *ngIf=\"emu.errors?.pattern\">this is Not an email</p>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"pass_word\">password</label>\n        <input #pu=\"ngModel\" ngModel [(ngModel)]=\"userPassword\" type=\"password\" name=\"pass\" id=\"pass_word\"\n        class=\"form-control\" placeholder=\"strong password\"\n        required\n        minlength=\"6\" />\n        <span></span>\n        <div *ngIf=\"pu.touched && pu.invalid\">\n          <p *ngIf=\"pu.errors?.required\">password is required</p>\n          <p *ngIf=\"pu.errors?.minlength\">your password is very short</p>\n        </div>\n      </div>\n      <div class=\"orregister\">\n        <p>do not have an account ?</p>\n        <button type=\"button\" (click)=\"toSignUp()\">sign up</button>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!logForm.valid\">login</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/myshortlinks/myshortlinks.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myshortlinks/myshortlinks.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-links\">\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <h1 *ngIf=\"hiddenIfNot\" @show>{{showMsg}}</h1>\n      <span id=\"back-no\" (click)=\"backTo()\" *ngIf=\"hiddenIfNot\" @show>{{btnBackMsg}}</span>\n      <div class=\"col-md-12\" *ngFor=\"let item of allLinks\" @show>\n        <div class=\"ip_links\">\n          <!--{{item.id}}  http://localhost/link/{{item.code}} {{item.time}}\n          {{item.zwar}} <a href=\"{{item.url_short}}\" target=\"_blank\">visit website</a> -->\n          <div class=\"main\"><span>{{item.url_short}}</span></div>\n          <div class=\"go\">\n            <button class=\"btn btn-primary delete\" (click)=\"deleteLink(item.id)\"><i class=\"fa fa-trash\"></i></button>\n            <span>{{item.zwar}}</span>\n            <button class=\"btn btn-primary\" (click)=\"goToLink(item.id)\"><i class=\"fa fa-eye\"></i></button>\n          </div>\n        </div><!-- ##.ip_links -->\n      </div><!-- ##.col-md-12 -->\n    </div><!-- ##.row -->\n  </div><!-- ##.container -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\" routerLink=\"/\">\n      <img src=\"../../assets/images/logo.svg\" />\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n    data-target=\"#shortNav\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"shortNav\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\"><span class=\"nav-link\" data-value=\"#startnow\" routerLink=\"/\">start now</span></li>\n        <li class=\"nav-item\"><span class=\"nav-link\" data-value=\"#features\" routerLink=\"/\">features</span></li>\n        <li class=\"nav-item\"><span class=\"nav-link\" data-value=\"#resources\" routerLink=\"/\">resources</span></li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto touser\">\n        <li class=\"nav-item\"><span class=\"nav-link\" routerLink=\"myshortlinks\">links</span></li>\n        <li class=\"nav-item\"><span class=\"nav-link\" routerLink=\"login\">login</span></li>\n        <li class=\"nav-item\"><span class=\"nav-link\" routerLink=\"register\">sigin up</span></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register\">\n  <h1 class=\"text-center\" @fadeTitle>Register Now</h1>\n  <span class=\"text-center\" @fadeTitle></span>\n  <div class=\"reg-form\" @fadeIn>\n    <form #signUp=\"ngForm\" (ngSubmit)=\"registNow(signUp)\">\n      <div class=\"row\">\n        <div class=\"form-group col\">\n          <label for=\"first_name\">first name</label>\n          <input #fusr=\"ngModel\" ngModel [(ngModel)]=\"firstName\" type=\"text\" name=\"firstusr\" id=\"first_name\"\n          class=\"form-control\" placeholder=\"your first name\"\n          required\n          minlength=\"3\" />\n          <span></span>\n          <div *ngIf=\"fusr.touched && fusr.invalid\">\n            <p *ngIf=\"fusr.errors?.required\">required field</p>\n            <p *ngIf=\"fusr.errors?.minlength\">very short !</p>\n          </div>\n        </div>\n\n        <div class=\"form-group col\">\n          <label for=\"last_name\">last name</label>\n          <input #lusr=\"ngModel\" ngModel [(ngModel)]=\"lastName\" type=\"text\" name=\"lastusr\" id=\"last_name\"\n          class=\"form-control\" placeholder=\"your last name\"\n          required\n          minlength=\"3\" />\n          <span></span>\n          <div *ngIf=\"lusr.touched && lusr.invalid\">\n            <p *ngIf=\"lusr.errors?.required\">required field</p>\n            <p *ngIf=\"lusr.errors?.minlength\">very short !</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"user_email\">user email</label>\n        <input #emu=\"ngModel\" ngModel [(ngModel)]=\"userEmail\" type=\"email\" name=\"emailu\" id=\"user_email\"\n        class=\"form-control\" placeholder=\"your email please\"\n        required\n        pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" />\n        <span></span>\n        <div *ngIf=\"emu.touched && emu.invalid\">\n          <p *ngIf=\"emu.errors?.required\">email required</p>\n          <p *ngIf=\"emu.errors?.pattern\">this is Not an email</p>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"pass_word\">password</label>\n        <input #pu=\"ngModel\" ngModel [(ngModel)]=\"userPassword\" type=\"password\" name=\"passu\" id=\"pass_word\"\n        class=\"form-control\" placeholder=\"strong password\"\n        required\n        minlength=\"6\" />\n        <span></span>\n        <div *ngIf=\"pu.touched && pu.invalid\">\n          <p *ngIf=\"pu.errors?.required\">a strong password is required</p>\n          <p *ngIf=\"pu.errors?.minlength\">your password is very short</p>\n        </div>\n      </div>\n      <div class=\"orlogin\">\n        <p>already have an account !</p>\n        <button  type=\"button\" (click)=\"toLogin()\">login now</button>\n      </div>\n      \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signUp.valid\">sign up</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/special/special.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/special/special.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-links\">\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <div class=\"col-md-12 fCol\" *ngFor=\"let elm of special_link\" @show>\n        <div class=\"fcol-info\">\n          <div class=\"about_links\">\n            <span><strong>link before :- </strong>{{elm.url_short}}</span>\n            <span><strong>link after :- </strong>http://localhost/link/{{elm.code}}</span>\n          </div>\n          <div class=\"more_about\">\n            <span><strong>date :- </strong>{{elm.time}}</span>\n            <span><strong>visitors number :- </strong>{{elm.zwar}}</span>\n            <span><strong>short code :- </strong>{{elm.code}}</span>\n          </div>\n          <a href=\"{{elm.url_short}}\" target=\"_blank\">visit</a>\n        </div><!-- ##.fcol-info -->\n        <span id=\"back\" (click)=\"backTo()\">back to previous page</span>\n      </div><!-- ##.col-md-12 -->\n    </div><!-- ##.row -->\n  </div><!-- ##.container -->\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _myshortlinks_myshortlinks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myshortlinks/myshortlinks.component */ "./src/app/myshortlinks/myshortlinks.component.ts");
/* harmony import */ var _special_special_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./special/special.component */ "./src/app/special/special.component.ts");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'myshortlinks', component: _myshortlinks_myshortlinks_component__WEBPACK_IMPORTED_MODULE_6__["MyshortlinksComponent"] },
    { path: 'special/:id', component: _special_special_component__WEBPACK_IMPORTED_MODULE_7__["SpecialComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'url-shortening-api';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _services_get_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/get-api.service */ "./src/app/services/get-api.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _myshortlinks_myshortlinks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./myshortlinks/myshortlinks.component */ "./src/app/myshortlinks/myshortlinks.component.ts");
/* harmony import */ var _special_special_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./special/special.component */ "./src/app/special/special.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _myshortlinks_myshortlinks_component__WEBPACK_IMPORTED_MODULE_14__["MyshortlinksComponent"],
            _special_special_component__WEBPACK_IMPORTED_MODULE_15__["SpecialComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"]
        ],
        providers: [_services_get_api_service__WEBPACK_IMPORTED_MODULE_10__["GetApiService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_get_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/get-api.service */ "./src/app/services/get-api.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let HomeComponent = class HomeComponent {
    constructor(shortservice) {
        this.shortservice = shortservice;
        this.yourLink = ''; // inputValue
        this.forShowMsg = false; // if the link shorted successfully ( result div will appear )
        this.displayIfNot = false; // if the link [ Not ] shorted successfully ( result div will appear )
    }
    ngOnInit() { }
    // call function from service to short the link
    shortNow(myLink) {
        if (this.yourLink == '') {
            this.error = ' ...';
            document.getElementById('myIn').style.borderColor = "#ff90b6";
        }
        else {
            //console.log(myLink.value.link)
            this.shortservice.shortAlink(myLink.value).subscribe(data => {
                this.result = data.json();
                //console.log(this.result);
                if (this.result.length > 2) {
                    this.forShowMsg = true; // to appear result div if success in backend
                    for (let i = 0; i < 3; i++) {
                        this.successMsg = this.result[0];
                        this.mainLink = this.result[1];
                        this.shortLink = this.result[2];
                        this.copy = 'copy';
                        this.ifcopy = ''; // to remove background of button if clicked on it to copy
                    }
                }
                else {
                    this.forShowMsg = false; // to delete result div if success in backend
                    this.displayIfNot = true; // to appear result div if NoT success in backend
                    for (let x in this.result) {
                        this.ifNotSuccess = this.result[x];
                        //console.log(this.result[x]);
                    }
                }
            });
            this.yourLink = 'www.ahmedzaher.com';
            this.error = '';
            document.getElementById('myIn').style.borderColor = "#EEE";
        }
    }
    //function to copy short link to clipboard
    copyMessage(val) {
        this.copy = 'copied!'; // change button text if clicked on it
        this.ifcopy = 'changeBack'; // change background of button if clicked on it
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        // console.log('done'); // just ensure message
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_get_api_service__WEBPACK_IMPORTED_MODULE_2__["GetApiService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('leftheader', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: "translateX(-15px)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: "translateY(0px)" }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rightheader', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: "translateX(15px)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: "translateY(0px)" }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('featapi', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: "scale(.6)", opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: "scale(1)", opacity: 1 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('leftfeatures', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: "translateX(-25px)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: "translateX(0px)" }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rightfeatures', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: "translateX(25px)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: "translateX(0px)" }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
        this.userEmail = '';
        this.userPassword = '';
    }
    ngOnInit() {
    }
    // navigate to register page
    toSignUp() {
        this.router.navigate(['register']);
    }
    // Login when submit
    loginNow(e) {
        console.log(e.value);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: "translateY(15px)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: "translateY(0px)" }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeTitle', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: "translateY(-15px)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: "translateY(0px)" }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/myshortlinks/myshortlinks.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/myshortlinks/myshortlinks.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215c2hvcnRsaW5rcy9teXNob3J0bGlua3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/myshortlinks/myshortlinks.component.ts":
/*!********************************************************!*\
  !*** ./src/app/myshortlinks/myshortlinks.component.ts ***!
  \********************************************************/
/*! exports provided: MyshortlinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyshortlinksComponent", function() { return MyshortlinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_get_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/get-api.service */ "./src/app/services/get-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let MyshortlinksComponent = class MyshortlinksComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.hiddenIfNot = false; // hidden btn and h1 style if there is Links Exist
    }
    ngOnInit() { this.ipLinks(); }
    // get all linkes depending on each ip
    ipLinks() {
        this.service.getLinks().subscribe(data => {
            const numRows = data.json().length;
            if (numRows > 0) {
                this.allLinks = data.json();
                this.hiddenIfNot = false;
            }
            else {
                this.showMsg = 'you do not have links to show';
                this.btnBackMsg = 'back to previous page';
                this.hiddenIfNot = true;
            }
        });
    }
    // call function than show the details about each link
    goToLink(e) {
        this.router.navigate(['special', e]);
    }
    // Back To All_Links_page[myshortlinks]
    backTo() {
        this.router.navigate(['/']);
    }
    // call function from service which delete a link
    deleteLink(e) {
        const answer = window.confirm("are you sure you want to delete this link?");
        if (answer == true) {
            this.service.deleteOneLink(e).subscribe(data => {
                //console.log(data.json());
                this.service.getLinks().subscribe(data => {
                    const numRows = data.json().length;
                    if (numRows > 0) {
                        this.allLinks = data.json();
                        this.hiddenIfNot = false;
                    }
                    else {
                        this.showMsg = 'you do not have links to show';
                        this.btnBackMsg = 'back to previous page';
                        this.hiddenIfNot = true;
                        this.router.navigate(['/']);
                    }
                });
            });
        }
        else {
            return false;
        }
    }
};
MyshortlinksComponent.ctorParameters = () => [
    { type: _services_get_api_service__WEBPACK_IMPORTED_MODULE_2__["GetApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MyshortlinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myshortlinks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myshortlinks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/myshortlinks/myshortlinks.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('show', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: "translateY(-15px)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: "translateY(0px)" }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myshortlinks.component.scss */ "./src/app/myshortlinks/myshortlinks.component.scss")).default]
    })
], MyshortlinksComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegisterComponent = class RegisterComponent {
    constructor(router) {
        this.router = router;
        this.firstName = '';
        this.lastName = '';
        this.userEmail = '';
        this.userPassword = '';
    }
    ngOnInit() {
    }
    // navigate to login page
    toLogin() {
        this.router.navigate(['login']);
    }
    // register on submit
    registNow(form) {
        console.log(form.value);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: "translateY(15px)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: "translateY(0px)" }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeTitle', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: "translateY(-15px)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: "translateY(0px)" }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/get-api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/get-api.service.ts ***!
  \*********************************************/
/*! exports provided: GetApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApiService", function() { return GetApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let GetApiService = class GetApiService {
    constructor(http) {
        this.http = http;
    }
    // Send LinkObject To BackEnd To Short It
    shortAlink(link) {
        return this.http.post("http://localhost/AngShorten/post.php", link);
    }
    // getLinks
    getLinks() {
        return this.http.get("http://localhost/AngShorten/get.php");
    }
    // get Short_Link Details
    getDetails(id) {
        return this.http.get("http://localhost/AngShorten/details.php?id=" + id);
    }
    // delete a link from bd
    deleteOneLink(id) {
        return this.http.delete("http://localhost/AngShorten/delete.php?id=" + id);
    }
};
GetApiService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
GetApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetApiService);



/***/ }),

/***/ "./src/app/special/special.component.scss":
/*!************************************************!*\
  !*** ./src/app/special/special.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWwvc3BlY2lhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/special/special.component.ts":
/*!**********************************************!*\
  !*** ./src/app/special/special.component.ts ***!
  \**********************************************/
/*! exports provided: SpecialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialComponent", function() { return SpecialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_get_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/get-api.service */ "./src/app/services/get-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let SpecialComponent = class SpecialComponent {
    constructor(service, router, active) {
        this.service = service;
        this.router = router;
        this.active = active;
        this.getNow();
    }
    ngOnInit() { }
    // call function from service that get details about special link
    getNow() {
        this.my_id = this.active.paramMap.subscribe(Param => {
            this.service.getDetails(Param.get('id')).subscribe(data => {
                this.special_link = data.json();
            });
        });
    }
    // Back To All_Links_page[myshortlinks]
    backTo() {
        this.router.navigate(['myshortlinks']);
    }
};
SpecialComponent.ctorParameters = () => [
    { type: _services_get_api_service__WEBPACK_IMPORTED_MODULE_2__["GetApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SpecialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-special',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./special.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/special/special.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('show', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: "translateY(15px)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('800ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: "translateY(0px)" }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./special.component.scss */ "./src/app/special/special.component.scss")).default]
    })
], SpecialComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ComputersInformatics\Career\1- My_Previous Projects\8- urlShorteningApi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map