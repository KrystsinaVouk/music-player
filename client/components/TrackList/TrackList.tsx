import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ITrack } from "../../types/track";
import TrackItem from "../TrackItem/TrackItem";

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  const { setActiveTrack, pauseTrack } = useActions();
  const { active } = useTypedSelector(state => state.player);

  useEffect(() => {
    console.log({ active });
    if(!active){
      pauseTrack();
    }
  }, []);
  
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map(track =>
          <TrackItem
            key={track._id}
            track={track}
          />
        )}
      </Box>
    </Grid>
  );
};

export default TrackList;