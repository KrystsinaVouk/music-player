import React, { ReactChild, ReactFragment, ReactPortal, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mui/material";
import Head from "next/head";
import Player from "../components/Player/Player";
import styles from "./MainLayout.module.css" ;

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

interface MainLayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps>
  = ({
       children = [],
       title,
       description,
       keywords
     }) => {

  return (
    <>
      <Head>
        <title>{title || "Music Platform"}</title>
      </Head>
      <Navbar />
      <Container className={styles.container}>
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;