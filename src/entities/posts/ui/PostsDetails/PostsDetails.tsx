import { IPosts } from '../..';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

interface Props {
  item: IPosts;
}

const PostsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <p className={styles.body}>{item.body}</p>
      <Link to="/" className={styles.links}>
        Back to Post List
      </Link>
    </div>
  );
};

export default PostsDetails;
