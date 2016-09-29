'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.Column = exports.Row = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../util/constants');

var _screenSize = require('../util/screen-size');

var _flex = require('../flex');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Row = exports.Row = function Row(_ref) {
  var className = _ref.className;
  var collapse = _ref.collapse;
  var expanded = _ref.expanded;
  var unstack = _ref.unstack;
  var restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'collapse', 'expanded', 'unstack']);

  var classNames = (0, _classnames2.default)(className, cxStyles('row', (0, _screenSize.createScreenSizeClassNamesFromProps)(_constants.FLEX_GRID_ROW_CLASS_NAMES, restProps), (0, _defineProperty3.default)({
    collapse: collapse,
    expanded: expanded
  }, unstack + '-unstack', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, unstack))));

  return _react2.default.createElement(_flex.FlexParent, (0, _extends3.default)({}, restProps, { className: classNames }));
};

Row.propTypes = (0, _extends3.default)({}, (0, _screenSize.createScreenSizePropTypes)(_constants.FLEX_GRID_ROW_CLASS_NAMES), {
  className: _react.PropTypes.string,
  collapse: _react.PropTypes.bool,
  expanded: _react.PropTypes.bool,
  unstack: _react.PropTypes.oneOf(_constants.SCREEN_SIZES)
});

var Column = exports.Column = function Column(_ref2) {
  var _cxStyles2;

  var className = _ref2.className;
  var expand = _ref2.expand;
  var shrink = _ref2.shrink;
  var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['className', 'expand', 'shrink']);

  var classNames = (0, _classnames2.default)(className, cxStyles('column', (0, _screenSize.createScreenSizeClassNamesFromProps)(_constants.FLEX_GRID_COLUMN_CLASS_NAMES, restProps), (_cxStyles2 = {}, (0, _defineProperty3.default)(_cxStyles2, expand + '-expand', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, expand)), (0, _defineProperty3.default)(_cxStyles2, 'shrink', shrink), _cxStyles2)));

  return _react2.default.createElement(_flex.FlexChild, (0, _extends3.default)({}, restProps, { className: classNames }));
};

Column.propTypes = (0, _extends3.default)({}, (0, _screenSize.createScreenSizePropTypes)(_constants.FLEX_GRID_COLUMN_CLASS_NAMES), {
  className: _react.PropTypes.string,
  shrink: _react.PropTypes.bool,
  expand: _react.PropTypes.oneOf(_constants.SCREEN_SIZES)
});

var Grid = exports.Grid = { Row: Row, Column: Column };

exports.default = Grid;