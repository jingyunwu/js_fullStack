import React, { Component } from 'react';

class List extends Component {
  handleDelete = (e) => {
    const { onDelete } = this.props
    const id = parseInt(e.target.dataset.id);
    console.log(id)
    onDelete(id);
  }
  render() {
    const { list } = this.props;
    
    return (
      <React.Fragment>
      <li>
        name:{list.name}
        age:{list.age}
        school:{list.school}
      </li>
      <button onClick={this.handleDelete} data-id={list.id}>delete</button>
      </React.Fragment>
    )
    
    
   
  }
}
export default List;