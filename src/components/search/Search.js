import { Input } from "../input/Input";

export const Search = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-60 pb-60 bg-slate-700 w-full h-full">
      <div className="">
        <h1 className="text-6xl font-semibold text-slate-300">
          Welcome to Movie Mania
        </h1>
      </div>
      <div className="mt-2 text-lg font-medium text-slate-300">
        <h3>Discover the latest movies. Start streaming today.</h3>
      </div>
      <div className="mt-5">
        <Input
          size="40"
          className="outline-none bg-slate-300 rounded-md px-2 py-2"
        />
      </div>
    </div>
  );
};
