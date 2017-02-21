//Contains our mapping:
//for this url, show this component
//for that url show this component.
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

//matches path to component
//whenever user is at this path, show this component
export default (
  <Route path="/" component={App} />
);
