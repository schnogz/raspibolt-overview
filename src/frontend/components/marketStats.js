import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

class MarketStats extends React.PureComponent {
  render () {
    return (
      <Box gridArea='topRight' background='light-4' animation='slideUp'>
        <Heading margin="none" size='small'>
          Markets
        </Heading>
      </Box>
    )
  }
}

export default MarketStats
