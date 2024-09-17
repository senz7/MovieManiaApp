import Image from "next/image";

import { Movie } from "@/components/movie/movie";
import { Rating } from "@/components/rating/Rating";

export const RecommendedMovies = () => {
  return (
    <div className="bg-slate-700 mt-20 pb-10">
      <h1 className="text-5xl text-slate-500 font-semibold pb-5 pt-20 pl-20">
        Recommended Movies
      </h1>
      <div className="pt-10 pl-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="bg-slate-800 mb-10 rounded-lg p-10 flex justify-center max-w-96 mt-2"
          >
            <Movie>
              <Image
                className="aspect-[2/3] overflow-hidden outline-none rounded-lg object-cover bg-slate-300"
                height="500"
                width="500"
              />
              <div className="flex justify-between">
                <h3>Movie Title {i}</h3>
                <Rating>10</Rating>
              </div>
            </Movie>
          </div>
        ))}
      </div>
    </div>
  );
};
