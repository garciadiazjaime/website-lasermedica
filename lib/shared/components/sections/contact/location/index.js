'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _address = require('./address');

var _address2 = _interopRequireDefault(_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 600, 4] */


var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Location = function (_React$Component) {
  _inherits(Location, _React$Component);

  function Location() {
    var _Object$getPrototypeO;

    _classCallCheck(this, Location);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Location)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    _this.changeLocation = _this.changeLocation.bind(_this);
    _this.state = {
      location: 'locationTijuana'
    };
    return _this;
  }

  _createClass(Location, [{
    key: 'changeLocation',
    value: function changeLocation(element) {
      this.setState({
        location: element.target.id
      });
    }
  }, {
    key: 'renderLocations',
    value: function renderLocations(data, locationSelected) {
      var _this2 = this;

      if (_lodash2.default.isArray(data) && data.length) {
        return data.map(function (item, index) {
          return _react2.default.createElement(_address2.default, { data: item, key: index, index: index, changeLocation: _this2.changeLocation, locationSelected: locationSelected });
        }, this);
      }
      return null;
    }
  }, {
    key: 'renderMap',
    value: function renderMap(data) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement(
          'div',
          { className: style[data.className] },
          _react2.default.createElement(
            'a',
            { href: data.href, target: '_blank' },
            'Ver en Google Maps'
          )
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$data = this.props.data;
      var texts = _props$data.texts;
      var locations = _props$data.locations;
      var maps = _props$data.maps;
      var location = this.state.location;

      return _react2.default.createElement(
        'div',
        { className: 'row ' + style.locationWrapper },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-6' },
          _react2.default.createElement(
            'h2',
            null,
            texts.text1
          ),
          this.renderLocations(locations, location)
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-6 hidden-xs' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.renderMap(maps[location])
          )
        )
      );
    }
  }]);

  return Location;
}(_react2.default.Component);

exports.default = Location;


Location.propTypes = {
  data: _react2.default.PropTypes.object.isRequired
};