import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
const track: ITrack = {
  _id: "3",
  name: "Track 3",
  artist: "artist 3",
  text: "Some tex3",
  listens: 0,
  audio: "http://localhost:5000/audio/a7232633-01eb-475d-8f42-f774760a4d05.m4a",
  picture: "http://localhost:5000/image/b553a7e5-a51b-4bd3-82fe-2dc1630b5173.jpg",
  comments: []
};

const TrackItemPage = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{ fontSize: 12 }}
        onClick={() => router.push("/tracks")}>
        Back to all tracks
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={300} height={300} />
        <div style={{ marginLeft: 30 }}>
          <Typography variant={"h4"}>Track Title - {track.name}</Typography>
          <Typography variant={"h4"}>Track Artist - {track.artist}</Typography>
          <Typography color={'secondary'} variant={"body1"}>Number of listens: {track.listens}</Typography>
        </div>
      </Grid>
      <Typography variant={"h5"}>Lyrics</Typography>
      <p>{track.text}</p>
      <Typography variant={"h6"}>Comments</Typography>
      <Grid container>
        <TextField
          label="Your name"
          fullWidth
        />
        <TextField
          label="Your comment"
          fullWidth
          multiline
          rows={4}
        />
        <Button>Comment</Button>
      </Grid>
      <div>
        {track.comments?.map(comment =>
          <div>
            <div>The author - {comment.username}</div>
            <div>The comment - {comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TrackItemPage;