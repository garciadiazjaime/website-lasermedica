'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _locationUtil = require('../../../../../utils/locationUtil');

var _locationUtil2 = _interopRequireDefault(_locationUtil);

var _restClient = require('../../../../../../server/helpers/rest-client');

var _restClient2 = _interopRequireDefault(_restClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 600, 4] */

var style = process.env.TIER === 'FE' ? require('../../style.scss') : {};

var Form1 = function (_React$Component) {
  _inherits(Form1, _React$Component);

  function Form1(props) {
    _classCallCheck(this, Form1);

    var _this2 = _possibleConstructorReturn(this, (Form1.__proto__ || Object.getPrototypeOf(Form1)).call(this, props));

    _this2.state = {
      formData: _this2.getInitialFormState(),
      requiredFields: _this2.getRequiredFields(_this2.getInitialFormState()),
      showLoading: false
    };

    _this2.submitFormHandler = _this2.submitFormHandler.bind(_this2);
    _this2.onChangeHandler = _this2.onChangeHandler.bind(_this2);
    return _this2;
  }

  _createClass(Form1, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(event) {
      var formData = this.state.formData;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      formData[name].value = value;
      this.setState({ formData: formData });
    }
  }, {
    key: 'getRequiredFields',
    value: function getRequiredFields(data) {
      var fields = {};
      _lodash2.default.map(data, function (item, index) {
        if (item.require) {
          fields[index] = item;
        }
      });
      return fields;
    }
  }, {
    key: 'getInitialFormState',
    value: function getInitialFormState() {
      return _locationUtil2.default.getLang() === 'ES' ? {
        name: {
          title: 'Nombre',
          value: '',
          require: true
        },
        email: {
          title: 'Correo',
          value: '',
          require: true
        },
        location: {
          title: 'Para',
          value: 'Tijuana',
          require: true
        },
        message: {
          title: 'Mensaje',
          value: '',
          require: true
        }
      } : {
        name: {
          title: 'Name',
          value: '',
          require: true
        },
        email: {
          title: 'Email',
          value: '',
          require: true
        },
        location: {
          title: 'To',
          value: 'Tijuana',
          require: true
        },
        message: {
          title: 'Message',
          value: '',
          require: true
        }
      };
    }
  }, {
    key: 'getHTMLMessage',
    value: function getHTMLMessage(data) {
      var response = _lodash2.default.map(data, function (item) {
        return item.title + ': ' + item.value + '<br />';
      });
      return response.join('');
    }
  }, {
    key: 'validateForm',
    value: function validateForm(data, requiredFields) {
      var response = true;
      _lodash2.default.map(requiredFields, function (item, property) {
        var labelElement = $('#lab_' + property);
        if (!data.hasOwnProperty(property) || !data[property].value.length) {
          if (response) {
            response = false;
          }
          labelElement.addClass(style.errorCSSClass);
        } else {
          labelElement.removeClass(style.errorCSSClass);
        }
      });
      return response;
    }

    /*
    Handler function to validate form and send data
    */

  }, {
    key: 'submitFormHandler',
    value: function submitFormHandler(event) {
      event.preventDefault();
      var formData = this.state.formData;
      var isFormValid = this.validateForm(formData, this.state.requiredFields);
      var msgElement = $('#msg');
      msgElement.removeClass(style.errorCSSClass + ' ' + style.successCSSClass);
      msgElement.html('');
      var texts = _locationUtil2.default.getLang() === 'ES' ? {
        text1: 'Información enviada de manera exitosa, gracias.',
        text2: 'Lo sentimos, favor de intentar más tarde.',
        text3: 'Favor de llenar los campos en rojo.'
      } : {
        text1: 'Data successfully sent, thanks.',
        text2: 'We are sorry, pleas try again later.',
        text3: 'Please fill in all fields on red.'
      };

      if (isFormValid) {
        this.setState({
          showLoading: true
        });
        msgElement.html('Enviando...');
        var _this = this;
        var html = this.getHTMLMessage(formData);
        var data = {
          fromname: formData.name.value,
          replyto: formData.email.value,
          subject: 'Forma de Contacto Website: Lasermedica',
          html: html
        };

        (0, _restClient2.default)({
          path: '/api/send_email',
          method: 'POST',
          entity: data
        }).then(function (response) {
          var state = {
            showLoading: false
          };
          if (response.entity.status) {
            state.formData = _this.getInitialFormState();
          }
          _this.setState(state);
          msgElement.addClass(response.entity.status ? style.successCSSClass : style.errorCSSClass);
          msgElement.html(response.entity.status ? texts.text1 : texts.text2);
        });
      } else {
        msgElement.addClass(style.errorCSSClass);
      }
      msgElement.html(!isFormValid ? texts.text3 : '');
    }
  }, {
    key: 'render',
    value: function render() {
      var _state$formData = this.state.formData,
          name = _state$formData.name,
          email = _state$formData.email,
          location = _state$formData.location,
          message = _state$formData.message;

      var texts = _locationUtil2.default.getLang() === 'ES' ? {
        text1: 'Cargando',
        text2: 'Enviar'
      } : {
        text1: 'Loading',
        text2: 'Send'
      };

      return _react2.default.createElement(
        'form',
        { id: 'form', className: 'form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { id: 'lab_name', className: 'col-sm-2 control-label' },
            name.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-10' },
            _react2.default.createElement('input', { type: 'text', name: 'name', onChange: this.onChangeHandler, value: name.value })
          ),
          _react2.default.createElement('div', { className: style.borderBottom })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { id: 'lab_email', className: 'col-sm-2 control-label ' + style.title1 },
            email.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-10' },
            _react2.default.createElement('input', { type: 'text', name: 'email', onChange: this.onChangeHandler, value: email.value })
          ),
          _react2.default.createElement('div', { className: style.borderBottom })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { id: 'lab_location', className: 'col-sm-2 control-label' },
            location.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-10' },
            _react2.default.createElement(
              'div',
              { className: style.styled_select_1 },
              _react2.default.createElement(
                'select',
                { name: 'location', onChange: this.onChangeHandler, value: location.value },
                _react2.default.createElement(
                  'option',
                  { value: 'Tijuana' },
                  'Tijuana'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Mexicali' },
                  'Mexicali'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Ensenada' },
                  'Ensenada'
                )
              )
            )
          ),
          _react2.default.createElement('div', { className: style.borderBottom })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { id: 'lab_message', className: 'col-sm-2 control-label' },
            message.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-10' },
            _react2.default.createElement('textarea', { name: 'message', onChange: this.onChangeHandler, value: message.value })
          ),
          _react2.default.createElement('div', { className: style.borderBottom })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { id: 'msg' })
        ),
        _react2.default.createElement(
          'div',
          null,
          this.state.showLoading ? _react2.default.createElement(
            'span',
            { className: style.loader },
            texts.text1
          ) : null
        ),
        _react2.default.createElement(
          'div',
          { className: 'pull-right' },
          _react2.default.createElement(
            'a',
            { className: style.d, onClick: this.submitFormHandler },
            _react2.default.createElement(
              'div',
              { className: style.title },
              texts.text2
            )
          )
        )
      );
    }
  }]);

  return Form1;
}(_react2.default.Component);

exports.default = Form1;