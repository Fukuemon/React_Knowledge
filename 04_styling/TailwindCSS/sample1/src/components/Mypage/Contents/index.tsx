import { PiNotebookBold } from 'react-icons/pi';
import { AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { BiCubeAlt } from 'react-icons/bi';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';

type MyContentsProps = {
  images: string[];
  initialState: string[];
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
type UnsplashResult = {
  urls: {
    small: string;
  };
};

const MyContents: FC<MyContentsProps> = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results },
      } = await axios.get(
        'https://api.unsplash.com/search/photos?page=1&query=office&client_id=3dmib_YkRY0lHkcggdTBkD9HScBiFHEIKcBlh0LbDO0',
      );
      const edited_result = results.map(
        (item: UnsplashResult) => item.urls.small,
      );

      console.log(results);
      setImages(edited_result);
    };
    fetchData();
  }, []);
  console.log(images);
  return (
    <div>
      {/* 軸 */}
      <hr className="border-gray-500 mt-6" />
      {/* 切り替えボタン */}
      <div className="flex justify-center gap-10">
        <button className="focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600">
          <PiNotebookBold className="inline w-5 h-5" />
          Posts
        </button>
        <button className="focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600">
          <AiFillHeart className="inline w-5 h-5" />
          Likes
        </button>
        <button className="focus:border-t border-gray-800 py-4 text-sm font-semibold flex gap-2 text-gray-400 focus:text-gray-600">
          <BiCubeAlt className="inline w-5 h-5" />
          Models
        </button>
      </div>
      {/* 投稿 */}
      <div className="grid grid-cols-3 gap-2">
        {images.map((image) => (
          <div className="relative group">
            <img src={image} alt="image" />
            <div className="absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full  bg-black-faded group-hover:flex">
              <p className="flex items--center text-white font-bold">
                <AiFillHeart className="text-xl text-red-400" />
                100
              </p>
              <p className="flex items-center text-white font-bold">
                <AiOutlineComment className="text-xl text-white" />
                100
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyContents;
