var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Leche Flan'
  ]
}

// Ask react to render this class
var element = React.createElement(Dropdown, options);

// When we ask react to render this class,
// we will tell it where to place the rendered element in the dom

ReactDOM.render(element, document.querySelector('.container'))
