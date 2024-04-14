import { useAppSelector } from '@/app/appStore';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { PostsDetails } from '@/entities/posts';

const PostsPage = () => {
  const currentPosts = useAppSelector((state) => state.posts.currentPosts);

  if (!currentPosts) {
    return (
      <div>
        <h1>Cannot find posts</h1>
        <Link to={'/'}>
          <h3>Go to main page</h3>
        </Link>
      </div>
    );
  }
  return (
    <main className={styles.posts}>
      <h1 className={styles.title}> {currentPosts.title}</h1>

      <PostsDetails item={currentPosts} />
    </main>
  );
};

export default PostsPage;
