import { Box, Typography } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { Colors } from "../../styles/theme";

export default function AppbarDesktop({ matches }) {
    return (
        /**
         * Appbar Container
         * Header
         * List
         */
        <Box 
            sx={{
                display: "flex",
                marginTop: 4,
                justifyContent: "center",
                alignItems: 'center',
                padding: '2px 8px'
            }}
        >
            <Typography
                sx={{
                    color: Colors.secondary,
                    padding: '4px',
                    fontSize: '4em',
                    fontFamily: '"Montez", "cursive"',
                    flexGrow: 1,
                }}
            >My Bags</Typography>
        </Box>
    )
}