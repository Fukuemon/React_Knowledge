import React from 'react';
import Header from '../../components/layout/Navbar';
import ProfileHeader from '../../components/UserProfile/Header';
import MyPageHeader from '../../components/Mypage/Header';
import MyContents from '../../components/Mypage/Contents';

const MyPage = () => {
  return (
    <>
      <Header />
      <MyPageHeader />
      <MyContents />
    </>
  ); // <Header />を返す
};

export default MyPage;
