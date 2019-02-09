import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

const HeaderText = styled(Heading)`
  margin-top: -14px;
  font-size: 24px;
`

class BitcoinNodeStats extends React.PureComponent {
  render () {
    return (
      <Box gridArea='bottomLeft' background='light-4' animation='slideUp' pad='small'>
        <HeaderText margin="none" size='small' textAlign='center'>
          Bitcoin Node
        </HeaderText>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>Synced</Text>
            <Text>100%</Text>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default BitcoinNodeStats
