import React from "react";

const Header = () => {
  return (
    <div className="">
      <nav className="flex space-x-20 p-5 bg-slate-700 text-white border-gray-200 rounded-md border-4 drop-shadow-lg font-bold">
        <h1 className="text-bold text-2xl pt-1">AfriBTC</h1>
        <ul className="hidden md:flex flex-auto space-x-20 pt-2 ">
          <li>Home</li>
          <li>Bitcoin Trading</li>
          <li>Giftcards</li>
          <li>Wallet</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <header className="text-center">
        <h1 className="text-2xl tracking-wide p-12 bg-slate-300 font-serif font-medium">
          <span className="font-extrabold">AFRIBTC</span>, the leading currency
          exchange platform!
        </h1>
      </header>
    </div>
  );
};

export default Header;
