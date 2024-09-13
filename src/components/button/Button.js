export const Button = (props) => {
  const { children, className, onClick, type } = props;
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
