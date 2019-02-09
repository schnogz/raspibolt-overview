import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'
import { FormDown, FormUp } from 'grommet-icons'

const HeaderText = styled(Heading)`
  margin-top: -14px;
  font-size: 24px;
`
class SystemStats extends React.PureComponent {
  render () {
    return (
      <Box gridArea='topLeft' background='light-4' animation='slideUp' pad='small'>
        <HeaderText margin="none" size='small' textAlign='center'>
          System
        </HeaderText>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>Memory:</Text>
            <Text>571M / 976M</Text>
          </Box>
        </Box>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>SSD:</Text>
            <Text>13G (86%)</Text>
          </Box>
        </Box>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>HHD:</Text>
            <Text>228G (49%)</Text>
          </Box>
        </Box>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>Bandwidth:</Text>
            <Text>
              <FormUp size='small' />2.0GiB,
              <FormDown size='small' /> 375.7MiB
            </Text>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default SystemStats
