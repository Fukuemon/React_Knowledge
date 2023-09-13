import React from 'react';
import Header from '../../components/layout/Navbar';
import ProfileHeader from '../../components/UserProfile/Header';
import MyPageHeader from '../../components/Mypage/Header';

const MyPage = () => {
  return (
    <>
      <Header />
      <MyPageHeader />
    </>
  ); // <Header />を返す
};

export default MyPage;
