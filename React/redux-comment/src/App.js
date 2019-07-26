import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import App from './component/App';

// class App extends React.Component {
//   componentDidMount() {
//     const { addComment } = this.props;
//     setTimeout(() => {
//       addComment('userName1', 'content1')
//       addComment('userName2', 'content2')
//     }, 200)
//   }
//   render() {
//     const { commentList } = this.props;
//     return (
//        <div>
//          { commentList.length === 0 ?
//           '暂无评论': <ul> 
//             {
//               commentList.map((comment, i) => {
//                 return <li>
//                   userName: {comment.userName}
//                   content: {comment.content}
//                 </li>
//               })
//             }
//           </ul>
//         }
//        </div>
//     );
//   }
// }
// mapStateToProps
const a = (state) => {
  // 过滤一下
  return {
    commentList: state
  }
}
// mapDispatchToProps
const b = (dispatch) => {
  return {
    addComment: (userName, content) => {
      dispatch({
        type: 'ADD_COMMENT',
        userName,
        content
      })
    }
  }
}
export default connect(a, b)(App);
