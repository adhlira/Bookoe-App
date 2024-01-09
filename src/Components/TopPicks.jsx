import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const TopPicks = () => {
  const [topPicks, setTopPicks] = useState([]);

  const TopPicks = async () => {
    fetch("https://bookapi.cm.hmw.lol/api/books")
      .then((response) => response.json())
      .then((data) => {
        // Memastikan bahwa 'books' ada dalam objek data sebelum menggunakan filter
        if (data && data.data) {
          const topPicks = data.data.filter((book) => book.is_top_pick === true);
          const result = topPicks.slice(0, 4);
          setTopPicks(result);
          console.log(result);
        } else {
          console.error("Data or books property not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    TopPicks();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container p-8 mt-[44px] w-[1241px] h-[147px] mx-auto border rounded-lg shadow-lg object-cover bg-heroSection">
        <h1 className="text-5xl font-semibold ml-[71px] mt-[5px]">
          <span className="text-footer">Top</span> Picks Collection
        </h1>
      </div>

      <div className="container mx-auto p-8 mt-[77px]">
        <div className="grid grid-cols-4 gap-[67px]">
          {topPicks.map((item, index) => (
            <div key={index} className="relative w-[261px] h-[551px]">
              <div className="w-[260px] h-[340px]">
                <img src={item.image_url} alt="gambar" className="w-full h-full" />
              </div>
              <div>
                <p className="text-black text-2xl font-semibold line-clamp-2">{item.title}</p>
                <p className="text-xl font-normal">{item.author.name}</p>
                <p>
                  <Rating value={item.rating} />
                </p>
              </div>
              <button className="absolute border rounded-lg h-[50px] bottom-0 w-full text-button">
                <Link to={`/detail/${item.id}`}>Read Book</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TopPicks;
