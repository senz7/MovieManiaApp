import { Logo } from "../logo/Logo";
import { Input } from "../input/Input";
import { LinkButton } from "../linkButton/LinkButton";

export const Header = () => {
  return (
    <header className="pl-20 pr-20 pt-2 pb-2 bg-slate-700 flex flex-row items-center justify-between">
      <div>
        <Logo className="text-4xl ">
          <LinkButton
            href=""
            className="mr-5 text-slate-300 font-semibold hover:text-slate-200"
          >
            Movies App
          </LinkButton>
        </Logo>
      </div>

      <div>
        <LinkButton
          href=""
          className="mr-5 text-slate-300 font-medium hover:text-slate-200 text-lg hover:underline underline-offset-4"
        >
          Home
        </LinkButton>
        <LinkButton
          href=""
          className="mr-5 text-slate-300 font-medium hover:text-slate-200 text-lg hover:underline underline-offset-4"
        >
          Movies
        </LinkButton>
        <LinkButton
          href=""
          className="mr-5 text-slate-300 font-medium hover:text-slate-200 text-lg hover:underline underline-offset-4"
        >
          My list
        </LinkButton>
      </div>
    </header>
  );
};
