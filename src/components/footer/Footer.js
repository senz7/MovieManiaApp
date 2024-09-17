import { LinkButton } from "../linkButton/LinkButton";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-slate-800 bg-slate-800 mt-5 mb-5 ">
      <div className="flex justify-between">
        <div className="ml-20 text-slate-300 font-medium">
          <h2>© 2024 MovieMania. All rights reserved.</h2>
        </div>
        <div className="mr-20">
          <LinkButton
            className="mr-5 text-slate-300 font-medium hover:text-slate-200 text-base hover:underline underline-offset-4"
            href=""
          >
            Terms of Service
          </LinkButton>
          <LinkButton
            className="text-slate-300 font-medium hover:text-slate-200 text-base hover:underline underline-offset-4"
            href=""
          >
            Privacy
          </LinkButton>
        </div>
      </div>
    </footer>
  );
};
