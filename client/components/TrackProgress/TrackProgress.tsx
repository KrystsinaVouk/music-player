import React, { ReactNode } from "react";
import styles from "../TrackProgress/TrackProgress.module.css";

interface TrackProgressProps {
  left: number;
  right: number;
  style: string;
  onChange: (e) => void,
}

const TrackProgress: React.FC<TrackProgressProps> = ({ left, right, onChange, style = "" }) => {
  return (
    <div className={styles[style]}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}

      />
      <div>{left} / {right}</div>
    </div>
  );
};

export default TrackProgress;