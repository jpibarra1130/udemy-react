var React = require('react');

module.exports = React.createClass({
  render: function() {
    console.log(this.props.comments.length)
    return <ul>
      {this.renderComments()}
    </ul>
  },
  renderComments: function() {
    return this.props.comments.slice(0, 30).map(function(comment) {
      return <li className='list-group-item comment-box' key={comment.id}>
        <span className='badge'>{comment.up}</span>
        <h5>{comment.author}</h5>
        {comment.comment}
      </li>
    });
  }
});
