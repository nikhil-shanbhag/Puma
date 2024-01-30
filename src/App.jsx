import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shoe1 from "./assets/PumaSneakers1.avif";
import Shoe2 from "./assets/PumaSneakers2.avif";
import Shoe3 from "./assets/PumaSneakers3.avif";
import Shoe4 from "./assets/PumaSneakers4.avif";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="hero flex justify-around mt-10">
        <Hero
          name="PUMA x STAPLE G Men's Suede Sneakers"
          price="$100.00"
          img={Shoe1}
        />
        <Hero
          name="Suede Brand Love II Men's Sneakers"
          price="$95.00"
          img={Shoe2}
        />
        <Hero
          name="FENTY x PUMA Creeper Phatty Men's Sneakers"
          price="$75.00"
          img={Shoe3}
        />
        <Hero
          name="PUMA x SWAROVSKI Suede Women's Sneakers"
          price="$90.00"
          img={Shoe4}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
