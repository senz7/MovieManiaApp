import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { MainMoviesPage } from "@/pages/MainMoviesPage";

export default function Home() {
  return (
    <div>
      <Header />
      <MainMoviesPage />
      <Footer />
    </div>
  );
}
