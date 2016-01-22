var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [
    {
      title: 'See Tutorials',
      number: 34,
      header: 'React',
      description: 'Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it\'s easy to try it out on a small feature in an existing project.',
      imageUrl: 'https://facebook.github.io/react/img/logo_og.png'
    },
    {
      title: 'Show Courses',
      number: 3,
      header: 'Learn Gulp',
      description: 'Gulp will help speed up your development workflow.',
      imageUrl: 'http://www.webdesignermag.co.uk/wp-content/uploads/2014/09/Speed-up-your-workflow-with-a-Gulp-plugin.png'
    }
  ]
}
// Ask react to render this class
var element = React.createElement(ThumbnailList, options);

// When we ask react to render this class,
// we will tell it where to place the rendered element in the dom

ReactDOM.render(element, document.querySelector('.container'))
