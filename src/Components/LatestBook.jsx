import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const LatestBook = () => {
  const [latest, setLatest] = useState([]);
  const FetchData = async () => {
    fetch("https://bookapi.cm.hmw.lol/api/books")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          const latestData = data.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          const result = latestData.slice(0, 4);
          setLatest(result);
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
    FetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container p-8 mt-[34px] mx-auto border rounded-lg w-[1241px] h-[147px] shadow-lg bg-heroSection">
        <h1 className="text-5xl font-semibold ml-[77px] mt-[10px] items-center">
          Our <span className="text-footer">Latest</span> Collection
        </h1>
      </div>

      <div className="container mx-auto p-8 mt-[114px]">
        <div className="grid grid-cols-4 gap-[67px] ">
          {latest.map((item, index) => (
            <div key={index} className="w-[263px] h-[551px] gap-[67px] relative">
              <div className="w-[260px] h-[340px]">
                <img src={item.image_url} alt="gambar" className="w-full h-full" />
              </div>
              <div>
                <p className="text-black text-2xl font-semibold line-clamp-2 font-['Poppins']">{item.title}</p>
                <p className="text-black text-xl font-normal font-['Poppins']">{item.author.name}</p>
                <p>
                  <Rating value={item.rating} />
                </p>
              </div>
              <button className="text-button absolute bottom-0 h-[50px] border w-full rounded-lg">
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
export default LatestBook;
