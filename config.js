var convict = require('convict');

var config = convict({
  email: {
    doc: 'default contact email',
    format: String,
    default: 'info@mintitmedia.com'
  },
  ipaddress: {
    doc: 'IP the application runs on',
    format: 'ipaddress',
    default: '0.0.0.0',
    env: 'OPENSHIFT_NODEJS_IP'
  },
  port: {
    doc: 'Port the application listens on',
    format: 'port',
    default: '3030',
    env: 'OPENSHIFT_NODEJS_PORT'
  },
  sendgrid: {
    doc: 'Sendrid API KEY',
    format: String,
    default: '',
    env: 'SENDGRID_API_KEY'
  }
});

config.validate();

module.exports = config;
