import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NextThunkDispatch } from "../store";
import { searchTracks } from "../store/action-creators/track";
import { useTypedSelector } from "./useTypedSelector";

export const useTracksPage = () => {
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

  return {
    error,
    query,
    search,
    tracks
  };
};
