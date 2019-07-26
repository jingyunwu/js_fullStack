import React from 'react';

class App extends React.Component {
  componentDidMount() {
    const { addComment } = this.props;
    setTimeout(() => {
      addComment('userName1', 'content1')
      addComment('userName2', 'content2')
    }, 200)
  }
  render() {
    const { commentList } = this.props;
    return (
       <div>
         { commentList.length === 0 ?
          '暂无评论': <ul> 
            {
              commentList.map((comment, i) => {
                return <li>
                  userName: {comment.userName}
                  content: {comment.content}
                </li>
              })
            }
          </ul>
        }
       </div>
    );
  }
}

export default App;