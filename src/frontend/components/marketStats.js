import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

const HeaderText = styled(Heading)`
  margin-top: -14px;
  font-size: 24px;
`

class MarketStats extends React.PureComponent {
  state = {}

  componentWillMount() {
    this.fetchPrice()
  }

  fetchPrice = () => {
    let that = this
    fetch('https://api.blockchain.info/stats')
      .then((resp) => {
        return resp.json()
      }).then((json) => {
        const blocksUntilHalvening = 210000 - (json.n_blocks_total % 210000)
        that.setState({
          price: json.market_price_usd,
          blocksUntilHalvening,
          halveningPercentage: (100 - ((blocksUntilHalvening / 210000) * 100)).toFixed(3),
          hashRatePhs: (json.hash_rate / 1000000).toFixed(2),
          tradeVolume: Math.floor(json.trade_volume_btc)
        })
    })
  }

  render () {
    return (
      <Box gridArea='topRight' background='light-4' animation='slideUp' pad='small'>
        <HeaderText margin="none" size='small' textAlign='center'>
          Bitcoin Stats
        </HeaderText>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>Price:</Text>
            <Text>${this.state.price}</Text>
          </Box>
        </Box>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>Trade Volume (24hr):</Text>
            <Text>{this.state.tradeVolume} BTC</Text>
          </Box>
        </Box>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>Hash Rate:</Text>
            <Text>{this.state.hashRatePhs} PH/s</Text>
          </Box>
        </Box>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>Halvening Completion:</Text>
            <Text>{this.state.halveningPercentage}%</Text>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default MarketStats
