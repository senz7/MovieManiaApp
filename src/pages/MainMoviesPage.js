import { PreviewMovie } from "@/components/previewMovie/PreviewMovie";
import { RecommendedMovies } from "@/components/recommendedMovies/RecommendedMovies";
import { Search } from "@/components/search/Search";

export const MainMoviesPage = () => {
  return (
    <div>
      <Search />
      <PreviewMovie />
      <RecommendedMovies />
    </div>
  );
};
