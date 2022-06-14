import styles from './currency-management.module.css'
import Button from '@material-ui/core/Button';

const CurrencyManagement = () => {
  return (
    <div className={styles[`currency-management`]}>
      <p className={styles.p}>My BTC: 1771</p>
      <input 
        placeholder='кол-во валюты'
        className={styles.input}
      >
      </input>
      <Button   
        variant="contained" 
        color="primary"
        className={styles.btn}
      >
        +
      </Button>
      <Button
        variant="contained" 
        color="primary"
        className={styles.btn}
      > 
        -
      </Button>
    </div>
  )
};

export default CurrencyManagement;
