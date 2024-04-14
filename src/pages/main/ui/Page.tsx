import LatestPosts from './LatestPosts/LatestPosts';
import styles from './styles.module.css';

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestPosts />
    </main>
  );
};

export default MainPage;
