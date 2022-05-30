import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useInput } from "../../hooks/useInput";
import { useRouter } from "next/router";
import FileUpload from "../FileUpload/FileUpload";
import StepWrapper from "../../components/StepWrapper/StepWrapper";

const StepWrapperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");
  const router = useRouter();

  const next = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    } else {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("artist", artist.value);
      formData.append("text", text.value);
      formData.append("picture", picture);
      formData.append("audio", audio);
      axios.post(`http://localhost:5000/tracks`, formData)
        .then(response => {
          console.log(formData);
          router.push("/tracks");
        })
        .catch((err) => console.error(err));
    }
  };
  
  const back = () => {
    setActiveStep(prev => prev - 1);
  };

  return (
    <Grid width={600}>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && <Grid container direction={"column"} style={{ padding: 20 }}>
          <Typography color={"secondary"} variant={"h6"}>Step 1</Typography>
          <TextField
            {...name}
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
      </StepWrapper>
      <Grid container justifyContent={"space-between"}>
        <Button disabled={activeStep === 0} onClick={back}>Back</Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </Grid>
  );
};

export default StepWrapperForm;