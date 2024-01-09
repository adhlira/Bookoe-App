const Footer = () => {
  return (
    <>
      <div className="container p-8 mt-[107px] mx-auto border rounded-2xl h-80 shadow-lg bg-footer">
        <div>
          <p className="text-putih text-center text-6xl font-semibold ">Join our newsletter to get our latest recommendation!</p>
        </div>
        <div className="flex gap-5 mt-16 place-content-center">
          <div>
            <input type="text" placeholder="Enter your email" className="h-14 w-96" />
          </div>
          <div>
            <button className="border rounded-lg text-xl bg-putih h-14 px-3">Submit</button>
          </div>
        </div>
      </div>
      <div className="container p-8 mt-2 mx-auto mb-5">
        <footer className="grid grid-cols-2 gap-x-96">
          <div className="flex flex-row">
            <img src="/src/Components/img/logo.png" alt="logo" />
            <div className="ml-2">
              <h1 className="text-4xl font-medium">Bookoe</h1>
              <h3 className="text-sm ml-1 font-light">Rekomendasi Bukumu</h3>
            </div>
          </div>
          <div className="flex flex-row justify-self-end">
            <p className="items-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quos! Veniam, soluta autem!</p>
          </div>
        </footer>
      </div>
      <hr />
      <div className="container p-8 mt-9 mx-auto rounded-2xl shadow-lg">
        <footer className="grid grid-cols-2 gap-x-96">
          <div className="col-span-1 w-max">
            <p className="text-lg">Copyright © 2023 Codemasters.id | All Rights Reserved </p>
          </div>
          <div className="flex flex-row gap-5 justify-self-end">
            <a href="">
              <img src="/src/Components/img/Facebook.png" alt="fb" className="h-5 w-2.5" />
            </a>
            <a href="">
              <img src="/src/Components/img/Twitter.png" alt="twitter" className="h-5 w-2.5" />
            </a>
            <a href="">
              <img src="/src/Components/img/Instagram.png" alt="instagram" className="h-5 w-2.5" />
            </a>
            <a href="">
              <img src="/src/Components/img/LinkedIn.png" alt="linkedin" className="h-5 w-2.5" />
            </a>
            <a href="">
              <img src="/src/Components/img/Youtube.png" alt="youtube" className="h-5 w-2.5" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
