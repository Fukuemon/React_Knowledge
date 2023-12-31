import React from 'react';
import UserProfile from './features/UserProfile';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MyPage from './features/Mypage';

// ページのルートを作成
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<UserProfile />} />
      <Route path="/mypage" element={<MyPage />} />
    </>,
  ),
);

// ルートコンポーネントを作成
export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
