import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container p-8 mx-auto">
        <img src="/src/Components/img/books.png" alt="gambar" className="w-[574px] h-[221px] mx-auto" />
        <div className="w-[468px] h-[316px] mx-auto mt-10">
          <div className="w-[285px] h-[221px] mx-auto ">
            <p className="text-center text-[147.18px] font-medium text-button">404</p>
            <p className="text-center top-0 text-[20px]">Looks like you have got lost ...</p>
          </div>
          <div className="mt-10">
            <p className="text-center">The page you’re looking for doesn’t exist or has been moved.</p>
          </div>
          <div className="mx-auto">
            <button className="border w-[121px] h-[33px] text-[13px] font-medium mt-5">
              <Link to={"/"}>Back Home</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
