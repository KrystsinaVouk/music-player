import React, { useRef } from "react";

export const useFileUpload = (setFile:Function) => {
  const ref = useRef<HTMLInputElement>();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files[0]);
  }

  return  {
    ref,
    onChange
  }
};
