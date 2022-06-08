import React, { useEffect, useState } from "react";
import { Box, Button, Card, Grid, IconButton, Input, InputAdornment, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useTracksPage } from "../../hooks/useTracksPage";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks, searchTracks } from "../../store/action-creators/track";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList/TrackList";
import CustomButton from "../../components/CustomButton/CustomButton";
import MainLayout from "../../layouts/MainLayout";
import styles from "../../styles/TracksPage.module.css";

const TracksPage = () => {
  const router = useRouter();
  const { error, query, search, tracks } = useTracksPage();
  
  if (error) {
    return <MainLayout>{error}</MainLayout>;
  }

  return (
    <MainLayout>
      <Grid container justifyContent={"center"}>
        <Card className={styles.trackListContainer}>
          <Box p={3}>
            <Grid container justifyContent={"space-between"} className={styles.grid}>
              <Typography className={styles.h4} variant={"h4"}>All Tracks</Typography>
              <CustomButton onClick={() => router.push("/tracks/create")}>Upload your track</CustomButton>
              <TextField
                className={styles.search}
                fullWidth
                value={query}
                onChange={search}
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  )
                }}
              />
            </Grid>
            <TrackList tracks={tracks} />
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
