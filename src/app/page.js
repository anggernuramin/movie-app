import AnimeList from "@/components/AnimeList";
import Link from "next/link";
const Home = async () => {

  // DIDALAM PROJECT NEXT JS KITA TIDAK BISA MENGGUNAKAN STATE yang dimilik oleh react , karena kita fetching data pada server side
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()

  return (
    <main>
      <div className="flex justify-between items-center mt-5">
        <h2 className="text-3xl mb-2 font-medium">Sedang Populer</h2>
        <Link href={"/populer"} className="text-red-600">Lihat Semua</Link>
      </div>
      <AnimeList anime={anime.data}/>
    </main>
  );
};

export default Home;
