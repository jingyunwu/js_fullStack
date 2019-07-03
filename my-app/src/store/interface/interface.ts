// 约束一个对象必须拥有哪些属性或方法
export interface movie {
  name: string;
  title: string;
  id: string;
}
export interface State {
  movieList: movie[]
}

// let numArr:number[] = [1, 2, true];