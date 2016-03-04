'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var scropllInProgress = false;
// export default (location) => {
exports.default = function () {
  // todo: fix autoscroll and uncomment lines
  // const bits = location.pathname.split('/');
  // let elementID = location.pathname ? bits.pop() || 'inicio' : 'inicio';
  // if ($('.menu_trigger').is(':visible') && bits.length === 1) {
  //   elementID = 'inicio';
  // }
  // if ($('#' + elementID).length && !scropllInProgress) {
  if (!scropllInProgress) {
    scropllInProgress = true;
    // const scrollTo = $('#' + elementID).offset().top - 43;
    var srolltime = 100;
    var rootTag = typeof document.body.scrollTop !== 'undefined' ? 'body' : 'html, body';
    $(rootTag).animate({
      scrollTop: 0
    }, srolltime, 'swing', function () {
      scropllInProgress = false;
    });
  }
};