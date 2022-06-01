import styles from'./App.module.css';
import { AppBar, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Content from './content/content';

const App = () => {
  return (
    <div className="App">
      <AppBar className={styles.app}>
        <Container 
          fixed
          className={styles[`btn-wrapper`]}
        >
          <Button 
            variant="contained"  href="#contained-buttons"
            className={styles.btn}
          >
            Конвертер
          </Button>
          <Button 
            variant="contained"  href="#contained-buttons"
            className={styles.btn}
          >
            Мой портфель
          </Button>
        </Container>
      </AppBar>
      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
}

export default App;
