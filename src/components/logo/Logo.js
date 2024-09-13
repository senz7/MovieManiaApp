export const Logo = (props) => {
  const { children, className } = props;
  return <h1 className={className}>{children}</h1>;
};
