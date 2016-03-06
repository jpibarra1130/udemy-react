var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  render: function() {
    return <div className='list-group'>
      Topic List
      {this.renderTopics()}
    </div>
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  getInitialState: function() {
    return {
      topics: []
    }
  },
  renderTopics: function() {
    return this.state.topics.slice(0, 4).map(function(topic) {
      return <Link className="list-group-item" key={topic.id} to={"topics/" + topic.id}>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </Link>
    })
  },
  onChange: function(event, topics) {
    this.setState({
      topics: topics
    });
  }
});
