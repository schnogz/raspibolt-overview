import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

class LightningNodeStats extends React.PureComponent {
  render () {
    return (
      <Box gridArea='bottomRight' background='light-4' animation='slideUp'>
        <Heading margin="none" size='small'>
          Lightning Node
        </Heading>
      </Box>
    )
  }
}

export default LightningNodeStats
