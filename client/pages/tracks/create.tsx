import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import StepWrapper from "../../components/StepWrapper/StepWrapper";
import StepWrapperForm from "../../components/StepWrapperForm/StepWrapperForm";
import MainLayout from "../../layouts/MainLayout";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    }
  };
  const back = () => {
    setActiveStep(prev => prev - 1);
  };
  return (
    <MainLayout>
      <Typography variant={"h3"}>Track Upload</Typography>
      <StepWrapper activeStep={activeStep}>
        <StepWrapperForm activeStep={activeStep} />
      </StepWrapper>
      <Grid container justifyContent={"space-between"}>
        <Button disabled={activeStep === 0} onClick={back}>Back</Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;