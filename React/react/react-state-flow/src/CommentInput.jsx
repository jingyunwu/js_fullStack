import React, { Component } from 'react';
class CommentInput extends Component {
  state = {  }
  handlePublish = () => {
    const { onPublish } = this.props;
    const userName = this.refs.userName.value;
    const commentConent = this.refs.commentConent.value;
    console.log({userName, commentConent});
    onPublish(userName, commentConent);
  }
  render() { 
    return (
      <div>
        用户名: <input type="text" ref="userName"/>
        评论内容: <textarea name="" id="" cols="30" rows="10" ref="commentConent"></textarea>
        <button onClick={this.handlePublish}>发布</button>
      </div>
    );
  }
}
 
export default CommentInput;
