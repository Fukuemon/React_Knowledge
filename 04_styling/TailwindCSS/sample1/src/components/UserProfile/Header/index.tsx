import React, { FC } from 'react';

type ProfileHeaderProps = {
  postCount?: number; // 投稿数
  followerCount: number; // フォロワー数
  setFollowerCount: (followerCount: { followerCount: number }) => void; // フォロワー数を更新する関数
  user: {
    userId: string; // ユーザーID
    username: string; // ユーザー名
    avatar: string; // アバター画像
    following: string[]; // フォローしている人
    followers: string[]; // フォロワー
  };
};

const ProfileHeader: FC<ProfileHeaderProps> = (props) => {
  const [isFollowingProfile, setIsFollowingProfile] = React.useState(false); // [false, function

  // フォローしているかどうかを判定
  const activebtnFollow =
    props.user.username && props.user.username !== 'undefined';

  // ユーザー名が存在し、undefinedではない場合はtrueを返す
  const handleToggleFollow = () => {
    // フォロー/アンフォローの切り替えを行う関数
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile); // フォローしているかどうかを反転
    props.setFollowerCount({
      // フォロワー数を更新
      followerCount: isFollowingProfile // 既にフォローしている場合は-1、フォローしていない場合は+1
        ? props.followerCount - 1
        : props.followerCount + 1,
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4 justify-betweenmx-auto max-w-screen-lg">
      {/*avatar写真 */}
      <div className="container flex justify-center">
        <img
          className="rounded-full h-40 w-40 flex"
          alt={`${props.user.username} profile picture`}
          src={props.user.avatar}
        />
      </div>

      {/* ユーザー名とフォローボタン */}
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4">{props.user.username}</p>
          {activebtnFollow && (
            <button
              className="bg-blue-500 font-bold text-sm rounded text-white w-20 h-8"
              type="button"
              onClick={handleToggleFollow}
            >
              {isFollowingProfile ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>

        {/*  投稿数、フォロワー数、フォロー数 */}
        <div className="container flex mt-4">
          {props.user.followers === undefined || // フォロー数、フォロワー数、投稿数が未定義の場合は0を表示
          props.user.following === undefined ? (
            <p className="mr-10">
              <span className="font-bold">
                <Skelten count={1} width={677} height={24} />
              </span>
            </p>
          ) : (
            <>
              <p className="mr-10">
                <span className="font-bold">{props.postCount}</span> posts
              </p>
              <p className="mr-10">
                <span className="font-bold">{props.user.followers.length}</span>{' '}
                followers
              </p>
              <p className="mr-10">
                <span className="font-bold">{props.user.following.length}</span>{' '}
                following
              </p>
            </>
          )}
        </div>
        {/* username */}
      </div>
    </div>
  );
};

// ローディング時に表示するコンポーネント
type SkeltenProps = {
  count: number;
  width: number;
  height: number;
};
const Skelten: FC<SkeltenProps> = ({ count, width, height }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="animate-pulse">
            <div
              className="bg-gray-300 rounded w-full"
              style={{ width, height }}
            />
          </div>
        ))}
    </>
  );
};

export default ProfileHeader;
