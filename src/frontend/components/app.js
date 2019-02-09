import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { ipcRenderer } from 'electron'
import { Box, Grid, Heading } from 'grommet'
import Header from './header'

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden; 
    background-color: black;
    -webkit-app-region: drag;
  }
`

const Separator = styled.div`
  margin-top: 10px;
  border-bottom: 2px solid #FFCA58;
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
      <Box direction='column' pad='small'>
        <Header />
        <Separator />
        <Grid
          style={{marginTop: '10px'}}
          rows={['flex', 'flex']}
          columns={[{"count": "fit", "size": "flex"}]}
          gap="small"
          areas={[
            { name: 'topLeft', start: [0, 0], end: [0, 0] },
            { name: 'topRight', start: [1, 0], end: [1, 0] },
            { name: 'bottomLeft', start: [0, 1], end: [0, 1] },
            { name: 'bottomRight', start: [1, 1], end: [1, 1] }
          ]}
        >
          <Box gridArea="topLeft" background="light-1" animation='slideUp'>
            <Heading margin="none" size='small'>
              System
            </Heading>
          </Box>
          <Box gridArea="topRight" background="light-2" animation='slideUp'>
            <Heading margin="none" size='small'>
              Markets
            </Heading>
          </Box>
          <Box gridArea="bottomLeft" background="light-3" animation='slideUp'>
            <Heading margin="none" size='small'>
              Bitcoin Node
            </Heading>
          </Box>
          <Box gridArea="bottomRight" background="light-4" animation='slideUp'>
            <Heading margin="none" size='small'>
              Lightning Node
            </Heading>
          </Box>
        </Grid>
        <GlobalStyle/>
      </Box>
    );
  }
}

export default App
