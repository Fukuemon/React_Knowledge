import React from 'react';

// Inputコンポーネントのpropsの型を定義
interface InputProps {
  text: string;
  type: string;
}

// Inputコンポーネント
// propsとしてtextとtypeを受け取る
const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      <label
        htmlFor={props.type}
        className="relative block m-4 rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type={props.type}
          id={props.text}
          placeholder={props.text}
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        />
        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {props.text}
        </span>
      </label>
    </div>
  );
};

export default Input;
