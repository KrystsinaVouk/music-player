import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import Navbar from "../components/Navbar/Navbar";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
  const router = useRouter();

  return (
    <MainLayout title={`Music platform - Tracks`}>
      <Navbar />
      <div className={"center"}>
        <h1>Welcome!</h1>
        <h3>Here all the best track go !</h3>
        <CustomButton onClick={() => router.push("/tracks")}>Explore</CustomButton>
      </div>
    </MainLayout>
  );
};

export default Index;