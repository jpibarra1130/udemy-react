var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var rootUrl = 'https://glaring-fire-9970.firebaseio.com/';
var List = require('./list');

var App = React.createClass({
  mixins:[ ReactFire ],
  getInitialState() {
      return {
          items: {},
          loaded: false  
      };
  },
  // a group of methods that gets 'mixed' here
  componentWillMount: function() {
    // this method will be called once when the component gets mounted to the DOM

    this.fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded);
    // bindAsObject is not from react but from reactFire
  },
  handleDataLoaded: function() {
    this.setState({loaded: true});
  },
  render: function() {
    return <div className='row panel panel-default'>
      <div className='col=md-8 col-md-offset-2'>

        <h2 className='text-center'>
          To-Do List
        </h2>
        <Header itemStore={this.firebaseRefs.items}/>
        <hr />
        <div className={'content' + (this.state.loaded ? ' loaded' : '')}>
          <List items={this.state.items} />
          {this.deleteButton()}
        </div>        
      </div>
    </div>
  },
  deleteButton() {
    if (!this.state.loaded) {
      return
    } else {
      return <div className="text-center clear-complete">
        <hr />
        <button 
          type='button'
          onClick={this.onDeleteDoneClick}
          className='btn btn-default'>
          Clear Complete
        </button>

      </div>
    }
  },
  onDeleteDoneClick() {
    console.log('Clear Complete')
    for (var key in this.state.items) {
      if (this.state.items[key].done === true) {
        this.fb.child(key).remove();
      }
    }
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
