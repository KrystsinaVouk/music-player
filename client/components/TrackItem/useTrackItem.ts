import { useRouter } from "next/router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { deleteTrack } from "../../store/action-creators/track";
import { ITrack } from "../../types/track";
import { MouseEventHandler } from "react";

interface IUseTrackItem {
  (track: ITrack, setChosenTrack: Function): {
    chooseTrack: MouseEventHandler,
    removeTrack: MouseEventHandler
  };
}

export const useTrackItem: IUseTrackItem = (track, setChosenTrack) => {
  const router = useRouter();
  const { pauseTrack, setActiveTrack } = useActions();
  const { active } = useTypedSelector(state => state.player);
  const dispatch = useDispatch() as NextThunkDispatch;

  const chooseTrack = (event) => {
    event.stopPropagation();
    setActiveTrack(track);
    setChosenTrack(track._id);
  };

  const removeTrack = (event) => {
    event.stopPropagation();
    dispatch(deleteTrack(track._id));
  };

  return {
    chooseTrack,
    removeTrack
  };
};

