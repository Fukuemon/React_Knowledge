import { useState } from 'react';
import Header from '../../components/layout/Navbar';
import ProfileHeader from '../../components/UserProfile/Header';

const UserProfile = () => {
  const [isUser, setUser] = useState(true);
  const user = {
    username: 'test',
    avatar: '../../../public/penguin.jpeg',
  };
  return isUser ? (
    <div className="bg-gray-50 h-screen">
      <Header />
      <ProfileHeader user={user} />
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
