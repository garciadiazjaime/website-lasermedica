'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint max-len: [2, 600, 4] */
var scropllInProgress = false;

function getScrollTo(section, elementID) {
  var topElements = ['inicio', 'nosotros', 'equipo', 'servicios', 'contacto'];
  if (topElements.indexOf(elementID) !== -1 || section === 'contacto') {
    return 0;
  }
  return $('#' + elementID).offset().top - 220;
}

exports.default = function (location) {
  // todo: get topElements from sitemap and improve exceptions "elementID"
  var bits = location.pathname.split('/');
  var elementID = location.pathname ? bits.pop() || 'inicio' : 'inicio';
  if ($('.menu_trigger').is(':visible') && bits.length === 1) {
    elementID = 'inicio';
  }
  if (bits[1] === 'contacto') {
    elementID = 'contacto';
  }
  if ($('#' + elementID).length && !scropllInProgress) {
    scropllInProgress = true;
    var scrollTo = getScrollTo(bits[1], elementID);
    var srolltime = 100;
    var rootTag = typeof document.body.scrollTop !== 'undefined' ? 'body' : 'html, body';
    $(rootTag).animate({
      scrollTop: scrollTo
    }, srolltime, 'swing', function () {
      scropllInProgress = false;
    });
  }
};