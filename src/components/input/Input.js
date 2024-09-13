export const Input = (props) => {
  const { className, disabled, type, size } = props;
  return (
    <input className={className} disabled={disabled} type={type} size={size} />
  );
};
