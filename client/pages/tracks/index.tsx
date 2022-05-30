import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Card, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks, searchTracks } from "../../store/action-creators/track";
import { ITrack } from "../../types/track";
import { useDispatch } from "react-redux";

const TracksPage = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector(state => state.track);
  const [query, setQuery] = useState("");
  const [timer, setTimer] = useState(0);
  const dispatch = useDispatch() as NextThunkDispatch;

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    if (timer) {
      clearTimeout(timer);
    } else {
      setTimeout(async () => {
        await dispatch(await searchTracks(event.target.value));
      }, 555);
    }
  };

  if (error) {
    return <MainLayout>{error}</MainLayout>;
  }

  return (
    <MainLayout>
      <Grid container justifyContent={"center"}>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent={"space-between"}>
              <Typography variant={"h4"}>All Tracks</Typography>
              <Button onClick={() => router.push("/tracks/create")}>Load tracks</Button>
              <TextField
                fullWidth
                value={query}
                onChange={search}
              />
              <TrackList tracks={tracks} />
            </Grid>
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default TracksPage;


export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchTracks());
  return { props: {} };
});
