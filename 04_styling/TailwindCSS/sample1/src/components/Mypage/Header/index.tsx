import { AiFillSetting } from 'react-icons/ai';

const MyPageHeader = () => {
  return (
    <div className="max-w-6xl p-4 md:mx-5 md:p-10 xl:mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {/*avatar写真 */}
        <div className="col-span-1">
          <div className="flex justify-center items-center mt-4">
            <img
              src="https://source.unsplash.com/random"
              className="rounded-full w-20 h-20  md:w-36 md:h-36 "
            />
          </div>
        </div>

        {/* ユーザー名と設定ボタン・フォローフォロワー */}
        <div className="col-span-2">
          <span className="text-xl md:text-2xl font-bold mr-4">Fukuemon</span>

          {/* エディットボタン */}
          <div className="cursor-pointer block text-sm text-gray-700 font-semibold mt-2">
            <div className=" inline border border-gray-200 rounded mr-4 p-1 px-2">
              Edit Profile
            </div>
            <AiFillSetting className="inline w-5 h-5" />
          </div>

          {/* 投稿・フォローフォロワー */}
          <div className="mt-2 flex">
            <div>
              <span className="font-semibold">200</span> posts
            </div>
            <div className="ml-4">
              <span className="font-semibold">200</span> followers
            </div>
            <div className="ml-4">
              <span className="font-semibold">200</span> following
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageHeader;
