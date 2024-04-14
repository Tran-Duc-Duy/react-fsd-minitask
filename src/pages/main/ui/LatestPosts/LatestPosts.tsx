import { useGetPostsQuery } from '@/entities/posts/api/postsApi';
import styles from './styles.module.css';
import { PostsList } from '@/widgets/posts';
import { IPosts } from '@/entities/posts';
import { useAppDispatch } from '@/app/appStore';
import { setCurrentPosts } from '@/entities/posts/model/postsSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LatestPosts = () => {
  const [pageSize, setPageSize] = useState(20);
  const [showOntop, setShowOntop] = useState(false);
  const { data, isLoading } = useGetPostsQuery({ _page: 1, _limit: pageSize });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (posts: IPosts) => {
    dispatch(setCurrentPosts(posts));
    navigate(`/posts/${posts.id}`);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang với hiệu ứng mượt mà
  };
  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setShowOntop(isScrolled);
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPageSize(pageSize + 10);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div className={styles.list}>
      <PostsList
        type="banner"
        direction="row"
        posts={data && data}
        isLoading={isLoading}
        viewPostsSlot={(posts: IPosts) => (
          <p className={styles.button} onClick={() => navigateTo(posts)}>
            view more
          </p>
        )}
      />

      <button
        className={`${styles.ontop} ${showOntop ? '' : styles.hidden}`}
        onClick={scrollToTop}>
        <span>&uarr;</span>
      </button>
    </div>
  );
};

export default LatestPosts;
