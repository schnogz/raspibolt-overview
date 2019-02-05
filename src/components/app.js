import React from 'react';
import { createGlobalStyle } from 'styled-components'

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
  }
`

class App extends React.Component {
  render() {
    return (
      <div>
        <p>RaspiBolt System Overview</p>
        <GlobalStyle/>
      </div>
    );
  }
}

export default App;
