// imported all Components components
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <Navbar /><Main />
      <Footer />
      <Banner/>
    </>
  );
}

export default App;

