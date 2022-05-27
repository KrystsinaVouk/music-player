import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
import MainLayout from "../../layouts/MainLayout";

interface StepWrapperProps {
  activeStep: number;
  children: ReactNode;
}

const steps = ["Track Information", "Upload the track cover", "Upload the track"];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <MainLayout>
      <Container>
        <Stepper>
          {steps.map((step, index) =>
            <Step
              key={index}
              completed={activeStep > index}
            >
              <StepLabel>{step}</StepLabel>
            </Step>
          )}
        </Stepper>
      </Container>
      <Grid container justifyContent={"center"} style={{ margin: "70px 0", height: 270 }}>
        <Card style={{ width: 600 }}>
          {children}
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default StepWrapper;