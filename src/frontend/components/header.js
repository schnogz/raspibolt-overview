import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { Box, Clock, Heading, Image, Text } from 'grommet'

import logo from 'assets/logo.png'
const DateText = styled(Text)`
  font-style: italic;
  font-size: 16px;
`
const StyledClock = styled(Clock)`
  font-weight: 400;
  color: #FFCA58;
  & > div {
    font-size: 46px;
    width: 0.65em;
  }
`
class Header extends React.PureComponent {
  render () {
    return (
      <Box direction='row' justify='between' height='70px' style={{marginBottom: '4px'}}>
        <Box direction='row' align='start' flex={{grow: "2"}} animation='slideRight'>
          <Image src={logo} height='70px' width='70px'/>
          <Box flex={{grow: "2"}} direction='column' justify='evenly' align='center' height='100%'>
            <Heading margin="none" size='small' color='brand'>
              RaspiBolt Stats
            </Heading>
            <Text color='light-3'>
              up: 11:44, 2 users, load average: 0.22, 0.30, 0.33
            </Text>
          </Box>
        </Box>
        <Box direction='column' align='center' justify='center' animation='slideLeft'>
          <DateText color='light-3'>
            {moment().format('MMMM Do, YYYY')}
          </DateText>
          <StyledClock
            type='digital'
            precision='minutes'
            size='xlarge'
          />
        </Box>
      </Box>
    )
  }
}

export default Header
