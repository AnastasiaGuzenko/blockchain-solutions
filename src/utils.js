export function getConvertURL(API, dataValue, setDataValue) {
  fetch(API)
    .then(response => response.json())
    .then(jsonResponse => {
      setDataValue(
        dataValue.map((obj) => {
          if (obj.convertFrom == 'BTC' && obj.convertTo == 'USD') {
            return {
              ...obj,
              result: jsonResponse.bitcoin.usd
            }
          } else if (obj.convertFrom == 'BTC' && obj.convertTo == 'ETH') {
            return {
              ...obj,
              result: jsonResponse.bitcoin.eth
            }
          } else if (obj.convertFrom == 'ETH' && obj.convertTo == 'USD') {
            return {
              ...obj,
              result: jsonResponse.ethereum.usd
            }
          } else if (obj.convertFrom == 'ETH' && obj.convertTo == 'BTC') {
            return {
              ...obj,
              result: jsonResponse.ethereum.btc
            }
          } else if (obj.convertFrom == 'USD' && obj.convertTo == 'BTC') {
            return {
              ...obj,
              result: jsonResponse.usd.btc
            }
          } else if (obj.convertFrom == 'USD' && obj.convertTo == 'ETH') {
            return {
              ...obj,
              result: jsonResponse.usd.eth
            }
          } else {
            return obj;
          }
        })
      );
    });
};