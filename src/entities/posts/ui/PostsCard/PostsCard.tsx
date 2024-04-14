import { IPosts } from '../..';
import styles from './styles.module.css';
import { ReactNode } from 'react';

interface Props {
  item: IPosts;
  type: 'banner' | 'item';
  viewPostsSlot?: (posts: IPosts) => ReactNode;
}

const PostsCard = ({ item, type = 'item', viewPostsSlot }: Props) => {
  return (
    <li className={`${styles.card} ${type === 'banner' && styles.banner}`}>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>{item.body}</p>
      </div>

      {viewPostsSlot ? viewPostsSlot(item) : null}
    </li>
  );
};

export default PostsCard;
