/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Rating from "./Rating";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const EndPoint = "https://bookapi.cm.hmw.lol/api/books";
  const url = `${EndPoint}/${id}`;

  const Detail = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    Detail().then((data) => {
      setBook(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container p-8 mx-auto">
        <div className="flex flex-row">
          <div className="h-[408px] w-[587px]">
            <img src={book.image_url} alt="product" className="rounded-lg h-full w-full" />
          </div>
          <div className="ml-20 mt-10">
            <h1 className="text-6xl font-semibold">{book.title}</h1>
            <p className="text-4xl font-light">by {book.author?.name}</p>
            <p className="flex flex-row w-[41px] h-[41px] border rounded-full bg-rating">
              <span className="ml-2 mt-2">{book.rating}</span>
              <span className="ml-3 mr-3">
                <Rating value={book.rating}></Rating>
              </span>
            </p>
            <p className="text-xl font-normal mt-14">{book.synopsis}</p>
            <p className="text-xl font-light text-abu">First published {book.created_at}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SingleBook;
