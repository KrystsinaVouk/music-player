import React from "react";
import { useRouter } from "next/router";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { Card, Grid, IconButton } from "@mui/material";
import { ITrack } from "../../types/track";
import styles from "../TrackItem/TrackItem.module.scss";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";


interface TrackItemProps {
  track: ITrack;
  activeTrackIcon?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, activeTrackIcon = false }) => {
  const router = useRouter();
  const {playTrack, pauseTrack, setActiveTrack} = useActions();

  const play = (event) => {
    event.stopPropagation();
    setActiveTrack(track);
    //playTrack();
  };

  return (
    <Card className={styles.track} onClick={() => router.push("/tracks/" + track._id)}>
      <IconButton onClick={play}>
        {!activeTrackIcon
          ? <PlayArrow />
          : <Pause />
        }
      </IconButton>
      <img width={70} height={70} src={`http://localhost:5000/${track.picture}`} />
      <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <IconButton onClick={e => e.stopPropagation()} style={{ marginLeft: "auto" }}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;