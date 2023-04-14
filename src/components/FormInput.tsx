const FormInput = (props: any) => {
  return (
    <div>
      <input
        className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
        type=""
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FormInput;
