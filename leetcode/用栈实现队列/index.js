/**  第232题
 * Initialize your data structure here. 分析：需要两个栈才能实现
 */
var MyQueue = function() {
    this._inputStack = [];  //这个栈用来存
    this._outputStack = [];  // 这个栈用来取
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this._inputStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if(this._outputStack.length === 0) {
    while(this._inputStack > 0) {
      this._outputStack.push(
        this._inputStack.pop()
      )
    }
  } 
  return this._outputStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  let num;
  if(this._outputStack.length === 0) {
    while(this._inputStack > 0) {
      this._outputStack.push(
        this._inputStack.pop()
      )
    }
    num = this._outputStack[this._outputStack.length - 1]
    while (this._outputStack.length) {
      this._inputStack.push(
        this._outputStack.pop()
      )
    }
  } else {
    num = this._outputStack[
      this._outputStack.length -1
    ]
  }
  return num;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this._inputStack.length === 0 && this._outputStack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

 var obj = new MyQueue();
 obj.push(1);
 obj.push(2);
 obj.push(3);
 var params_2 = obj.pop();
 console.log('param_2', params_2);
 obj.push(4);
 var param_3 = obj.pop();
 console.log('param_3', param_3);