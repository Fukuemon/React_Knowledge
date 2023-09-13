import { AiFillSetting } from 'react-icons/ai';

const MyPageHeader = () => {
  return (
    <div className="max-w-6xl mx-5 p-10 xl:mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {/*avatar写真 */}
        <div className="col-span-1">
          <div className="flex justify-center items-center">
            <img
              src="https://source.unsplash.com/random"
              className="rounded-full w-36 h-36"
            />
          </div>
        </div>

        {/* ユーザー名と設定ボタン */}
        <div className="col-span-2">
          <span className="text-2xl font-bold mr-4">Fukuemon</span>
          <div className="cursor-pointer inline text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 rounded mr-4">
            Edit Profile
          </div>
          <AiFillSetting className="inline w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default MyPageHeader;
