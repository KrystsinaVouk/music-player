import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ITrack } from "../../types/track";
import styles from "../Player/Player.module.css";
import TrackProgress from "../TrackProgress/TrackProgress";
import { usePlayer } from "./usePLayer";


const Player = () => {
  const router = useRouter();
  const { active, audio, pause, currentTime, duration, play, volume, changeCurrentTime, changeVolume } = usePlayer();

  if (!active || router.pathname === "/") {
    audio?.pause();
    return null;
  }

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
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} style={'duration'} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} style={'volume'} />
    </div>
  );
};

export default Player;