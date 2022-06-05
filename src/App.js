import ConverterPage from './content/converter-page/converter-page';
import Portfolio from './content/portfolio/portfolio';
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom';
import Header from './content/header/header';
import Footer from './footer/footer';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
       <Header />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path='/' element={<ConverterPage />}/>
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
