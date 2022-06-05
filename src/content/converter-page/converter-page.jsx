import styles from './converter-page.module.css';
import CalcInputBlock from './calc-input-block/calc-input-block';
import Button from '@material-ui/core/Button';
import BarChart from './bar-chart/bar-chart';

const ConverterPage = () => {
  return (
    <div className={styles[`converter-page`]}>
      <div className={styles.converter}>
        <div className={styles[`converter-item`]}>
          
          <p>У меня есть</p>
          
          <CalcInputBlock />
        </div>
        <Button 
          variant="contained" 
          color="primary" 
          className={styles.btn}
        >
          ⇄
        </Button>
        <div className={styles[`converter-item`]}>
          <p>Хочу приобрести</p>
          <CalcInputBlock />
        </div>
      </div>
      <div className={styles.diagram}>
        < BarChart/>
      </div>
    </div>
  );
}

export default ConverterPage;
