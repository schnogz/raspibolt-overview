import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { Box, Clock, Heading, Text } from 'grommet'

import logo from 'assets/logo.png'
const DateText = styled(Text)`
  font-style: italic;
`
const StyledClock = styled(Clock)`
  font-weight: 400;
  & > div {
    font-size: 50px;
    width: 0.65em;
  }
`
class Header extends React.PureComponent {
  render () {
    return (
      <Box direction='row' background='brand' justify='between' height='120px'>
        <Box direction='row' align='start' flex={{grow: "2"}} animation='slideRight'>
          <img src={logo} alt='Logo' height='120px' width='120px'/>
          <Box flex={{grow: "2"}} direction='column' justify='evenly' align='center' height='100%'>
            <Heading margin="none" size='small'>
              RaspiBolt Stats
            </Heading>
            <Text>
              up: 11:44, 2 users, load average: 0.22, 0.30, 0.33
            </Text>
          </Box>
        </Box>
        <Box direction='column' align='center' justify='center' pad='small' gap='small' animation='slideLeft'>
          <DateText size='large'>
            {moment().format('MMMM Do, YYYY')}
          </DateText>
          <StyledClock
            type='digital'
            precision='minutes'
            size='xlarge'
            hourLimit='12'
          />
        </Box>
      </Box>
    )
  }
}

export default Header
