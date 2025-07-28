import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/explore-menu";
import Header from "../../components/Header/header";
import "./home.css";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
