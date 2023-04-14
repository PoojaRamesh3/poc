const Link = (props: any) => {
  return (
    <>
      <a href="#" className="text-sm text-purple-700 hover:text-purple-700">
        {props.text}
      </a>
    </>
  );
};

export default Link;
