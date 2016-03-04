'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _restClient = require('../../../../server/helpers/rest-client');

var _restClient2 = _interopRequireDefault(_restClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

    _this2.state = {
      formData: _this2.getInitialFormState(),
      requiredFields: _this2.getRequiredFields(_this2.getInitialFormState()),
      showLoading: false
    };

    _this2.submitFormHandler = _this2.submitFormHandler.bind(_this2);
    _this2.onChangeHandler = _this2.onChangeHandler.bind(_this2);
    return _this2;
  }

  _createClass(Form, [{
    key: 'onChangeHandler',
    value: function onChangeHandler(event) {
      var formData = this.state.formData;
      var _event$target = event.target;
      var name = _event$target.name;
      var value = _event$target.value;

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
      return {
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
        tel: {
          title: 'Tel&eacute;fono',
          value: '',
          require: true
        },
        message: {
          title: 'Mensaje',
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
      var _this3 = this;

      event.preventDefault();
      var formData = this.state.formData;
      var isFormValid = this.validateForm(formData, this.state.requiredFields);
      var msgElement = $('#msg');
      msgElement.removeClass(style.errorCSSClass + ' ' + style.successCSSClass);
      msgElement.html('');

      if (isFormValid) {
        (function () {
          _this3.setState({
            showLoading: true
          });
          msgElement.html('Enviando...');
          var _this = _this3;
          var html = _this3.getHTMLMessage(formData);
          var data = {
            fromname: formData.name.value,
            replyto: formData.email.value,
            subject: 'Forma de Contacto Website: Project',
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
            msgElement.html(response.entity.status ? 'Información enviada de manera exitosa, gracias.' : 'Lo sentimos, favor de intentar más tarde.');
          });
        })();
      } else {
        msgElement.addClass(style.errorCSSClass);
      }
      msgElement.html(!isFormValid ? 'Favor de llenar los campos en rojo.' : '');
    }
  }, {
    key: 'render',
    value: function render() {
      var _state$formData = this.state.formData;
      var name = _state$formData.name;
      var email = _state$formData.email;
      var tel = _state$formData.tel;
      var message = _state$formData.message;

      return _react2.default.createElement(
        'form',
        { id: 'form', className: style.form + ' form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { id: 'lab_name', className: 'col-sm-2 control-label' },
            'Nombre'
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
            { id: 'lab_email', className: 'col-sm-2 control-label' },
            'Correo'
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
            { id: 'lab_tel', className: 'col-sm-2 control-label' },
            'Teléfono'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-10' },
            _react2.default.createElement('input', { type: 'tel', name: 'tel', onChange: this.onChangeHandler, value: tel.value })
          ),
          _react2.default.createElement('div', { className: style.borderBottom })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { id: 'lab_message', className: 'col-sm-2 control-label' },
            'Mensaje'
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
            'Cargando'
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
              'Enviar'
            )
          )
        )
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

exports.default = Form;