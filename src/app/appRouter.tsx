import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { MainPage } from '@/pages/main';
import { PostsPage } from '@/pages/posts';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/posts/:id', element: <PostsPage /> },
    ],
  },
]);
