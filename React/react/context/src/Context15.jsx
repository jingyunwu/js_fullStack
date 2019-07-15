import React, { Component } from 'react';
import propTypes from 'prop-types';
class Context15 extends Component {
  // static childContextTypes = {
  // theme: propTypes.string
  //}
  // foo(){}
  // foo = () => {}
  state = { 
    theme: 'red'
  }
  // 后代组件从这里取信息
  getChildContext() {
    return {
      theme: this.state.theme
    }
  }
  // 第一种方法  data-theme="purple"
  // handleToggleTheme = (e) => {
  //   const theme = e.target.dataset.theme;
  //   this.setState({
  //     theme
  //   })
  // }
  // 第二种  this.handleToggleTheme('purple')
  // handleToggleTheme = (theme) => () => {
  //   this.setState({
  //     theme
  //   })
  // }
  // 第三种
    handleToggleTheme = (theme) => {
      this.setState({
        theme
      })
    }
  render() { 
    const msg = ['str1', 'str2', 'str3'];
    
    return (
      <div>
        {
          msg.map((item, i)=> {
            return (
              <Message key={i} text={item} />
            )
          })
        }
        <button onClick={this.handleToggleTheme.bind(this, 'purple')} data-them="purple">purple</button>
        <button onClick={() => {
          this.handleToggleTheme('yellowgreen')
        }} data-theme="yellowgreen">yellowgreen</button>
      </div>
    );
  }
}
/**
 * function Person() {}
 * Person.childContextType
 */
Context15.childContextTypes = {
  theme: propTypes.string
}
class Message extends Component {
  shouldComponentUpdate() {
    return false;
  }
  state = {  }
  render() { 
    const { text } = this.props
    return (  
      <li>
        { text }
        <MyButton />
      </li>
    );
  }
}
class MyButton extends Component {
  static contextTypes = {
    theme: propTypes.string
  }
  state = {  }
  render() { 
    const { theme } = this.context;
    return ( 
      <button style={{color: theme}}>delete</button>
     );
  }
}
export default Context15;