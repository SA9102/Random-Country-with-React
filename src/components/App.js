import React, { useState } from "react";
import Country from "./Country.js";
import { countryList } from "../countryList.js";

function App() {
  const [country, setCountry] = useState("");
  const countries = countryList;

  const chooseCountry = (countries) => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setCountry(countries[randomIndex]);
  };
  return (
    <div id="container">
      <Country country={country} />
      <button onClick={() => chooseCountry(countries)}>Change country</button>
    </div>
  );
}

export default App;
