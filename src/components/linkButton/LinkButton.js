import Link from "next/link";

export const LinkButton = (props) => {
  const { children, className, onClick, href } = props;
  return (
    <Link className={className} onClick={onClick} href={href}>
      {children}
    </Link>
  );
};
