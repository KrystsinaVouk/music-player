import React, { ReactChild, ReactFragment, ReactPortal, useEffect } from 'react';
import Navbar from "../components/Navbar/Navbar";
import {Container} from "@mui/material";
import Head from "next/head";
import Player from '../components/Player/Player';
import { useRouter } from 'next/router';

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

  const router = useRouter();

  useEffect(()=>{
    console.log(router.pathname)
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{title || 'Music Platform'}</title>
      </Head>
      <Navbar/>
      <Container style={{margin: '90px 0'}}>
        {children}
      </Container>
      {router.pathname !== '/' && <Player/> }
    </>
  );
};

export default MainLayout;