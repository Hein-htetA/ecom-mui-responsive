import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarMobile from "./AppbarMobile";
import AppbarDesktop from "./AppbarDesktop";
import { useState } from "react";

export default function Appbar({ setShowSearch }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches ? 
                <AppbarMobile matches={matches} setShowSearch={setShowSearch} /> : 
                <AppbarDesktop matches={matches} setShowSearch={setShowSearch} />
            }
        </>
    );

}