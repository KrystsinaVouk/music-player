import axios from "axios";
import { Dispatch } from "react";
import { TrackAction, TrackActionTypes } from "../../types/track";


export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get("http://localhost:5000/tracks");
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: "The error occurred during loading the tracks..."
      });
    }
  };
};

export const searchTracks = (query: string) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get("http://localhost:5000/tracks/search?query=" + query);
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: "The error occurred during loading the tracks..."
      });
    }
  };
};

export const deleteTrack = (trackId: string) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      await axios.delete("http://localhost:5000/tracks/" + trackId);
      const updatedData = await axios.get("http://localhost:5000/tracks");
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: updatedData.data });
    } catch (e) {
      console.log(e);
    }
  };
};