var React = require('react');
var ReactRouter = require('react-router');
// Handle what goes on the page
var Router = ReactRouter.Router;
// use to configure the router
var Route = ReactRouter.Route;

var Main = require('./components/main');

var Topic = require('./components/topic');
var ImageDetail = require('./components/image-detail');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic}>
      </Route>
      <Route path="images/:id" component={ImageDetail}>
      </Route>
    </Route>
  </Router>
)
