var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;
var count = 0

module.exports = React.createClass({
  render: function() {
    console.log(count++)

    return <nav className='navbar navbar-default header'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Imgur Browser
        </Link>
        <ul className='nav navbar-nav navbar-right'>
          <li><a>Topic #1</a></li>
        </ul>
      </div>
    </nav>
  }
});
