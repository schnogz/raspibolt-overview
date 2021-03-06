import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

const HeaderText = styled(Heading)`
  margin-top: -14px;
  font-size: 24px;
`

class LightningNodeStats extends React.PureComponent {
  render () {
    return (
      <Box gridArea='bottomRight' background='light-4' animation='slideUp' pad='small'>
        <HeaderText margin="none" size='small' textAlign='center'>
          Lightning Node
        </HeaderText>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>Channels Open</Text>
            <Text>18</Text>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default LightningNodeStats
