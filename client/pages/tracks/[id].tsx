import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useInput } from "../../hooks/useInput";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackItemPage = ({ serverTrack }) => {
  const router = useRouter();
  const [track, setTrack] = useState(serverTrack);
  const { setActiveTrack, pauseTrack } = useActions();
  const comment = useInput("");
  const username = useInput("");

  const addComment = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/tracks/comment`, {
        username: username.value,
        text: comment.value,
        trackId: track._id
      });
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (err) {
      console.error(err);
    }
  };

 const comeBack =() => {
   pauseTrack();
   router.push("/tracks")
 }

  useEffect(() => {
    setActiveTrack(track);
  }, [serverTrack]);

  return (
    <MainLayout
      title={"Music platform - " + track.name + " - " + track.artist}
      keywords={'Музыка, артисты, ' + track.name + ", " + track.artist}
    >
      <Button
        variant={"outlined"}
        style={{ fontSize: 12 }}
        onClick={comeBack}
      >
        Back to all tracks
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={`http://localhost:5000/${track.picture}`} width={300} height={300} />
        <div style={{ marginLeft: 30 }}>
          <Typography variant={"h4"}>Track Title - {track.name}</Typography>
          <Typography variant={"h4"}>Track Artist - {track.artist}</Typography>
          <Typography color={"secondary"} variant={"body1"}>Number of listens: {track.listens}</Typography>
        </div>
      </Grid>
      <Typography variant={"h5"}>Lyrics</Typography>
      <p>{track.text}</p>
      <Typography style={{alignSelf:'flex-start'}} variant={"h6"}>Comments</Typography>
      <Grid container>
        <TextField
          {...username}
          label="Your name"
          fullWidth
        />
        <TextField
          {...comment}
          label="Your comment"
          fullWidth
          multiline
          rows={4}
        />
        <Button onClick={addComment}>Post Comment</Button>
      </Grid>
      <div style={{alignSelf:'flex-start'}}>
        {track.comments?.map(comment =>
          <div key={comment._id}>
            <div><i>The author</i> - <strong>{comment.username}</strong> </div>
            <div><i>The comment</i> - {comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TrackItemPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get(`http://localhost:5000/tracks/${params.id}`);

  return {
    props: {
      serverTrack: response.data
    }
  };
};