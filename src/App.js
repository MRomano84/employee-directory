import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Wrapper>
        <MainContainer />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
