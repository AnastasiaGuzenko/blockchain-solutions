import styles from './calc-input-block.module.css';
import TextField from '@material-ui/core/TextField';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { FaEthereum, FaBitcoin, FaDollarSign} from "react-icons/fa";

const CalcInputBlock = ({
  value, setValue
}) => {
  return (
    <div className={styles[`calc-input-block`]}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
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
        <form noValidate autoComplete="off">
          <TextField 
            className={styles[`standard-basic`]}
            // label="кол-во валюты" 
          />
       </form>
      </div>
    </div>
  )
};

export default CalcInputBlock;
