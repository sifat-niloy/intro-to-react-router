import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <div> {navigation.state === "loading" && "Loading..."} </div>
      <Outlet />
    </div>
  );
};

export default Home;
