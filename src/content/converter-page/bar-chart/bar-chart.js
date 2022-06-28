import styles from './bar-chart.module.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { InputOutlined } from '@material-ui/icons';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const EXCHANGE_RATE_HISTORY_BITCOIN = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date={date23-06-2022}';

const BarChart = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  // const labels = ['2.06','3.06','4.06','5.06','6.06','7.06','8.06','9.06', '10.06', '11.06', '12.06', '13.06', '14.06', '15.06'];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'BTC to USD',
  //       data: [0, 5, 2, 20, 30, 55, 45, 45],
  //       borderColor: '#3F51B5',
  //       backgroundColor: 'white',
  //     },
  //   ],
  // };

  // function date(e) {
  //   var n = new Date;
  //   n.setDate(n.getDate() + e);
  //   return n.toLocaleDateString();
  // }

  // const [arrDate, setArrDate] = useState([])
  
  // const showHistoryDate = () => {
  //   for (let i = 1; i <= 14; i++) {
  //     const dateStr = date(-i);
  //     setArrDate(arrDate.push(dateStr.replace(/[\.\/]/g,'-')))
  //   }
  // }
  // console.log(showHistoryDate())
  // console.log(arrDate)
  

 
  return (
    <div className={styles[`bar-chart`]}>
      {/* <Line options={options} data={data} /> */}
    </div>
  )
}

export default BarChart;
