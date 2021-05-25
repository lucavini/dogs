import React from "react";
import { Route, Routes } from "react-router";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotPosted from "./UserPhotPost";
import UserStats from "./UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotPosted />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
