import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import Navbar from "../components/Navbar/Navbar";
import {Container} from "@mui/material";
import Head from "next/head";
import Player from '../components/Player/Player';

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

interface MainLayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps>
  = ({
       children=[],
       title,
       description,
       keywords
     }) => {
  return (
    <>
      <Head>
        <title>{title || 'Music Platform'}</title>
      </Head>
      <Navbar/>
      <Container style={{margin: '90px 0'}}>
        {children}
      </Container>
      <Player/>
    </>
  );
};

export default MainLayout;