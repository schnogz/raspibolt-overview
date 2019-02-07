import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { ipcRenderer } from 'electron'
import logo from 'assets/logo.png'

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
  state = { data: '' }
  componentDidMount () {
    const that = this
    ipcRenderer.send('data-request', 'getDate')
    ipcRenderer.send('data-request', 'getSystemTemp')
    ipcRenderer.send('data-request', 'getSystemUptime')
    ipcRenderer.send('data-request', 'getSystemMemory')
    ipcRenderer.send('data-request', 'getSystemStorage')
    ipcRenderer.on('data-response', (e, resp) => {
      resp.error
        ? console.error(`Command: ${resp.cmdRequest} Error: ${resp.error}`)
        : that.setState({ data: that.state.data += resp.data + " // " })
    })
  }

  render () {
    return (
      <div>
        <img src={logo} alt="Logo" height='100px' width='100px'/>
        <p>RaspiBolt System Overview</p>
        { this.state.data }
        <GlobalStyle/>
      </div>
    );
  }
}

export default App
