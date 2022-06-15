import styles from './converter-page.module.css';
import CalcInputBlock from './calc-input-block/calc-input-block';
import Button from '@material-ui/core/Button';
import BarChart from './bar-chart/bar-chart';
import ExchangeRates from './exchange-rates/exchange-rates';
import { useState } from 'react';

const ConverterPage = ({
  valueFrom,
  setValueFrom,

  valueTo,
  setValueTo,

  dataValue,
}) => {
  const [ratesConvertFrom, setRatesConvertFrom] = useState();
  const [ratesConvertTo, setRatesConvertTo] = useState();

  const [inputValueFrom, setInputValueFrom] = useState('');
  const [inputValueTo, setInputValueTo] = useState('');

  return (
    <div className={styles[`converter-page`]}>
      <div className={styles.converter}>
        <div className={styles[`converter-item`]}>
          <p className={styles.p}>У меня есть</p>
          <CalcInputBlock 
            valueBtn={valueFrom}
            setValueBtn={setValueFrom}

            inputValue={inputValueFrom} 
            setInputValue={setInputValueFrom}

            setInputValueChange={setInputValueTo}

            calculatorRates={ratesConvertFrom}

          />
          <ExchangeRates 
            selectedRateValue={valueFrom}
            rateValue={valueTo}
            dataValue={dataValue}
           
            ratesNum={ratesConvertFrom}
            setRatesNum={setRatesConvertFrom}
          />
        </div>
        <Button 
          variant="contained" 
          color="primary" 
          className={styles.btn}
        >
          ⇄
        </Button>
        <div className={styles[`converter-item`]}>
          <p className={styles.p}>Хочу приобрести</p>
          <CalcInputBlock 
            valueBtn={valueTo}
            setValueBtn={setValueTo}

            inputValue={inputValueTo} 
            setInputValue={setInputValueTo}

            setInputValueChange={setInputValueFrom}

            calculatorRates={ratesConvertTo}

          />
          <ExchangeRates 
            rateValue={valueFrom}
            selectedRateValue={valueTo}
            dataValue={dataValue}
           
            ratesNum={ratesConvertTo}
            setRatesNum={setRatesConvertTo}
          />
        </div>
      </div>
      <div className={styles.diagram}>
        <p className={styles.p}>Динамика цены за последние 14 дней</p>
        <BarChart />
      </div>
    </div>
  );
}

export default ConverterPage;
