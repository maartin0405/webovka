import Input from "./input";
import PasswordInput from "./passwordinput";
import Buttons from "./buttons";
import Checkbox from "./checkbox";

const Card = () => {
  return (
    <>
      <h1>Take your business to a new level.</h1>
      <p>create a new account</p>
      <Input />
      <PasswordInput />
      <Buttons />
      <Checkbox />
    </>
  );
};

export default Card;
