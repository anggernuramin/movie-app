import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
const Home = async () => {
  // DIDALAM PROJECT NEXT JS KITA TIDAK BISA MENGGUNAKAN STATE yang dimilik oleh react , karena kita fetching data pada server side
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <main>
      <section>
        <Header
          title="Sedang Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList anime={topAnime.data} />
      </section>
    </main>
  );
};

export default Home;
