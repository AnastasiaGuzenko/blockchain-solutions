import { useEffect, useState } from "react";

const ExchangeRates = ({
  selectedRateValue,
  rateValue,
  dataValue,
  ratesNum,
  setRatesNum
}) => {
  
  useEffect(() => {
    dataValue.map((obj) => {
      if (obj.convertFrom == selectedRateValue && obj.convertTo == rateValue) {
        setRatesNum(obj.result)
      } else {
        return obj
      }
    })
  }, [selectedRateValue, rateValue, dataValue]);

  return (
    <div>
      <p>1 {selectedRateValue} = {ratesNum} {rateValue}</p>
    </div>
  )
}

export default ExchangeRates;
