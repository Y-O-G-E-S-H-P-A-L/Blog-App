import React from "react";
import "./App.css";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import blogs from "./components/Data";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="blog-container">
        {blogs.map((b, i) => {
          return <Blog name={b.name} image={b.image} description={b.description} time={b.time} key={i} />;
        })}
      </div>
      <Footer name={"Yogesh Pal"} />
    </div>
  );
};

export default App;
