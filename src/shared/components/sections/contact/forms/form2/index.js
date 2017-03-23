/* eslint max-len: [2, 600, 4] */

import React from 'react';
import _ from 'lodash';

import locationUtil from '../../../../../utils/locationUtil';
const style = process.env.TIER === 'FE' ? require('../../style.scss') : {};
import restClient from '../../../../../../server/helpers/rest-client';


export default class Form2 extends React.Component {

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
      name2: {
        title: 'Nombre',
        value: '',
        require: true,
      },
      email2: {
        title: 'Correo',
        value: '',
        require: true,
      },
      tel2: {
        title: 'Teléfono',
        value: '',
        require: true,
      },
      location2: {
        title: 'Para',
        value: 'Tijuana',
        require: true,
      },
      date2: {
        title: 'Fecha',
        value: '',
        require: true,
      },
      message2: {
        title: 'Mensaje',
        value: '',
        require: true,
      },
    } : {
      name2: {
        title: 'Name',
        value: '',
        require: true,
      },
      email2: {
        title: 'Email',
        value: '',
        require: true,
      },
      tel2: {
        title: 'Telephone',
        value: '',
        require: true,
      },
      location2: {
        title: 'To',
        value: 'Tijuana',
        require: true,
      },
      date2: {
        title: 'Date',
        value: '',
        require: true,
      },
      message2: {
        title: 'Procedure of Interest',
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
    const msgElement = $('#msg2');
    msgElement.removeClass(style.errorCSSClass + ' ' + style.successCSSClass);
    msgElement.html('');

    if (isFormValid) {
      this.setState({
        showLoading: true,
      });
      msgElement.html('Enviando...');
      const _this = this;
      const html = this.getHTMLMessage(formData);
      const data = {
        fromname: formData.name2.value,
        replyto: formData.email2.value,
        subject: 'Forma de Contacto Website: Lasermedica [Cita]',
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
          'Información enviada de manera exitosa, gracias.' :
          'Lo sentimos, favor de intentar más tarde.');
      });
    } else {
      msgElement.addClass(style.errorCSSClass);
    }
    msgElement.html(!isFormValid ? 'Favor de llenar los campos en rojo.' : '');
  }

  render() {
    const { name2, email2, tel2, location2, date2, message2 } = this.state.formData;
    const texts = locationUtil.getLang() === 'ES' ? {
      text1: 'Cargando',
      text2: 'AGENDAR CITA',
    } : {
      text1: 'Loading',
      text2: 'SEND',
    };

    return (<form id="form" className={style.form + ' form-horizontal'}>
        <div className="form-group">
          <label id="lab_name2" className="col-sm-3 control-label">{name2.title}</label>
          <div className="col-sm-9">
            <input type="text" name="name2" onChange={this.onChangeHandler} value={name2.value} />
          </div>
          <div className={style.borderBottom2}></div>
        </div>

        <div className="form-group">
          <label id="lab_email2" className="col-sm-3 control-label">{email2.title}</label>
          <div className="col-sm-9">
            <input type="text" name="email2" onChange={this.onChangeHandler} value={email2.value}/>
          </div>
          <div className={style.borderBottom2}></div>
        </div>

        <div className="form-group">
          <label id="lab_tel2" className="col-sm-3 control-label">{tel2.title}</label>
          <div className="col-sm-9">
            <input type="tel" name="tel2" onChange={this.onChangeHandler} value={tel2.value}/>
          </div>
          <div className={style.borderBottom2}></div>
        </div>

        <div className="form-group">
          <label id="lab_location2" className="col-sm-3 control-label">{location2.title}</label>
          <div className="col-sm-9">
            <div className={style.styled_select2}>
              <select name="location2" onChange={this.onChangeHandler} value={location2.value}>
                <option value="Tijuana">Tijuana</option>
                <option value="Mexicali">Mexicali</option>
                <option value="Ensenada">Ensenada</option>
              </select>
            </div>
          </div>
          <div className={style.borderBottom2}></div>
        </div>

        <div className="form-group">
          <label id="lab_date2" className="col-sm-3 control-label">{date2.title}</label>
          <div className="col-sm-9">
            <input type="text" name="date2" onChange={this.onChangeHandler} value={date2.value} />
          </div>
          <div className={style.borderBottom2}></div>
        </div>

        <div className="form-group">
          <label id="lab_message2" className="col-sm-10 control-label">
            {message2.title}
          </label>
          <div className="col-sm-12 col-sm-offset-1">
            <input type="text" name="message2" onChange={this.onChangeHandler} value={message2.value} />
          </div>
          <div className={style.borderBottom2}></div>
        </div>

        <div><span id="msg2"></span></div>
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
