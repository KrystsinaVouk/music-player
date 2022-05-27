import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import { ITrack } from "../../types/track";
import styles from "../Player/Player.module.scss";
import TrackProgress from "../TrackProgress/TrackProgress";

const active: ITrack = {
  _id: "3",
  name: "Track 3",
  artist: "artist 3",
  text: "Some tex3",
  listens: 0,
  audio: "http://localhost:5000/audio/a7232633-01eb-475d-8f42-f774760a4d05.m4a",
  picture: "http://localhost:5000/image/b553a7e5-a51b-4bd3-82fe-2dc1630b5173.jpg",
  comments: []
};

const Player = () => {
  let pause = true;
  const play = () => {

  };
  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause
          ? <PlayArrow />
          : <Pause />
        }
      </IconButton>
      <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{active?.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={(e) => {}} />
        <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={(e) => {}} />
    </div>
  );
};

export default Player;