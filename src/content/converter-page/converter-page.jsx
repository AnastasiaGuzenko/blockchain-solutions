import styles from './converter-page.module.css';
import CalcInputBlock from './calc-input-block/calc-input-block';
import Button from '@material-ui/core/Button';
import BarChart from './bar-chart/bar-chart';
import ExchangeRates from './exchange-rates/exchange-rates';

const ConverterPage = ({
  valueFrom,
  setValueFrom,
  valueTo,
  setValueTo,
  dataValue,
}) => {
  return (
    <div className={styles[`converter-page`]}>
      <div className={styles.converter}>
        <div className={styles[`converter-item`]}>
          <p className={styles.p}>У меня есть</p>
          <CalcInputBlock 
            value={valueFrom}
            setValue={setValueFrom}
          />
          <ExchangeRates 
            selectedRateValue={valueFrom}
            rateValue={valueTo}
            dataValue={dataValue}
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
            value={valueTo}
            setValue={setValueTo}
          />
          <ExchangeRates 
            rateValue={valueFrom}
            selectedRateValue={valueTo}
            dataValue={dataValue}
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
