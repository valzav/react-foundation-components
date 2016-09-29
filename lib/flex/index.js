'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = exports.FlexChild = exports.FlexParent = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _react = require('react');

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../util/constants');

var _createWrapperComponent = require('../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _screenSize = require('../util/screen-size');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexParent = exports.FlexParent = (0, _createWrapperComponent2.default)({
  displayName: 'FlexParent',
  styles: _styles2.default,
  propTypes: (0, _extends5.default)({}, (0, _screenSize.createScreenSizePropTypes)(_constants.FLEX_PARENT_CLASS_NAMES), {
    horizontalAlignment: _react.PropTypes.oneOf(_constants.FLEX_HORIZONTAL_ALIGNMENTS),
    verticalAlignment: _react.PropTypes.oneOf(_constants.FLEX_VERTICAL_ALIGNMENTS)
  }),
  mapPropsToClassNames: function mapPropsToClassNames(_ref) {
    var _extends2;

    var horizontalAlignment = _ref.horizontalAlignment;
    var verticalAlignment = _ref.verticalAlignment;
    var props = (0, _objectWithoutProperties3.default)(_ref, ['horizontalAlignment', 'verticalAlignment']);
    return (0, _extends5.default)({}, (0, _screenSize.createScreenSizeClassNamesFromProps)(_constants.FLEX_PARENT_CLASS_NAMES, props), (_extends2 = {}, (0, _defineProperty3.default)(_extends2, 'align-' + horizontalAlignment, (0, _includes2.default)(_constants.FLEX_HORIZONTAL_ALIGNMENTS, horizontalAlignment)), (0, _defineProperty3.default)(_extends2, 'align-' + verticalAlignment, (0, _includes2.default)(_constants.FLEX_VERTICAL_ALIGNMENTS, verticalAlignment)), _extends2));
  },
  mapPropsToStyle: function mapPropsToStyle() {
    return { display: 'flex' };
  },
  defaultComponentClass: 'div'
});

var FlexChild = exports.FlexChild = (0, _createWrapperComponent2.default)({
  displayName: 'FlexChild',
  styles: _styles2.default,
  propTypes: (0, _extends5.default)({}, (0, _screenSize.createScreenSizePropTypes)(_constants.FLEX_CHILD_CLASS_NAMES), {
    verticalAlignment: _react.PropTypes.oneOf(_constants.FLEX_VERTICAL_ALIGNMENTS)
  }),
  mapPropsToClassNames: function mapPropsToClassNames(_ref2) {
    var verticalAlignment = _ref2.verticalAlignment;
    var props = (0, _objectWithoutProperties3.default)(_ref2, ['verticalAlignment']);
    return (0, _extends5.default)({}, (0, _screenSize.createScreenSizeClassNamesFromProps)(_constants.FLEX_CHILD_CLASS_NAMES, props), (0, _defineProperty3.default)({}, 'align-self-' + verticalAlignment, (0, _includes2.default)(_constants.FLEX_VERTICAL_ALIGNMENTS, verticalAlignment)));
  },
  defaultComponentClass: 'div'
});

var Flex = exports.Flex = { Parent: FlexParent, Child: FlexChild };

exports.default = Flex;