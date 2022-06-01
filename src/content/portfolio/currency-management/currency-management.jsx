import styles from './currency-management.module.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const CurrencyManagement = () => {
  return (
    <div className={styles[`currency-management`]}>
      <p className={styles.title}>My BTC: 1771</p>
      <div className={styles.input}>
        <form noValidate autoComplete="off">
            <TextField 
              className={styles[`standard-basic`]}
              id="standard-basic" 
              label="кол-во валюты" 
            />
        </form>
        <Button   
          variant="contained" 
          color="primary"
          className={styles[`input-item`]}
        >
          +
        </Button>
        <Button
          variant="contained" 
          color="primary"
          className={styles[`input-item`]}
        > 
          -
        </Button>
      </div>
    </div>
  )
};

export default CurrencyManagement;