import React from "react";
import { Route, Routes } from "react-router";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import NotFound from "../NotFound";
import UserHeader from "./UserHeader";
import UserPhotPosted from "./UserPhotPost";
import UserStats from "./UserStats";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotPosted />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
