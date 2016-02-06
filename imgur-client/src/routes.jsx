var React = require('react');
var ReactRouter = require('react-router');
// Handle what goes on the page
var Router = ReactRouter.Router;
// use to configure the router
var Route = ReactRouter.Route;

var Main = require('./components/main');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
    </Route>
  </Router>
)
