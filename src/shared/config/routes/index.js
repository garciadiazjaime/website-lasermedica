import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import ContactSection from '../../components/sections/contact';
import ServicesInnerSection from '../../components/sections/services/inner';
import sitemap from '../sitemap';
const { items } = sitemap;
const routes = items.children.map((item, index) => {
  return (<Route path={item.url} component={item.component} key={index} />);
});
const history = process.env.TIER === 'FE' ? createBrowserHistory() : null;


export default(
  <Router history={history}>
    <Route path="/" component={items.component}>
      <IndexRoute component={items.default} />
      {routes}

      <Route path="servicios/:category/:service" component={ServicesInnerSection} />
      <Route path="servicios/:category" component={ServicesInnerSection} />
      <Route path="services/:category/:service" component={ServicesInnerSection} />
      <Route path="services/:category" component={ServicesInnerSection} />

      <Route path="contacto/:service" component={ContactSection} />
      <Route path="contact/:service" component={ContactSection} />

      <Route path="ubicacion/:ubicacion" component={ContactSection} />
      <Route path="location/:ubicacion" component={ContactSection} />
    </Route>
  </Router>
);
