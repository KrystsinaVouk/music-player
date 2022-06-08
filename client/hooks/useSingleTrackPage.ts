import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ITrack } from "../types/track";
import { useActions } from "./useActions";
import { useInput } from "./useInput";

export const useSingleTrackPage = (serverTrack: ITrack) => {

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
      comment.setValue("");
      username.setValue("");
    } catch (err) {
      console.error(err);
    }
  };

  const comeBack = () => {
    pauseTrack();
    router.push("/tracks");
  };

  useEffect(() => {
    setActiveTrack(track);
  }, [serverTrack]);

  return {
    track,
    comeBack,
    username,
    comment,
    addComment
  };
};

