'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var scropllInProgress = false;

exports.default = function (location) {
  var bits = location.pathname.split('/');
  var elementID = location.pathname ? bits.pop() || 'inicio' : 'inicio';
  if ($('#mainmenu_trigger').is(':visible') && bits.length === 1) {
    elementID = 'inicio';
  }

  if ($('#' + elementID).length && !scropllInProgress) {
    scropllInProgress = true;
    var scrollTo = $('#' + elementID).offset().top - 43;
    var srolltime = 100;
    var rootTag = typeof document.body.scrollTop !== 'undefined' ? 'body' : 'html, body';
    $(rootTag).animate({
      scrollTop: scrollTo
    }, srolltime, 'swing', function () {
      scropllInProgress = false;
    });
  }
};