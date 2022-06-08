import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

let audio;
export const usePlayer = () => {

  const { pause, active, volume, duration, currentTime } = useTypedSelector(state => state.player);
  const { playTrack, pauseTrack, setVolume, setActiveTrack, setCurrentTime, setDuration } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
      console.log('play');
    } else {
      setAudio();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = `http://localhost:5000/${active.audio}`;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
      play();
    }
  };

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  };
  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };
  return {
    active,
    audio,
    play,
    pause,
    currentTime,
    duration,
    volume,
    changeCurrentTime,
    changeVolume
  } ;
};

