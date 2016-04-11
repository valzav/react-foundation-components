'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAlignment = undefined;

var _constants = require('../../util/constants');

var _createWrapperComponent = require('../../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _screenSize = require('../../util/screen-size');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextAlignment = exports.TextAlignment = (0, _createWrapperComponent2.default)({
  displayName: 'TextAlignment',
  styles: _styles2.default,
  propTypes: (0, _screenSize.createScreenSizePropTypes)(_constants.TEXT_ALIGNMENT_CLASS_NAMES),
  mapPropsToClassNames: function mapPropsToClassNames(props) {
    return (0, _screenSize.createScreenSizeClassNamesFromProps)(_constants.TEXT_ALIGNMENT_CLASS_NAMES, props);
  },
  defaultComponentClass: 'div'
});

exports.default = TextAlignment;