import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../styles/theme";
import { clamp } from "./clamp";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


export default function IncDec() {
    const [value, setValue] = useState(1);
    const clampV = clamp(1, 10);
    return (
        <Box display='flex'>
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.secondary}`
                }}
                onClick={() => setValue((value) => clampV(value - 1))}
            >
                <RemoveIcon />               
            </IconButton>
            <Typography variant='h5' sx={{border: `1px solid ${Colors.secondary}`, p: 2}}>{value}</Typography>
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.secondary}`
                }}
                onClick={() => setValue((value) => clampV(value + 1))}
            >
                <AddIcon />               
            </IconButton>
        </Box>
    )
}