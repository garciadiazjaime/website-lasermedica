/* eslint max-len: [2, 500, 4] */

export default () => {
  const data = [{
    image: {
      width: 2036,
      height: 300,
    },
    sprite: {
      className: 'style__image1___3KY44',
      width: 460,
      height: 300,
      posX: 0,
      posY: -1120,
    },
  }];
  const item = data[0];

  // image dimensions.
  const imgW = item.image.width;
  // const imgH = 446;
  // sprite dimensions.
  const sprW = item.sprite.width;
  const sprH = item.sprite.height;
  // sprite background-position.
  let posX = item.sprite.posX;
  let posY = item.sprite.posY;
  // Container dimensions.
  const imgEl = $('.' + item.sprite.className);
  let conW = imgEl.parent().width();
  let conH = imgEl.parent().height();
  // Ratio between the width of the container and the width of the sprite.
  const ratio = conW / sprW;
  const bckSize = imgW * ratio;

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
    const yDisplacement = (sprH * ratio - conH) / 2;
    posY = posY * ratio - yDisplacement;
    imgEl.css('background-position', posX * ratio + ' ' + posY);
  } else if (conH >= sprH * ratio) {
    const ratio2 = conH / sprH;
    const xDisplacement = (sprW * ratio2 - conW) / 2;
    posX = posX * ratio2 - xDisplacement;
    imgEl.css('background-size', imgW * ratio2);
    imgEl.css('background-position', posX + ' ' + posY * ratio2);
  }
};
