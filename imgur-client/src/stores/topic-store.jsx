var Reflux = require('reflux');

var Api = require('../utils/api');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(json) {
        this.topics = json.data
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    // triggering the 'change' event
    this.trigger('change', this.topics);
  }
});
