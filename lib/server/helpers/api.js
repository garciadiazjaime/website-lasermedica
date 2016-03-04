'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var express = require('express');
/*eslint-disable */
var router = express.Router();
/*eslint-enable */
var conf = require('../../../config');
var sendgrid = require('sendgrid')(conf.get('sendgrid'));

router.post('/send_email', function (req, res) {
  var fromname = req.body.fromname;
  var replyto = req.body.replyto;
  var subject = req.body.subject;
  var html = req.body.html;

  var email = new sendgrid.Email({
    to: conf.get('email'),
    from: conf.get('email'),
    fromname: fromname,
    replyto: replyto,
    subject: subject,
    bcc: ['info@mintitmedia.com'],
    html: html
  });

  sendgrid.send(email, function (err) {
    var response = true;
    if (err) {
      console.error(err);
      response = false;
    }
    res.send({
      status: response
    });
  });
});

exports.default = router;