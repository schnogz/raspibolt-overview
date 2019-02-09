import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

const HeaderText = styled(Heading)`
  margin-top: -14px;
  font-size: 24px;
`
const PriceText =  styled(Text)`
  color: ${props => (props.oldP > props.newP ? 'red' : 'green')};
`

class MarketStats extends React.PureComponent {
  state = { }

  componentWillMount() {
    this.fetchStats()
    this.fetchPrices()
    // 1 minute
    setInterval(() => {
      this.fetchStats()
    }, 60000)
    // 15 seconds
    setInterval(() => {
      this.fetchPrices()
    }, 15000)
  }

  fetchPrices = () => {
    console.log('fetching prices')
    let that = this
    // current price
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((resp) => {
        return resp.json()
      }).then((json) => {
        that.setState({ priceCurrent: (json.bpi.USD.rate_float).toFixed(2) })
      })
    // price 24 hours ago
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday')
      .then((resp) => {
        return resp.json()
      }).then((json) => {
        that.setState({ priceYesterday: json.bpi[Object.keys(json.bpi)[0]].toFixed(2) })
    })
  }

  fetchStats = () => {
    console.log('fetching bitcoin stats')
    let that = this
    fetch('https://api.blockchain.info/stats')
      .then((resp) => {
        return resp.json()
      }).then((json) => {
        const blocksUntilHalvening = 210000 - (json.n_blocks_total % 210000)
        that.setState({
          blocksUntilHalvening,
          halveningPercentage: (100 - ((blocksUntilHalvening / 210000) * 100)).toFixed(2),
          hashRatePhs: (json.hash_rate / 1000000).toFixed(2),
          tradeVolume: Math.floor(json.trade_volume_btc)
        })
    })
  }

  render () {
    const { priceCurrent, priceYesterday } = this.state
    return (
      <Box gridArea='topRight' background='light-4' animation='slideUp' pad='small'>
        <HeaderText margin="none" size='small' textAlign='center'>
          Bitcoin Stats
        </HeaderText>
        <Box direction='row'>
          <Box flex={{grow: "2"}} direction='row' justify='between'>
            <Text>Price:</Text>
            <PriceText newP={priceCurrent} oldP={priceYesterday}>
              ${priceCurrent}
            </PriceText>
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
