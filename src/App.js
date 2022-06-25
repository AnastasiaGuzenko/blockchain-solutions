import ConverterPage from './content/converter-page/converter-page';
import Portfolio from './content/portfolio/portfolio';
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom';
import Header from './content/header/header';
import Footer from './footer/footer';
import { useEffect, useState } from 'react';
import {
  API_CONVERT_CURRENCY,
  API_EXCHANGE_RATE_HISTORY_BITCOIN,
} from  './constants';
import {
  getConvertURL,
  getExchangeRateHistoryURL,
} from './utils/get-URL';

import { DATA_COMPLIANCE } from './constants';
import { EXCHANGE_RATE_HISTORY_BITCOIN} from './constants';


const App = () => {
  const [historyBTC, setHistoryBTC] = useState(EXCHANGE_RATE_HISTORY_BITCOIN);

  const [dataValue, setDataValue] = useState(DATA_COMPLIANCE);
  const [valueFrom, setValueFrom] = useState('BTC');
  const [valueTo, setValueTo] = useState('BTC');

  useEffect(() => {
    getConvertURL(API_CONVERT_CURRENCY, dataValue, setDataValue);
    getExchangeRateHistoryURL(API_EXCHANGE_RATE_HISTORY_BITCOIN, setHistoryBTC, historyBTC)
    getExchangeRateHistoryURL(API_EXCHANGE_RATE_HISTORY_BITCOIN, setHistoryBTC, historyBTC)
  }, [])

  console.log(historyBTC)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
       <Header />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path='/' element={
            <ConverterPage 
              valueFrom={valueFrom}
              setValueFrom={setValueFrom}
              valueTo={valueTo}
              setValueTo={setValueTo}
              dataValue={dataValue}
            />
          }/>
          <Route path='/portfolio' element={<Portfolio />}/>
        </Routes>
      </div>
      {/* <div className={styles.footer}>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
