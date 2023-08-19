import Input from '../../../components/elements/Input';

//emailとpasswordのテキストと型を定義した配列を用意
const Userform = () => {
  const email = {
    text: 'email',
    type: 'email',
  };
  const passwoed = {
    text: 'password',
    type: 'password',
  };

  //emailとpasswordの配列を用意して、mapで回す
  const inputList = [email, passwoed];

  //inputListの中身をmapで回して、Inputコンポーネントを呼び出す
  return (
    <>
      <div>
        {inputList.map((props) => (
          <Input text={props.text} type={props.type} />
        ))}
      </div>
    </>
  );
};

export default Userform;
