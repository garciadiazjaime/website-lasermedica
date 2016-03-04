'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _title = require('../../../elements/titles/title1');

var _title2 = _interopRequireDefault(_title);

var _paragraph = require('../../../elements/paragraphs/paragraph1');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _button = require('../../../elements/buttons/button1');

var _button2 = _interopRequireDefault(_button);

var _row = require('../../../elements/rows/row1');

var _row2 = _interopRequireDefault(_row);

var _wrapper = require('../../../elements/wrappers/wrapper1');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template2 = function (_React$Component) {
  _inherits(Template2, _React$Component);

  function Template2() {
    _classCallCheck(this, Template2);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Template2).apply(this, arguments));
  }

  _createClass(Template2, [{
    key: 'renderItems',
    value: function renderItems(data) {
      var items = data.items;
      var classes = data.classes;

      if (_lodash2.default.isArray(items) && items.length) {
        return items.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { className: classes.class2, key: index, id: item.href },
            _react2.default.createElement(
              _wrapper2.default,
              { className: 'y' },
              _react2.default.createElement(
                _wrapper2.default,
                { className: 'x' },
                _react2.default.createElement(
                  'span',
                  { className: '' },
                  index + 1
                )
              ),
              _react2.default.createElement(
                _title2.default,
                { className: 'q' },
                item.title
              ),
              _react2.default.createElement(
                _paragraph2.default,
                { className: 'a' },
                item.description
              )
            )
          );
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var blocks = this.props.data.blocks;
      var block1 = blocks.block1;
      var block2 = blocks.block2;
      var block3 = blocks.block3;
      var block4 = blocks.block4;

      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          _row2.default,
          { className: block1.classes.class1 },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-10 col-sm-offset-1' },
            _react2.default.createElement(
              _title2.default,
              { className: 's' },
              block1.texts.text1
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              _wrapper2.default,
              { className: 'c' },
              _react2.default.createElement(
                _title2.default,
                { className: 'a4' },
                block2.texts.text2
              ),
              _react2.default.createElement(
                _paragraph2.default,
                { className: 'h' },
                block2.texts.text3
              ),
              block2.links.link2 ? _react2.default.createElement(
                _button2.default,
                { className: 'd', href: block2.links.link2.href, title: block2.links.link2.title },
                block2.links.link2.title
              ) : null
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              _wrapper2.default,
              { className: block2.classes.class1 },
              _react2.default.createElement(
                _title2.default,
                { className: '' },
                block2.texts.text1
              ),
              _react2.default.createElement(
                _button2.default,
                { className: 'd', href: block2.links.link1.href, title: block2.links.link1.title },
                block2.links.link1.title
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement(
              _wrapper2.default,
              { className: 'z' },
              _react2.default.createElement(
                _title2.default,
                { className: 'a5' },
                block3.texts.text1
              ),
              block3.texts.text2 ? _react2.default.createElement(
                _title2.default,
                { className: 'a6' },
                block3.texts.text2
              ) : null
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          this.renderItems(block4)
        )
      );
    }
  }]);

  return Template2;
}(_react2.default.Component);

exports.default = Template2;

Template2.propTypes = {
  data: _react2.default.PropTypes.object.isRequired
};