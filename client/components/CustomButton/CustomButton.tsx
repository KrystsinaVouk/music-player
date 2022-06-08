import { ButtonProps } from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, disabled = false, ...props }) => {

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={styles.btn +' '+ props.className}
    >{children}
    </button>
  );
};

export default CustomButton;