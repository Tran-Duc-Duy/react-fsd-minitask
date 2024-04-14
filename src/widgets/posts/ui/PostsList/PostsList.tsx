import { IPosts } from '@/entities/posts';
import withSkeleton from '@/shared/hocs/withSkeleton';
import styles from './styles.module.css';
import PostsCard from '@/entities/posts/ui/PostsCard/PostsCard';
import { ReactNode } from 'react';

interface Props {
  posts?: IPosts[];
  type?: 'banner' | 'item';
  direction?: 'row' | 'column';
  viewPostsSlot?: (posts: IPosts) => ReactNode;
}

const PostsList = ({ posts, type = 'item', viewPostsSlot }: Props) => {
  return (
    <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
      {posts?.map((item) => {
        return (
          <PostsCard
            key={item.id}
            viewPostsSlot={viewPostsSlot}
            item={item}
            type={type}
          />
        );
      })}
    </ul>
  );
};

const PostsListWithSkeleton = withSkeleton<Props>(PostsList, 10);

export default PostsListWithSkeleton;
