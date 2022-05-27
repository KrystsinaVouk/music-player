import { Box, Button, Card, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList/TrackList";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TracksPage = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "Track 1",
      artist: "artist 1",
      text: "Some text",
      listens: 0,
      audio: "http://localhost:5000/audio/ba93eec7-b718-4746-94b5-726597211a0f.mp3",
      picture: "http://localhost:5000/image/58ab3cad-1bd5-4e85-a74d-a3d0d8020978.jpg",
      comments: []
    },
    {
      _id: "2",
      name: "Track 2",
      artist: "artist 2",
      text: "Some text 2",
      listens: 0,
      audio: "http://localhost:5000/audio/fb53318e-67f8-4129-adcc-7906f26055c7.m4a",
      picture: "http://localhost:5000/image/18090666-cbdc-4821-9a6c-3944e26cd8b4.jpg",
      comments: []
    },
    {
      _id: "3",
      name: "Track 3",
      artist: "artist 3",
      text: "Some tex3",
      listens: 0,
      audio: "http://localhost:5000/audio/a7232633-01eb-475d-8f42-f774760a4d05.m4a",
      picture: "http://localhost:5000/image/b553a7e5-a51b-4bd3-82fe-2dc1630b5173.jpg",
      comments: []
    }
  ];
  return (
    <MainLayout>
      <Grid container justifyContent={"center"}>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent={"space-between"}>
              <Typography variant={"h4"}>All Tracks</Typography>
              <Button onClick={() => router.push("/tracks/create")}>Load tracks</Button>

              <TrackList tracks={tracks}/>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default TracksPage;