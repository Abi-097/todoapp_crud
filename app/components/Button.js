const CustomButton = ({ onClick, children, className }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
