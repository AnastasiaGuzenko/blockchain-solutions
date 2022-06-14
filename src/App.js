import ConverterPage from './content/converter-page/converter-page';
import Portfolio from './content/portfolio/portfolio';
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom';
import Header from './content/header/header';
import Footer from './footer/footer';
import { useCallback, useEffect, useState } from 'react';
import {
  API_CONVERT_CURRENCY,
} from '../src/content/converter-page/constants';
import {
  getConvertURL,
} from './utils';

import { DATA_COMPLIANCE } from './constants';

const App = () => {
  const [dataValue, setDataValue] = useState(DATA_COMPLIANCE);
  const [valueFrom, setValueFrom] = useState('BTC');
  const [valueTo, setValueTo] = useState('BTC');

  useEffect(() => {
    getConvertURL(API_CONVERT_CURRENCY, dataValue, setDataValue);
  }, [])

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
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
