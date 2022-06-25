import { nowDate } from './utils/date'

export const API_CONVERT_CURRENCY = 'https://api.coingecko.com/api/v3/simple/price?ids=usd%2Cbitcoin%2Cethereum&vs_currencies=usd%2Cbtc%2Ceth';
export const API_EXCHANGE_RATE_HISTORY_BITCOIN = `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${nowDate}`;

export const EXCHANGE_RATE_HISTORY_BITCOIN = [
  {
    id: 'USD',
    data: '17-06-2022',
    rate: 1,
  },
  {
    id: 'USD',
    data: '15-06-2022',
    rate: 1,
  },
]

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

