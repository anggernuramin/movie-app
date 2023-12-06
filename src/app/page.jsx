import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import HeroImage from "@/components/Utilities/HeroImage";
import { getAnimeResponse } from "./services/api-services";
const Home = async () => {
  // DIDALAM PROJECT NEXT JS KITA TIDAK BISA MENGGUNAKAN STATE yang dimilik oleh react , karena kita fetching data pada server side
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      <HeroImage />
      <main className=" bg-color-secondary text-color-third">
        <div className="container mx-auto">
          <section className="pt-10">
            <Header
              title="Sedang Populer"
              linkHref="/populer"
              linkTitle="Lihat Semua"
            />
            <AnimeList anime={topAnime.data} />
          </section>

          <section className="pt-10">
            <Header
              title="Rekomendasi"
              linkHref="/populer"
              linkTitle="Lihat Semua"
            />
            <AnimeList anime={topAnime.data} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
