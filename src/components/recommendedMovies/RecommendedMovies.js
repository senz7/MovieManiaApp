import Image from "next/image";

import { Movie } from "@/components/movie/movie";
import { Rating } from "@/components/rating/Rating";

export const RecommendedMovies = () => {
  return (
    <div className="pt-20 pl-72 pr-72 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div
          key={i}
          className="bg-slate-500 mb-10 rounded-lg p-5 flex justify-center max-w-72"
        >
          <Movie>
            <Image
              className="aspect-[2/3] overflow-hidden outline-none rounded-lg object-cover bg-slate-300"
              height="450"
              width="300"
            />
            <div className="flex justify-between">
              <h3>Movie Title {i}</h3>
              <Rating>10</Rating>
            </div>
          </Movie>
        </div>
      ))}
    </div>
  );
};
