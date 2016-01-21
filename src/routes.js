import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from 'containers/App/App';
import Home from 'containers/Home/Home';

export default () => {

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  );
};
