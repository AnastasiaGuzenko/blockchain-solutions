import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './calc-input-block.module.css';
import TextField from '@material-ui/core/TextField';

const CalcInputBlock = () => {
  return (
    <div className={styles[`calc-input-block`]}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>BTC</Button>
        <Button>ETH</Button>
        <Button>USD</Button>
      </ButtonGroup>
      <div className={styles[`input-wrapper`]}>
        <form noValidate autoComplete="off">
          <TextField 
            className={styles[`standard-basic`]}
            id="standard-basic" 
            label="кол-во валюты" 
          />
       </form>
        <p>1 BTC = 0,006 ETH</p>
      </div>
    </div>
  )
    
};
export default CalcInputBlock;
