'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = createWrapperComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWrapperComponent() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$displayName = _ref.displayName;
  var displayName = _ref$displayName === undefined ? 'Wrapper' : _ref$displayName;
  var _ref$styles = _ref.styles;
  var styles = _ref$styles === undefined ? {} : _ref$styles;
  var _ref$propTypes = _ref.propTypes;
  var propTypes = _ref$propTypes === undefined ? {} : _ref$propTypes;
  var _ref$mapPropsToClassN = _ref.mapPropsToClassNames;
  var mapPropsToClassNames = _ref$mapPropsToClassN === undefined ? function () {
    return {};
  } : _ref$mapPropsToClassN;
  var _ref$mapPropsToStyle = _ref.mapPropsToStyle;
  var mapPropsToStyle = _ref$mapPropsToStyle === undefined ? function () {
    return {};
  } : _ref$mapPropsToStyle;
  var _ref$mapPropsToProps = _ref.mapPropsToProps;
  var mapPropsToProps = _ref$mapPropsToProps === undefined ? function (props) {
    return props;
  } : _ref$mapPropsToProps;
  var _ref$defaultComponent = _ref.defaultComponentClass;
  var defaultComponentClass = _ref$defaultComponent === undefined ? 'span' : _ref$defaultComponent;

  var cxStyles = _bind2.default.bind(styles);
  var Wrapper = function Wrapper(_ref2) {
    var children = _ref2.children;
    var className = _ref2.className;
    var componentClass = _ref2.componentClass;
    var style = _ref2.style;
    var noWrap = _ref2.noWrap;
    var restProps = (0, _objectWithoutProperties3.default)(_ref2, ['children', 'className', 'componentClass', 'style', 'noWrap']);

    var ComponentClass = componentClass || defaultComponentClass;
    var mappedProps = mapPropsToProps(restProps);
    var mappedClassNames = cxStyles(mapPropsToClassNames(restProps));
    var mappedStyle = mapPropsToStyle(restProps);

    if (noWrap) {
      var child = _react.Children.only(children);
      var childProps = child.props ? child.props : {};

      return (0, _react.cloneElement)(child, (0, _extends3.default)({}, restProps, childProps, mappedProps, {
        className: (0, _classnames2.default)(className, child.props.className, mappedClassNames),
        style: (0, _extends3.default)({}, style, child.props.style, mappedStyle)
      }));
    }

    return _react2.default.createElement(
      ComponentClass,
      (0, _extends3.default)({}, restProps, mappedProps, {
        className: (0, _classnames2.default)(className, mappedClassNames),
        style: (0, _extends3.default)({}, style, mappedStyle)
      }),
      children
    );
  };

  Wrapper.displayName = displayName;
  Wrapper.propTypes = (0, _extends3.default)({
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    componentClass: _elementType2.default,
    style: _react.PropTypes.object,
    noWrap: _react.PropTypes.bool
  }, propTypes);

  return Wrapper;
}