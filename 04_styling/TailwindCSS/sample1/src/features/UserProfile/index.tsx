import { useState } from 'react';
import Header from '../../components/layout/Navbar';
import ProfileHeader from '../../components/UserProfile/Header';
import ProfilePosts from '../../components/UserProfile/Posts';

// ユーザー情報のダミーデータ
const user = {
  username: 'test',
  avatar: '../../../public/penguin.jpeg',
  following: ['test1', 'test2'],
  followers: ['test1', 'test2'],
};

const posts = [
  {
    docId: '1',
    caption: 'test',
    comments: [
      {
        comment: 'test',
        displayName: 'test',
      },
    ],
    dateCreated: 0,
    imageSrc: '../../../public/penguin.jpeg',
    likes: ['test1', 'test2'],
    photoId: '1',
    userId: '1',
  },
];

const UserProfile = () => {
  const [isUser, setUser] = useState(true);

  return isUser ? (
    <div className="bg-gray-50 h-screen">
      <Header />
      <ProfileHeader user={user} postCount={4} />
      <ProfilePosts posts={posts} />
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
