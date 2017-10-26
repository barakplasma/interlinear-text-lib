(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["interlinear-text-lib"] = factory();
	else
		root["interlinear-text-lib"] = factory();
})(this, function() {
return webpackJsonpinterlinear_text_lib([1],{

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var InterlinearSentence = function (_React$Component) {
    _inherits(InterlinearSentence, _React$Component);

    function InterlinearSentence(props) {
        _classCallCheck(this, InterlinearSentence);

        return _possibleConstructorReturn(this, (InterlinearSentence.__proto__ || Object.getPrototypeOf(InterlinearSentence)).call(this, props));
    }

    _createClass(InterlinearSentence, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: '.InterlinearSentence' },
                this.props.sentence.reverse().map(function (word, index) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InterlinearWord, { en: word.en, iw: word.iw, sentencePosition: (index + 1) / _this2.props.sentence.length, key: index });
                })
            );
        }
    }]);

    return InterlinearSentence;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var InterlinearWord = function InterlinearWord(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: '.InterlinearWord', style: { display: 'inline' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { style: { display: 'inline-flex', flexFlow: 'column', alignItems: 'center' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { direction: 'rtl' } },
                props.iw
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                props.en
            )
        ),
        props.sentencePosition === 1 ? '' : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { style: { verticalAlign: '-1rem' } },
            ' ',
            '↞',
            ' '
        )
    );
};

InterlinearSentence.propTypes = {
    sentence: __WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].array
};

InterlinearWord.propTypes = {
    en: __WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].string,
    iw: __WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].string,
    sentencePosition: __WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].number
};

/* harmony default export */ __webpack_exports__["default"] = (InterlinearSentence);

/***/ })

},[24]);
});