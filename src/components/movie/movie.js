export const Movie = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};
