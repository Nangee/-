import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Main/Conter/Nav';
// import Faculty from './components/Main/Faculty/Faculty';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<div><Nav/></div>,document.getElementById('root'));
registerServiceWorker();
