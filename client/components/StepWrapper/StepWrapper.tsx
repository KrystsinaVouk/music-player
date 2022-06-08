import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
import MainLayout from "../../layouts/MainLayout";
import styles from "./StepWrapper.module.css";

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
              color={'secondary'}
              key={index}
              completed={activeStep > index}
            >
              <StepLabel className={styles.stepLabel}>{step}</StepLabel>
            </Step>
          )}
        </Stepper>
      </Container>
      <Grid container justifyContent={"center"} className={styles.grid}>
        <Card style={{ width: 600 }}>
          {children}
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default StepWrapper;