var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://glaring-fire-9970.firebaseio.com/';

var ListItem = React.createClass({
    displayName: 'ListItem',
    getInitialState() {
        return {
            text: this.props.item.text,
            done: this.props.item.done,
            textChanged: false

        };
    },
    componentWillMount() {
        this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
    },
    handleDoneChange(event) {
      var update = {done: event.target.checked}
      this.setState(update)
      this.fb.update(update)
    },
    render() {
        return <div className='input-group'>
          <span className='input-group-addon'>
            <input 
              type='checkbox' 
              checked={this.state.done}
              onChange={this.handleDoneChange}
              />            
          </span>
          <input
            disabled={this.state.done}
            type='text'
            className='form-control'
            value={this.state.text} 
            onChange={this.handleTextChange}/>
          <span className='input-group-btn'>
            {this.changesButtons()}
            <button 
              className='btn btn-default' 
              onClick={this.onDeleteClickHandler}>
              Delete
            </button>
          </span>
        </div>
    },
    changesButtons() {
      if (!this.state.textChanged) {
        return null
      } else {
        return [
          <button 
            onClick={this.handleSaveClick}
            className='btn btn-default'>Save</button>,
          <button 
            className='btn btn-default'
            onClick={this.handleUndoClick}
            >Undo</button>  
        ]
      }      
    },
    handleUndoClick() {
      this.setState({
              text: this.props.item.text,
              textChanged: false
              })

    },
    onDeleteClickHandler(event) {
      this.fb.remove();
    },
    handleTextChange(event) {
      this.setState({
        textChanged: true,
        text: event.target.value
      });
    },
    handleSaveClick() {
      console.log('hello')
      this.fb.update({
        text: this.state.text
      })
      this.setState({
        textChanged: false
      })
    }
});

module.exports = ListItem;