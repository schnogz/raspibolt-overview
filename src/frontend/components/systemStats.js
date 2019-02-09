import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

class SystemStats extends React.PureComponent {
  render () {
    return (
      <Box gridArea='topLeft' background='light-4' animation='slideUp'>
        <Heading margin="none" size='small'>
          System
        </Heading>
      </Box>
    )
  }
}

export default SystemStats
