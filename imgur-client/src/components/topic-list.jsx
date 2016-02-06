var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');

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
    console.log(this.state.topics)

    return this.state.topics.map(function(topic) {
      return <li>
        {topic.description}
      </li>
    })
  },
  onChange: function(event, topics) {
    this.setState({
      topics: topics
    });
  }
});
