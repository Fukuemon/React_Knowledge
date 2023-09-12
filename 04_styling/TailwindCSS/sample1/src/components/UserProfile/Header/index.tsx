import React, { FC } from 'react';

type ProfileHeaderProps = {
  user: {
    username: string;
    avatar: string;
  };
};

const ProfileHeader: FC<ProfileHeaderProps> = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-betweenmx-auto max-w-screen-lg">
      <div className="container flex justify-center">
        <img
          className="rounded-full h-40 w-40 flex"
          alt={`${props.user.username} profile picture`}
          src={props.user.avatar}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
