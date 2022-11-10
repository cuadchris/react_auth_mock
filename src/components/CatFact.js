import React, { useState, useEffect } from "react";
import "./CatFact.css";

function CatFact() {
  const [catImg, setCatImg] = useState("");
  const [catFact, setCatFact] = useState("");

  const loadCatImg = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    setCatImg(data[0].url);
  };

  const loadCatFact = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setCatFact(data.fact);
  };

  useEffect(() => {
    loadCatImg();
    loadCatFact();
  }, []);

  return (
    <div className="container w-25 h-25 text-center">
      <p className="fact">"{catFact}"</p>
      <img
        className="img-fluid shadow-lg p-3 mb-5 bg-body rounded"
        src={catImg}
        alt="Pretty"
      />
      <button
        className="btn btn-warning mt-1 mb-3"
        onClick={() => {
          loadCatImg();
          loadCatFact();
        }}
      >
        Want more?
      </button>
    </div>
  );
}

export default CatFact;
