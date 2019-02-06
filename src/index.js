import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { ipcRenderer } from 'electron';

render(<App />, document.getElementById('app'));

// console.info('LOADED')
// document.addEventListener('fetchData', function() {
//   ipcRenderer.send('fetchData')
// })
//
// ipcRenderer.on('data', function(event, response) {
//   console.info(response)
// })
