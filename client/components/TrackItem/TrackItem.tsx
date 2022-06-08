import React from "react";
import { Delete, PlayArrow } from "@mui/icons-material";
import { Card, Grid, IconButton } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";
import { useTrackItem } from "./useTrackItem";
import { ITrack } from "../../types/track";
import InsightsIcon from '@mui/icons-material/Insights';
import styles from "../TrackItem/TrackItem.module.scss";

interface TrackItemProps {
  track: ITrack;
  setChosenTrack: Function;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, setChosenTrack }) => {

  const { chooseTrack, removeTrack } = useTrackItem(track, setChosenTrack);

  return (
    <Link href={"/tracks/" + track._id}>
      <Card className={styles.track}>
        <IconButton className={styles.iconBtn} onClick={chooseTrack}>
          {!(track.chosen)
            ? <InsightsIcon />
            : <ArrowRightAltIcon />
          }
        </IconButton>
        <a className={styles.card}>
          <img className={styles.pic} width={70} height={70} src={`http://localhost:5000/${track.picture}`} />
          <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
            <div>{track.name}</div>
            <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
          </Grid>
          <IconButton onClick={removeTrack} style={{ marginLeft: "auto" }}>
            <Delete />
          </IconButton>
        </a>
      </Card>
    </Link>
  );
};

export default TrackItem;