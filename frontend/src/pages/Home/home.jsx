import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/explore-menu";
import Header from "../../components/Header/header";
import "./home.css";
import FoodDisplay from "../../components/FoodDisplay/food-display";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
