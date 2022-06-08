import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useInput } from "../../hooks/useInput";

export const useStepWrapperForm = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");
  const router = useRouter();

  const next = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    } else {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("artist", artist.value);
      formData.append("text", text.value);
      formData.append("picture", picture);
      formData.append("audio", audio);

      axios.post(`http://localhost:5000/tracks`, formData)
        .then(response => {
          console.log(formData);
          router.push("/tracks");
        })
        .catch((err) => console.error(err));
    }
  };

  const back = () => {
    setActiveStep(prev => prev - 1);
  };

  return {
    name,
    artist,
    text,
    activeStep,
    setPicture,
    setAudio,
    next,
    back
  };
};

