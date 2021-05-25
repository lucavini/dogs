import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "../../styles/UserHeader.module.css";
import { useLocation } from "react-router";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const { pathname } = useLocation();

  React.useEffect(() => {
    switch (pathname) {
      case "/conta":
        setTitle("Feed");
        break;
      case "/conta/estatisticas":
        setTitle("Estatisticas");
        break;
      case "/conta/postar":
        setTitle("Postar");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
