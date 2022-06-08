import { useRouter } from "next/router";
import { useState } from "react";

export const useNavbar = () => {

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return {
    open,
    router,
    handleDrawerClose,
    handleDrawerOpen
  }
};

