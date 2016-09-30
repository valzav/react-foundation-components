'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

exports.createScreenSizeClassNames = createScreenSizeClassNames;
exports.createScreenSizePropTypes = createScreenSizePropTypes;
exports.createScreenSizeClassNamesFromProps = createScreenSizeClassNamesFromProps;

var _react = require('react');

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _decapitalize = require('underscore.string/decapitalize');

var _decapitalize2 = _interopRequireDefault(_decapitalize);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processScreenSizeClassNames() {
  var classNameMapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var callback = arguments[1];

  classNameMapping.forEach(function (_ref) {
    var baseClassName = _ref.baseClassName;
    var basePropName = _ref.basePropName;
    var type = _ref.type;
    var min = _ref.min;
    var max = _ref.max;
    var values = _ref.values;
    var flattenSmall = _ref.flattenSmall;
    return _constants.SCREEN_SIZES.forEach(function (size) {
      var className = '';
      var propName = '';

      if (flattenSmall && size === _constants.SCREEN_SIZE_SMALL) {
        className = baseClassName;
        propName = (0, _decapitalize2.default)(basePropName);
      } else {
        className = size + (baseClassName ? '-' + baseClassName : '');
        propName = '' + size + basePropName;
      }

      callback({ className: className, propName: propName, type: type, min: min, max: max, values: values });
    });
  });
}

function createScreenSizeClassNames(classNameMapping) {
  var classNames = [];

  processScreenSizeClassNames(classNameMapping, function (_ref2) {
    var className = _ref2.className;
    var type = _ref2.type;
    var min = _ref2.min;
    var max = _ref2.max;
    var values = _ref2.values;

    if (type === _constants.CLASS_NAME_TYPES.RANGE) {
      for (var i = min; i <= max; i++) {
        classNames.push(className + '-' + i);
      }
    } else if (type === _constants.CLASS_NAME_TYPES.ENUM) {
      values.forEach(function (value) {
        return classNames.push(className + '-' + value);
      });
    } else {
      classNames.push(className);
    }
  });

  return classNames;
}

function createScreenSizePropTypes(classNameMapping) {
  var propTypes = {};

  processScreenSizeClassNames(classNameMapping, function (_ref3) {
    var propName = _ref3.propName;
    var type = _ref3.type;
    var values = _ref3.values;

    var propType = _react.PropTypes.bool;
    if (type === _constants.CLASS_NAME_TYPES.RANGE) {
      propType = _react.PropTypes.number;
    } else if (type === _constants.CLASS_NAME_TYPES.ENUM) {
      propType = _react.PropTypes.oneOf(values);
    }

    propTypes[propName] = propType;
  });

  return propTypes;
}

function createScreenSizeClassNamesFromProps(classNameMapping) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var classNames = {};

  processScreenSizeClassNames(classNameMapping, function (_ref4) {
    var className = _ref4.className;
    var propName = _ref4.propName;
    var type = _ref4.type;
    var min = _ref4.min;
    var max = _ref4.max;
    var values = _ref4.values;

    var propValue = props[propName];

    if (type === _constants.CLASS_NAME_TYPES.RANGE) {
      classNames[className + '-' + propValue] = (0, _isInteger2.default)(propValue) && propValue >= min && propValue <= max;
    } else if (type === _constants.CLASS_NAME_TYPES.ENUM) {
      classNames[className + '-' + propValue] = (0, _includes2.default)(values, propValue);
    } else {
      classNames[className] = propValue;
    }
  });

  return classNames;
}