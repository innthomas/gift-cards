import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import allGiftCards from "./data/data.jsx";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container md:grid grid-cols-3 content-evenly mx-auto">
        {allGiftCards.map((giftCard) => {
          return (
            <div
              className="card bg-slate-200 m-2 p-2 hover:text-white hover:bg-slate-400"
              key={giftCard.id}
            >
              <div className="card-body">
                <div className="card-title m-2 p-2 font-medium text-lg">
                  <h5>{giftCard.title}</h5>
                </div>
                <div>
                  <h6 className="font-extralight text-lg mx-3 pb-4">
                    currencies:
                  </h6>
                  <p className="card-text font-mono">
                    {giftCard.currencies.join(" ")}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
