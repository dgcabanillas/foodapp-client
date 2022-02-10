import Header from "src/components/Header";
import MainSection from "./sections/MainSection";
import styles from './style.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <Header />
        <MainSection />
      </div>
    </div>
  )
}

export default Home;