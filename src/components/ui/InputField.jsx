
const InputField = ({className="", type="text", placeholder=""}) => {
  return (
    <input type={type} placeholder={placeholder} className={`${className} w-full px-2 py-1`}/>
  );
};

export default InputField;