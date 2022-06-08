import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const [chosenTracks, setChosenTracks] = useState(tracks);

  useEffect(() => {
    if (!active) {
      pauseTrack();
    }
  }, []);

  const setChosenTrack = (trackId) => {
/*    const newTracks = chosenTracks.map((track: ITrack) => {
      if (track._id === trackId) {
        return { ...track, chosen: !track.chosen };
      } else return { ...track, chosen: false  };
    });
    setChosenTracks(newTracks);*/
  };

  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map(track =>
          <TrackItem
            key={track._id}
            track={track}
            setChosenTrack={setChosenTrack}
          />
        )}
      </Box>
    </Grid>
  );
};

export default TrackList;