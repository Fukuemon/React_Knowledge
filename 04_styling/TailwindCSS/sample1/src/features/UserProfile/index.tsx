import { useState } from 'react';
import Header from '../../components/layout/Navbar';
import ProfileHeader from '../../components/UserProfile/Header';

// ユーザー情報のダミーデータ
const user = {
  username: 'test',
  avatar: '../../../public/penguin.jpeg',
  following: ['test1', 'test2'],
  followers: ['test1', 'test2'],
};

const UserProfile = () => {
  const [isUser, setUser] = useState(true);

  return isUser ? (
    <div className="bg-gray-50 h-screen">
      <Header />
      <ProfileHeader user={user} postCount={4} />
    </div>
  ) : (
    <div>
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p>ログインしてください</p>
      </div>
    </div>
  );
};

export default UserProfile;
