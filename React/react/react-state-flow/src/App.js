import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
let generateID = 1;
class App extends Component {
  state = {
    lists: [
      {name: 'tom', age: 19, school: 'school1', id: 0},
      {name: 'tom1', age: 18, school: 'school2', id: 1},
      {name: 'tom2', age: 19, school: 'school3', id: 2}
    ],
    commentList: []
  }
  handleAddInfo = () => {
    const lists = this.state.lists.slice(0);
    generateID ++
    lists.push({name: 'tom5', age: 19, school: 'school3', id: generateID})
    this.setState({
      lists
    })
  }
  handlePublish = (userName, commentConent) => {
    // 先push 后setState
    const commentList = this.state.commentList.slice(0);
    commentList.push({userName, commentConent});
    this.setState({
      commentList
    })
  }
  handleListDelete = (id) => {
    console.log("父组件收到id", id);
    const lists = this.state.lists.slice(0);
    const index = lists.findIndex(list => list.id === id);
    lists.splice(index, 1);
    this.setState({
      lists
    })
  }
  render() {
    const { lists, commentList } = this.state;
    return (
      <>
      <ul>
        <button onClick={this.handleAddInfo}>添加一条数据</button>
        {
          lists.map((list, i) => {
            return (
              <List list={list} key={list.id} onDelete={this.handleListDelete}/>
            )
          })
        }
      </ul>
      <div>
        <CommentInput onPublish={this.handlePublish}/>
        <CommentList commentList={ commentList }/>
      </div>
      </>
    )
  }
}

export default App;
