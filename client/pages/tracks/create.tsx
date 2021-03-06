import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import StepWrapperForm from "../../components/StepWrapperForm/StepWrapperForm";
import MainLayout from "../../layouts/MainLayout";

const Create = () => {

  return (
    <MainLayout>
      <Typography lineHeight={2.4} variant={"h3"}>Track Upload</Typography>
      <StepWrapperForm />
    </MainLayout>
  );
};

export default Create;