import { useEffect, useState } from "react";

const ExchangeRates = ({
  selectedRateValue,
  rateValue,
  dataValue,
}) => {
  const [rates, setRates] = useState();

  useEffect(() => {
    dataValue.map((obj) => {
      if (obj.convertFrom == selectedRateValue && obj.convertTo == rateValue) {
        setRates(obj.result)
      } else {
        return obj
      }
    })
  }, [selectedRateValue, rateValue, dataValue]);

  return (
    <div>
      <p>1 {selectedRateValue} = {rates} {rateValue}</p>
    </div>
  )
}

export default ExchangeRates;
