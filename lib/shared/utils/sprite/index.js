'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/* eslint max-len: [2, 500, 4] */

exports.default = function () {
  var data = [{
    image: {
      width: 2036,
      height: 300
    },
    sprite: {
      className: 'style__image1___3KY44',
      width: 460,
      height: 300,
      posX: 0,
      posY: -1120
    }
  }];
  var item = data[0];

  // image dimensions.
  var imgW = item.image.width;
  // const imgH = 446;
  // sprite dimensions.
  var sprW = item.sprite.width;
  var sprH = item.sprite.height;
  // sprite background-position.
  var posX = item.sprite.posX;
  var posY = item.sprite.posY;
  // Container dimensions.
  var imgEl = $('.' + item.sprite.className);
  var conW = imgEl.parent().width();
  var conH = imgEl.parent().height();
  // Ratio between the width of the container and the width of the sprite.
  var ratio = conW / sprW;
  var bckSize = imgW * ratio;

  // sets container dimensions if they have not been specified.
  if (conW === 0) {
    conW = sprW * ratio;
    imgEl.css('height', conW);
  }
  if (conH === 0) {
    conH = sprH * ratio;
    imgEl.css('height', conH);
  }
  // Calculates background-size based on the ratio.
  imgEl.css('background-size', bckSize);

  // Adjust background position to comply with the new background size.
  // This process depends on whether the height of the container is bigger than the new calculated height of the sprite.
  if (conH < sprH * ratio) {
    var yDisplacement = (sprH * ratio - conH) / 2;
    posY = posY * ratio - yDisplacement;
    imgEl.css('background-position', posX * ratio + ' ' + posY);
  } else if (conH >= sprH * ratio) {
    var ratio2 = conH / sprH;
    var xDisplacement = (sprW * ratio2 - conW) / 2;
    posX = posX * ratio2 - xDisplacement;
    imgEl.css('background-size', imgW * ratio2);
    imgEl.css('background-position', posX + ' ' + posY * ratio2);
  }
};