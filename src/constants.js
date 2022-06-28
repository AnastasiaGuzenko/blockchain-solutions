export const API_CONVERT_CURRENCY = 'https://api.coingecko.com/api/v3/simple/price?ids=usd%2Cbitcoin%2Cethereum&vs_currencies=usd%2Cbtc%2Ceth';

export const DATA_COMPLIANCE = [
  {
    convertFrom: 'USD',
    convertTo: 'USD',
    result: 1,
  },
  {
    convertFrom: 'USD',
    convertTo: 'BTC',
    result: 1,
  },
  {
    convertFrom: 'USD',
    convertTo: 'ETH',
    result: 1,
  },
  {
    convertFrom: 'BTC',
    convertTo: 'BTC',
    result: 1,
  },
  {
    convertFrom: 'BTC',
    convertTo: 'USD',
    result: 1,
  },
  {
    convertFrom: 'BTC',
    convertTo: 'ETH',
    result: 1,
  },
  {
    convertFrom: 'ETH',
    convertTo: 'ETH',
    result: 1,
  },
  {
    convertFrom: 'ETH',
    convertTo: 'USD',
    result: 1,
  },
  {
    convertFrom: 'ETH',
    convertTo: 'BTC',
    result: 1,
  },
]

