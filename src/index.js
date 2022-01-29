import React from 'react';
import ReactDOM from 'react-dom';
import Count from "./components/count";

import App from './components/app';


ReactDOM.render(
    <App />,
  document.getElementById('root'));

ReactDOM.render(
    <Count/>,
    document.getElementById("count")
)
//
// ReactDOM.render(
//     <Field/>,
//     document.getElementById("count"),
//
// )

