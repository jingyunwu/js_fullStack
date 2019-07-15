import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Single from './components/Single';

const Root = function() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main}></Route>
      <Route path="/search/:searchTerm" component={Main}></Route>
      <Route path="/beer/:beerId/:beerSlug" component={Single}></Route>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'));
