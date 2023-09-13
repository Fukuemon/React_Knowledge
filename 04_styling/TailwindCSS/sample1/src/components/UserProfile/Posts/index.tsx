import React, { FC } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';

type PostsProps = {
  posts: {
    docId: string;
    caption: string;
    comments: {
      comment: string;
      displayName: string;
    }[];
    dateCreated: number;
    imageSrc: string;
    likes: string[];
    photoId: string;
    userId: string;
  }[];
};

const ProfilePosts: FC<PostsProps> = (props) => {
  return (
    <div className="h-16 border-t border-gray-primary mt-12 pt-4">
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        {!props.posts ? (
          <p>投稿はありません</p>
        ) : props.posts.length > 0 ? ( // 投稿がある場合は投稿を表示
          props.posts.map((content) => (
            <div key={content.docId} className="relative group">
              <img src={content.imageSrc} alt={content.caption} />
              <div className="absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full  bg-black-faded group-hover:flex">
                <p className="flex items--center text-white font-bold">
                  <AiFillHeart className="text-xl text-red-400" />
                  {content.likes.length}
                </p>
                <p className="flex items-center text-white font-bold">
                  <AiOutlineComment className="text-xl text-white" />
                  {content.comments.length}
                </p>
              </div>
            </div>
          ))
        ) : null}
      </div>

      {/* 投稿がない場合は「投稿はありません」と表示 */}
      {!props.posts ||
        (props.posts.length === 0 && (
          <p className="text-5xl text-center">~not post~</p>
        ))}
    </div>
  );
};

export default ProfilePosts;
