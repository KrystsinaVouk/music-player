import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useSingleTrackPage } from "../../hooks/useSingleTrackPage";
import CustomButton from "../../components/CustomButton/CustomButton";
import MainLayout from "../../layouts/MainLayout";
import styles from "../../styles/TrackPage.module.css";

const TrackItemPage = ({ serverTrack }) => {

  const { track, comeBack, username, comment, addComment } = useSingleTrackPage(serverTrack);

  return (
    <MainLayout
      title={"Music platform - " + track.name + " - " + track.artist}
      keywords={"Музыка, артисты, " + track.name + ", " + track.artist}
    >
      <CustomButton className={styles.btn} onClick={comeBack}>Back to all tracks</CustomButton>
      <Grid container className={styles.margin}>
        <img alt={`track cover`} className={styles.shadow} src={`http://localhost:5000/${track.picture}`} width={300} height={300} />
        <div className={styles.boxDescription}>
          <Typography variant={"h4"}>Track Title - {track.name}</Typography>
          <Typography variant={"h4"}>Track Artist - {track.artist}</Typography>
          <Typography color={"secondary"} variant={"body1"}>Number of listens: {track.listens}</Typography>
        </div>
      </Grid>
      <Typography variant={"h5"}>Lyrics</Typography>
      <p>{track.text}</p>
      <Typography className={styles.alignSelf} variant={"h6"}>Comments</Typography>
      <Grid container>
        <TextField
          value={username.value}
          onChange={username.onChange}
          label="Your name"
          fullWidth
          className={styles.textField}
          color="secondary"
          margin="dense"
        />
        <TextField
          value={comment.value}
          onChange={comment.onChange}
          label="Your comment"
          fullWidth
          multiline
          rows={4}
          className={styles.textField}
          color="secondary"
          margin="dense"
        />
        <CustomButton className={styles.btn} onClick={addComment}>Post Comment</CustomButton>
      </Grid>
      <div className={styles.commentsList}>
        {track.comments?.map(comment =>
          <div key={comment._id}>
            <div><i>The author</i> - <strong>{comment.username}</strong></div>
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