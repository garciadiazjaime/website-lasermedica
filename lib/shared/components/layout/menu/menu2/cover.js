'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _locationUtil = require('../../../../utils/locationUtil');

var _locationUtil2 = _interopRequireDefault(_locationUtil);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Cover = function (_React$Component) {
  _inherits(Cover, _React$Component);

  function Cover() {
    _classCallCheck(this, Cover);

    return _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).apply(this, arguments));
  }

  _createClass(Cover, [{
    key: 'renderServices',
    value: function renderServices(data) {
      var texts = _data2.default[_locationUtil2.default.getLang()];
      return data.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-sm-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'service_cover ' + style['service_' + index], 'data-index': index },
              _react2.default.createElement(
                'h2',
                { 'data-index': index },
                item.title
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: item.href, title: item.title, 'data-index': index },
                texts.texts.text3
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;

      return _react2.default.createElement(
        'div',
        null,
        this.renderServices(data)
      );
    }
  }]);

  return Cover;
}(_react2.default.Component);

exports.default = Cover;


Cover.propTypes = {
  data: _react2.default.PropTypes.array.isRequired
};