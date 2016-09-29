'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visibility = exports.ShowOnFocus = exports.HideForScreenReader = exports.ShowForScreenReader = exports.HideForScreenOrientation = exports.ShowForScreenOrientation = exports.Invisible = exports.Hide = exports.HideOnlyForScreenSize = exports.HideForScreenSize = exports.ShowOnlyForScreenSize = exports.ShowForScreenSize = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../../util/constants');

var _createWrapperComponent = require('../../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowForScreenSize = exports.ShowForScreenSize = (0, _createWrapperComponent2.default)({
  displayName: 'ShowForScreenSize',
  styles: _styles2.default,
  propTypes: {
    screenSize: _react.PropTypes.oneOf(_constants.SCREEN_SIZES).isRequired
  },
  mapPropsToClassNames: function mapPropsToClassNames(_ref) {
    var screenSize = _ref.screenSize;
    return (0, _defineProperty3.default)({}, 'show-for-' + screenSize, (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, screenSize));
  }
});

var ShowOnlyForScreenSize = exports.ShowOnlyForScreenSize = (0, _createWrapperComponent2.default)({
  displayName: 'ShowOnlyForScreenSize',
  styles: _styles2.default,
  propTypes: {
    screenSize: _react.PropTypes.oneOf(_constants.SCREEN_SIZES).isRequired
  },
  mapPropsToClassNames: function mapPropsToClassNames(_ref3) {
    var screenSize = _ref3.screenSize;
    return (0, _defineProperty3.default)({}, 'show-for-' + screenSize + '-only', (0, _includes2.default)(_constants.SCREEN_SIZES, screenSize));
  }
});

var HideForScreenSize = exports.HideForScreenSize = (0, _createWrapperComponent2.default)({
  displayName: 'HideForScreenSize',
  styles: _styles2.default,
  propTypes: {
    screenSize: _react.PropTypes.oneOf(_constants.SCREEN_SIZES).isRequired
  },
  mapPropsToClassNames: function mapPropsToClassNames(_ref5) {
    var screenSize = _ref5.screenSize;
    return (0, _defineProperty3.default)({
      hide: !(0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, screenSize) && (0, _includes2.default)(_constants.SCREEN_SIZES, screenSize)
    }, 'hide-for-' + screenSize, (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, screenSize));
  }
});

var HideOnlyForScreenSize = exports.HideOnlyForScreenSize = (0, _createWrapperComponent2.default)({
  displayName: 'HideOnlyForScreenSize',
  styles: _styles2.default,
  propTypes: {
    screenSize: _react.PropTypes.oneOf(_constants.SCREEN_SIZES).isRequired
  },
  mapPropsToClassNames: function mapPropsToClassNames(_ref7) {
    var screenSize = _ref7.screenSize;
    return (0, _defineProperty3.default)({}, 'hide-for-' + screenSize + '-only', (0, _includes2.default)(_constants.SCREEN_SIZES, screenSize));
  }
});

var Hide = exports.Hide = (0, _createWrapperComponent2.default)({
  displayName: 'Hide',
  styles: _styles2.default,
  mapPropsToClassNames: function mapPropsToClassNames() {
    return 'hide';
  }
});

var Invisible = exports.Invisible = (0, _createWrapperComponent2.default)({
  displayName: 'Invisible',
  styles: _styles2.default,
  mapPropsToClassNames: function mapPropsToClassNames() {
    return 'invisible';
  }
});

var ShowForScreenOrientation = exports.ShowForScreenOrientation = (0, _createWrapperComponent2.default)({
  displayName: 'ShowForScreenOrientation',
  styles: _styles2.default,
  propTypes: {
    screenOrientation: _react.PropTypes.oneOf(_constants.SCREEN_ORIENTATIONS).isRequired
  },
  mapPropsToClassNames: function mapPropsToClassNames(_ref9) {
    var screenOrientation = _ref9.screenOrientation;
    return (0, _defineProperty3.default)({}, 'show-for-' + screenOrientation, (0, _includes2.default)(_constants.SCREEN_ORIENTATIONS, screenOrientation));
  }
});

var HideForScreenOrientation = exports.HideForScreenOrientation = (0, _createWrapperComponent2.default)({
  displayName: 'HideForScreenOrientation',
  styles: _styles2.default,
  propTypes: {
    screenOrientation: _react.PropTypes.oneOf(_constants.SCREEN_ORIENTATIONS).isRequired
  },
  mapPropsToClassNames: function mapPropsToClassNames(_ref11) {
    var screenOrientation = _ref11.screenOrientation;
    return (0, _defineProperty3.default)({}, 'hide-for-' + screenOrientation, (0, _includes2.default)(_constants.SCREEN_ORIENTATIONS, screenOrientation));
  }
});

var ShowForScreenReader = exports.ShowForScreenReader = (0, _createWrapperComponent2.default)({
  displayName: 'ShowForScreenReader',
  styles: _styles2.default,
  mapPropsToClassNames: function mapPropsToClassNames() {
    return 'show-for-sr';
  }
});

var HideForScreenReader = exports.HideForScreenReader = (0, _createWrapperComponent2.default)({
  displayName: 'HideForScreenReader',
  styles: _styles2.default,
  mapPropsToProps: function mapPropsToProps() {
    return { 'aria-hidden': true };
  }
});

var ShowOnFocus = exports.ShowOnFocus = (0, _createWrapperComponent2.default)({
  displayName: 'ShowOnFocus',
  styles: _styles2.default,
  mapPropsToClassNames: function mapPropsToClassNames() {
    return 'show-on-focus';
  }
});

var Visibility = exports.Visibility = {
  ShowForScreenSize: ShowForScreenSize,
  ShowOnlyForScreenSize: ShowOnlyForScreenSize,
  HideForScreenSize: HideForScreenSize,
  HideOnlyForScreenSize: HideOnlyForScreenSize,
  Hide: Hide,
  Invisible: Invisible,
  ShowForScreenOrientation: ShowForScreenOrientation,
  HideForScreenOrientation: HideForScreenOrientation,
  ShowForScreenReader: ShowForScreenReader,
  HideForScreenReader: HideForScreenReader,
  ShowOnFocus: ShowOnFocus
};

exports.default = Visibility;