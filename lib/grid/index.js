'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.Column = exports.Row = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _constants = require('../util/constants');

var _createWrapperComponent = require('../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _screenSize = require('../util/screen-size');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = exports.Row = (0, _createWrapperComponent2.default)({
  displayName: 'Row',
  styles: _styles2.default,
  propTypes: (0, _extends3.default)({}, (0, _screenSize.createScreenSizePropTypes)(_constants.GRID_ROW_CLASS_NAMES), {
    collapse: _react.PropTypes.bool,
    expanded: _react.PropTypes.bool
  }),
  mapPropsToClassNames: function mapPropsToClassNames(_ref) {
    var collapse = _ref.collapse;
    var expanded = _ref.expanded;
    var props = (0, _objectWithoutProperties3.default)(_ref, ['collapse', 'expanded']);
    return ['row', (0, _extends3.default)({}, (0, _screenSize.createScreenSizeClassNamesFromProps)(_constants.GRID_ROW_CLASS_NAMES, props), {
      collapse: collapse,
      expanded: expanded
    })];
  },
  defaultComponentClass: 'div'
});

var Column = exports.Column = (0, _createWrapperComponent2.default)({
  displayName: 'Column',
  styles: _styles2.default,
  propTypes: (0, _extends3.default)({}, (0, _screenSize.createScreenSizePropTypes)(_constants.GRID_COLUMN_CLASS_NAMES), {
    end: _react.PropTypes.bool
  }),
  mapPropsToClassNames: function mapPropsToClassNames(_ref2) {
    var end = _ref2.end;
    var props = (0, _objectWithoutProperties3.default)(_ref2, ['end']);
    return ['column', (0, _extends3.default)({}, (0, _screenSize.createScreenSizeClassNamesFromProps)(_constants.GRID_COLUMN_CLASS_NAMES, props), {
      end: end
    })];
  },
  defaultComponentClass: 'div'
});

var Grid = exports.Grid = { Row: Row, Column: Column };

exports.default = Grid;