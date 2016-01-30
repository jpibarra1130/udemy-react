var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    this.setState({open: !this.state.open});
  },
  getInitialState: function() {
    // gets run once when the function gets rendered
    return { open: false }
  },
  handleItemClicked: function(item) {
    this.setState({
      open: false,
      itemTitle: item
    })
  },
  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem 
                item={item} 
                whenItemClicked={this.handleItemClicked} 
                className={this.state.itemTitle == item ? 'active' : ''}/>

    }.bind(this));

    return <div className='dropdown'>
      <Button 
        whenClicked={this.handleClick} 
        className='btn-default' 
        title={this.state.itemTitle || this.props.title } 
        subTitleClassName='caret' 
        subTitle='29' />
      
      <ul className={'dropdown-menu ' + (this.state.open ? "show" : "")}>
      {list}
      </ul>
    </div>
  }
});
