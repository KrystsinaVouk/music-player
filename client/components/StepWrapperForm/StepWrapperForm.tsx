import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FileUpload from "../FileUpload/FileUpload";

const StepWrapperForm = ({ activeStep }) => {
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  return (
    <>
      {activeStep === 0 && <Grid container direction={"column"} style={{ padding: 20 }}>
        <Typography color={"secondary"} variant={"h6"}>Step 1</Typography>
        <TextField
          style={{ marginTop: 10 }}
          label={"Track Title"}
        />
        <TextField
          style={{ marginTop: 10 }}
          label={"Artist Name"}
        />
        <TextField
          style={{ marginTop: 10 }}
          label={"Track Lyrics"}
          multiline
          rows={3}
        />
      </Grid>}

      {activeStep === 1 &&
      <Grid container direction={"column"} style={{ padding: 20 }}>
        <Typography color={"secondary"} variant={"h6"}>Step 2</Typography>
        <FileUpload setFile={setPicture} accept="image/*">
          <Button>Upload the track cover</Button>
        </FileUpload>
      </Grid>}

      {activeStep >= 2 &&
      <Grid container direction={"column"} style={{ padding: 20 }}>
        <Typography color={"secondary"} variant={"h6"}>Step 3</Typography>
        <FileUpload setFile={setAudio} accept="audio/*">
          <Button>Upload the track</Button>
        </FileUpload>
      </Grid>}
    </>
  );
};

export default StepWrapperForm;