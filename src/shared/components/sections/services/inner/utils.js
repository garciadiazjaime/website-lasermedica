import _ from 'lodash';


export default class Utils {

  static setCategoryItems(data, categoryUrl) {
    const response = [];
    data.map((item) => {
      if (item.href === categoryUrl) {
        response.push.apply(response, item.children);
      }
    });
    return response;
  }

  static getPrevNext(data, service) {
    let prev = '';
    let next = '';
    if (_.isArray(data) && data.length > 1) {
      if (!service) {
        next = data[1].href;
      } else {
        for (let i = 0, len = data.length; i < len; i++) {
          const bits = data[i].href.split('/');
          const currentService = bits.pop();
          if (currentService.toUpperCase() === service.toUpperCase()) {
            if (i === 0) {
              next = data[i + 1].href;
            } else if (i + 1 < len) {
              next = data[i + 1].href;
              prev = data[i - 1].href;
            } else if (i + 1 === len) {
              prev = data[i - 1].href;
            }
          }
        }
      }
    }
    return {
      prev,
      next,
    };
  }
}
