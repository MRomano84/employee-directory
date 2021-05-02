import React from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <Header />
      <Wrapper>
        <MainContainer />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
