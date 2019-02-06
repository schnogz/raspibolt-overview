import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { ipcRenderer } from 'electron';

const GlobalStyle = createGlobalStyle`
  html, body, #app, #app > div {
    padding: 0; 
    margin: 0; 
    height: 100%;
  }
  html, body {
    overflow: hidden; 
    background-color: black;
    color: yellow;
    font-family: 'Montserrat', Helvetica, sans-serif;
    -webkit-app-region: drag;
  }
`

class App extends React.Component {
  state = {}
  componentDidMount () {
    const that = this
    ipcRenderer.send('refresh-data')
    ipcRenderer.on('data-refreshed', (e, resp) => {
      that.setState({ data: resp.test})
    })
  }

  render () {
    return (
      <div>
        <p>RaspiBolt System Overview</p>
        { this.state.data }
        <GlobalStyle/>
      </div>
    );
  }
}

export default App;
