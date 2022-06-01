import CurrencyChart from './currency-chart/currency-chart';
import CurrencyManagement from './currency-management/currency-management';
import styles from './portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={styles[`portfolio-page`]}>
      <div className={styles[`user-info`]}>
        <p className={styles[`user-name`]}>
          Гузенко Анастасия
        </p>
        <p>
          Мой счёт в USD: 35 000 000 $
        </p>
      </div>
      <div className={styles[`user-portfolio`]}>
        <div>
          <CurrencyManagement />
          <CurrencyManagement />
        </div>
        <CurrencyChart />
      </div>
    </div>
  );
}

export default Portfolio;
