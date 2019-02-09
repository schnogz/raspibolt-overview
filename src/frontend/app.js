import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ipcRenderer } from 'electron'
import { Box, Grid } from 'grommet'

import Header from './components/header.js'
import SystemStats from './components/systemStats.js'
import BitcoinNodeStats from './components/bitcoinNodeStats.js'
import MarketStats from './components/marketStats.js'
import LightningNodeStats from './components/lightningNodeStats.js'

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: black;
    -webkit-app-region: drag;
    overflow: scroll;
  }
`
const StyledGrid = styled(Grid)`
  margin-top: 4px;
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
      <Box direction='column' pad='xxsmall'>
        <Header />
        <StyledGrid
          rows={['flex', 'flex']}
          columns={[{"count": "fit", "size": "auto"}]}
          gap="xsmall"
          areas={[
            { name: 'topLeft', start: [0, 0], end: [0, 0] },
            { name: 'topRight', start: [1, 0], end: [1, 0] },
            { name: 'bottomLeft', start: [0, 1], end: [0, 1] },
            { name: 'bottomRight', start: [1, 1], end: [1, 1] }
          ]}
        >
          <SystemStats />
          <MarketStats />
          <BitcoinNodeStats />
          <LightningNodeStats />
        </StyledGrid>
        <GlobalStyle/>
      </Box>
    )
  }
}

export default App
