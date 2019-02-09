import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

class BitcoinNodeStats extends React.PureComponent {
  render () {
    return (
      <Box gridArea='bottomLeft' background='light-4' animation='slideUp'>
        <Heading margin="none" size='small'>
          Bitcoin Node
        </Heading>
      </Box>
    )
  }
}

export default BitcoinNodeStats
