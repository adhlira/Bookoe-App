/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const HeroSection = () => {
  const [books, setBook] = useState([]);
  const [smallBook, setSmallBook] = useState([]);
  const [bigBook, setBigBook] = useState([]);

  const EndPoint = "https://bookapi.cm.hmw.lol/";

  const FetchData = async () => {
    try {
      const response = await fetch(`${EndPoint}api/books`);
      const data = await response.json();
      return data.data.slice(0, 1);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    FetchData().then((data) => {
      setBook(data);
      console.log(data);
    });
  }, []);

  const SmallBook = async () => {
    try {
      const response = await fetch(`${EndPoint}api/books`);
      const data = await response.json();
      return data.data.slice(2, 6);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    SmallBook().then((data) => {
      setSmallBook(data);
      console.log(data);
    });
  }, []);

  const BigBook = async () => {
    try {
      const response = await fetch(`${EndPoint}api/books`);
      const data = await response.json();
      return data.data.slice(2, 6);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    BigBook().then((data) => {
      setBigBook(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      {books.map((item, index) => (
        <div key={index} className="container p-8 mt-2 mx-auto border rounded-lg shadow-lg object-cover bg-heroSection">
          <div className="grid grid-cols-2 justify-between items-center">
            <div className="ml-12">
              <h3 className="text-xl mb-2 font-semibold">MUST READ</h3>
              <h1 className="text-6xl mb-4 font-semibold ">{item.title}</h1>
              <h5 className="text-base font-medium flex flex-row">
                {item.author.name}{" "}
                <span className="ml-3">
                  <Rating value={item.rating} />
                </span>
              </h5>
              <div className="flex flex-row"></div>
              <p className="text-base mt-7 mb-4">{item.synopsis}</p>
              <div>
                <button className="bg-button rounded-lg text-xl text-white p-3">
                  <Link to={`detail/${item.id}`}>Read Book</Link>
                </button>
                <button className="ml-10 p-3 rounded-lg border text-button">See All Recommendations</button>
              </div>
            </div>
            <div className="ml-20 justify-self-center">
              <img src={item.image_url} alt="gambar buku" className="max-h-96 rounded-lg" />
            </div>
          </div>
        </div>
      ))}

      <div className="container p-8 mt-[116px] mx-auto">
        <div className="grid grid-cols-2 gap-[114px] ">
          {smallBook.map((item, index) => (
            <div key={index} className="flex flex-row ">
              <div className="w-[346px] h-[277px]">
                <img src={item.image_url} alt="product2" className="w-full h-full rounded-lg " />
              </div>
              <div className="ml-5 relative">
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-xl">by {item.author.name}</p>
                <div className="flex flex-row w-[41px] h-[41px] rounded-full bg-rating">
                  <span className="mt-2 ml-2">{item.rating}</span>
                  <span className="ml-5">
                    <Rating value={item?.rating} />
                  </span>
                </div>
                <p className="text-base">
                  <TextTruncate line={2} element="span" truncateText="…" text={item.synopsis} textTruncateChild={<a href="#">Read more</a>} />
                </p>
                <div>
                  <button className="border absolute bottom-0  p-3 rounded-lg w-full  text-button">
                    <Link to={`detail/${item.id}`}>Read Book</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container p-8 mt-[113px] mx-auto">
        <div className="grid grid-cols-4 gap-x-16">
          {bigBook.map((item, index) => (
            <div key={index} className="w-[263px] h-[750px] relative">
              <div className="w-[260px] h-[340px]">
                <img src={item.image_url} alt="product" className="w-full h-full" />
              </div>
              <div className="">
                <p className="text-2xl font-semibold leading-loose">{item.title}</p>
                <p className="text-xl">by {item.author.name}</p>
                <Rating value={item.rating}></Rating>
              </div>
              <button className="border p-3 absolute bottom-0 rounded-lg w-full text-button">
                <Link to={`detail/${item.id}`}>Read Book</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HeroSection;
