import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import FileUpload from "../FileUpload/FileUpload";
import StepWrapper from "../../components/StepWrapper/StepWrapper";
import CustomButton from "../CustomButton/CustomButton";
import styles from "../StepWrapperForm/StepWrapperForm.module.css";
import { useStepWrapperForm } from "./useStepWrapperForm";

const StepWrapperForm = () => {

  const {
    name,
    artist,
    text,
    activeStep,
    setPicture,
    setAudio,
    next,
    back
  } = useStepWrapperForm();

  return (
    <Grid width={600}>
      <StepWrapper activeStep={activeStep}>
        {activeStep <= 0 && <Grid container direction={"column"} className={styles.grid}>
          <Typography color={"secondary"} variant={"h6"}>Step 1</Typography>
          <TextField
            value={name.value}
            onChange={name.onChange}
            className={styles.text}
            label={"Track Title"}
          />
          <TextField
            value={artist.value}
            onChange={artist.onChange}
            className={styles.text}
            label={"Artist Name"}
          />
          <TextField
            value={text.value}
            onChange={text.onChange}
            className={styles.text}
            label={"Track Lyrics"}
            multiline
            rows={3}
          />
        </Grid>}

        {activeStep === 1 &&
        <Grid container direction={"column"} className={styles.grid}>
          <Typography color={"secondary"} variant={"h6"}>Step 2</Typography>
          <FileUpload setFile={setPicture} accept="image/*">
            <Button variant={"outlined"} color={"secondary"}>Upload the track cover</Button>
          </FileUpload>
        </Grid>}

        {activeStep >= 2 &&
        <Grid container direction={"column"} className={styles.grid}>
          <Typography color={"secondary"} variant={"h6"}>Step 3</Typography>
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button variant={"outlined"} color={"secondary"}>Upload the track</Button>
          </FileUpload>
        </Grid>}
      </StepWrapper>
      <Grid container justifyContent={"space-between"} style={{ paddingBottom: 50 }}>
        <CustomButton disabled={activeStep === 0} onClick={back}>Back</CustomButton>
        <CustomButton onClick={next}>Next</CustomButton>
      </Grid>
    </Grid>
  );
};

export default StepWrapperForm;