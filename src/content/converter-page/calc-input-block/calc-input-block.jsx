import styles from './calc-input-block.module.css';
import { BottomNavigation, BottomNavigationAction, TextField } from '@material-ui/core';
import { FaEthereum, FaBitcoin, FaDollarSign} from "react-icons/fa";
import { useEffect } from 'react';

const CalcInputBlock = ({
  valueBtn, 
  setValueBtn,
  inputValue,
  setInputValue,
  setInputValueChange,
  calculatorRates,
  activePart,
  setActivePart,
  activeName,

}) => {

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setInputValueChange(Number(event.target.value) * calculatorRates)
  }

  useEffect(() => {
    if (activeName === activePart) {
      setInputValueChange(Number(inputValue || 0) * (calculatorRates || 0))
    }
  }, [calculatorRates])

  return (
    <div className={styles[`calc-input-block`]}>
      <BottomNavigation
        value={valueBtn}
        onChange={(event, newValue) => {
          setValueBtn(newValue);
          setActivePart(activeName);
        }}
        className={styles[`btn-nav`]}
      >
        <BottomNavigationAction 
          label="BTC" 
          icon={<FaBitcoin />} 
          className={styles.btn}
          value={'BTC'}
        />
        <BottomNavigationAction 
          label="ETH" 
          icon={<FaEthereum />} 
          className={styles.btn}
          value={'ETH'}
        />
        <BottomNavigationAction 
          label="USD" 
          icon={<FaDollarSign />} 
          className={styles.btn}
          value={'USD'}
        />
      </BottomNavigation>
      <div className={styles[`input-wrapper`]}>
        <TextField 
          className={styles.input}
          type="number"
          onChange={handleChange}
          value={inputValue}
        />
      </div>
    </div>
  )
};

export default CalcInputBlock;
