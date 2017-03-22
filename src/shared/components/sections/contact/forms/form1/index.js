/* eslint max-len: [2, 600, 4] */

import React from 'react';
import _ from 'lodash';

import locationUtil from '../../../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('../../style.scss') : {};
import restClient from '../../../../../../server/helpers/rest-client';


export default class Form1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: this.getInitialFormState(),
      requiredFields: this.getRequiredFields(this.getInitialFormState()),
      showLoading: false,
    };

    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    const formData = this.state.formData;
    const { name, value } = event.target;
    formData[name].value = value;
    this.setState({ formData });
  }

  getRequiredFields(data) {
    const fields = {};
    _.map(data, (item, index) => {
      if (item.require) {
        fields[index] = item;
      }
    });
    return fields;
  }

  getInitialFormState() {
    return locationUtil.getLang() === 'ES' ? {
      name: {
        title: 'Nombre',
        value: '',
        require: true,
      },
      email: {
        title: 'Correo',
        value: '',
        require: true,
      },
      location: {
        title: 'Para',
        value: 'Tijuana',
        require: true,
      },
      message: {
        title: 'Mensaje',
        value: '',
        require: true,
      },
    } : {
      name: {
        title: 'Name',
        value: '',
        require: true,
      },
      email: {
        title: 'Email',
        value: '',
        require: true,
      },
      location: {
        title: 'To',
        value: 'Tijuana',
        require: true,
      },
      message: {
        title: 'Message',
        value: '',
        require: true,
      },
    };
  }

  getHTMLMessage(data) {
    const response = _.map(data, (item) => {
      return item.title + ': ' + item.value + '<br />';
    });
    return response.join('');
  }

  validateForm(data, requiredFields) {
    let response = true;
    _.map(requiredFields, (item, property) => {
      const labelElement = $('#lab_' + property);
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
  submitFormHandler(event) {
    event.preventDefault();
    const formData = this.state.formData;
    const isFormValid = this.validateForm(formData, this.state.requiredFields);
    const msgElement = $('#msg');
    msgElement.removeClass(style.errorCSSClass + ' ' + style.successCSSClass);
    msgElement.html('');
    const texts = locationUtil.getLang() === 'ES' ? {
      text1: 'Información enviada de manera exitosa, gracias.',
      text2: 'Lo sentimos, favor de intentar más tarde.',
      text3: 'Favor de llenar los campos en rojo.',
    } : {
      text1: 'Data successfully sent, thanks.',
      text2: 'We are sorry, pleas try again later.',
      text3: 'Please fill in all fields on red.',
    };

    if (isFormValid) {
      this.setState({
        showLoading: true,
      });
      msgElement.html('Enviando...');
      const _this = this;
      const html = this.getHTMLMessage(formData);
      const data = {
        fromname: formData.name.value,
        replyto: formData.email.value,
        subject: 'Forma de Contacto Website: Lasermedica',
        html,
      };

      restClient({
        path: '/api/send_email',
        method: 'POST',
        entity: data,
      }).then((response) => {
        const state = {
          showLoading: false,
        };
        if (response.entity.status) {
          state.formData = _this.getInitialFormState();
        }
        _this.setState(state);
        msgElement.addClass(response.entity.status ? style.successCSSClass : style.errorCSSClass);
        msgElement.html(response.entity.status ?
          texts.text1 :
          texts.text2);
      });
    } else {
      msgElement.addClass(style.errorCSSClass);
    }
    msgElement.html(!isFormValid ? texts.text3 : '');
  }

  render() {
    const { name, email, location, message } = this.state.formData;
    const texts = locationUtil.getLang() === 'ES' ? {
      text1: 'Cargando',
      text2: 'Enviar',
    } : {
      text1: 'Loading',
      text2: 'Send',
    };

    return (<form id="form" className={'form-horizontal'}>
        <div className="form-group">
          <label id="lab_name" className="col-sm-2 control-label">{name.title}</label>
          <div className="col-sm-10">
            <input type="text" name="name" onChange={this.onChangeHandler} value={name.value} />
          </div>
          <div className={style.borderBottom}></div>
        </div>

        <div className="form-group">
          <label id="lab_email" className={'col-sm-2 control-label ' + style.title1}>{email.title}</label>
          <div className="col-sm-10">
            <input type="text" name="email" onChange={this.onChangeHandler} value={email.value}/>
          </div>
          <div className={style.borderBottom}></div>
        </div>

        <div className="form-group">
          <label id="lab_location" className="col-sm-2 control-label">{location.title}</label>
          <div className="col-sm-10">
            <div className={style.styled_select_1}>
              <select name="location" onChange={this.onChangeHandler} value={location.value}>
                <option value="Tijuana">Tijuana</option>
                <option value="Mexicali">Mexicali</option>
                <option value="Ensenada">Ensenada</option>
              </select>
            </div>
          </div>
          <div className={style.borderBottom}></div>
        </div>

        <div className="form-group">
          <label id="lab_message" className="col-sm-2 control-label">{message.title}</label>
          <div className="col-sm-10">
            <textarea name="message" onChange={this.onChangeHandler} value={message.value} />
          </div>
          <div className={style.borderBottom}></div>
        </div>

        <div><span id="msg"></span></div>
        <div>
          {
            this.state.showLoading ?
              (<span className={style.loader}>{texts.text1}</span>)
              : null
          }
        </div>
        <div className="pull-right">
          <a className={style.d} onClick={this.submitFormHandler}>
            <div className={style.title}>{texts.text2}</div>
          </a>
        </div>
      </form>
    );
  }
}
